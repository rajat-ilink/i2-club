import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

// ─── EmailJS Credentials ────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials from https://emailjs.com
const EMAILJS_PUBLIC_KEY = '0sS3H19hocpTolKfM';
const SUGGEST_SERVICE_ID = 'service_9n3e318';
const SUGGEST_TEMPLATE_ID = 'template_1qa4c6t';
const REQUEST_SERVICE_ID = 'service_sjq0uqc';
const REQUEST_TEMPLATE_ID = 'template_ge8g44p';
// ────────────────────────────────────────────────────────────────────────────

interface AIAgent {
  name: string;
  description: string;
  category: string;
  icon: string;
}

export interface AgentDetails {
  problemItSolves: string;
  howItWorks: string;
  expectedOutput: string;
  keyBenefits: string[];
}

interface SuggestFormData {
  name: string;
  email: string;
  department: string;
  problem: string;
  agentAction: string;
  benefit: string;
  users: number | null;
  tools: string;
  details: string;
}

interface RequestFormData {
  name: string;
  email: string;
  department: string;
  selectedAgent: string;
  purpose: string;
  users: number | null;
  benefit: string;
  access: string;
  comments: string;
}

@Component({
  selector: 'app-ai-agents',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ai-agents.html',
  styleUrl: './ai-agents.scss'
})
export class AiAgentsComponent {

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  searchTerm = '';

  // ── Modal state ──────────────────────────────────────────────────────────
  isSuggestModalOpen = false;
  isRequestModalOpen = false;
  isExploreModalOpen = false;
  selectedExploreAgent: AIAgent | null = null;
  selectedExploreAgentDetails: AgentDetails | null = null;

  isSuggestSending = false;
  isRequestSending = false;

  suggestError = '';
  requestError = '';

  // ── Toast state ──────────────────────────────────────────────────────────
  toastVisible = false;
  toastMessage = '';
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  // ── Form data ────────────────────────────────────────────────────────────
  suggestData: SuggestFormData = this.freshSuggestData();
  requestData: RequestFormData = this.freshRequestData();

  // ── Agent list ───────────────────────────────────────────────────────────
  agents: AIAgent[] = [
    {
      name: 'AI Work Assignment Engine',
      description:
        'Automatically assigns work items to the best-fit employee based on skills, workload, priority and SLA urgency.',
      category: 'Productivity',
      icon: '✦'
    },
    {
      name: 'Salesforce Intelligent Case Resolution',
      description:
        'Automatically classifies Salesforce cases, retrieves relevant knowledge and policies, and drafts or escalates resolutions.',
      category: 'Customer Service',
      icon: '◈'
    },
    {
      name: 'Automated Feedback Agent',
      description:
        'Converts interview transcripts into structured candidate feedback and skill ratings, with seamless ATS updates.',
      category: 'HR & Recruitment',
      icon: '◎'
    },
    {
      name: 'WhatsApp Recruiter Assistance',
      description:
        'Automates candidate screening, resume matching, interview scheduling and recruitment communication through WhatsApp and Teams.',
      category: 'HR & Recruitment',
      icon: '◌'
    },
    {
      name: 'Intelligent Document Classification',
      description:
        'Classifies and extracts information from medical documents to enable structured data, semantic search and context-aware responses.',
      category: 'Knowledge',
      icon: '▣'
    },
    {
      name: 'Pre-boarding Engagement Agent',
      description:
        'Keeps candidates engaged between offer acceptance and joining through personalised updates, reminders and milestone tracking.',
      category: 'HR & Recruitment',
      icon: '◇'
    },
    {
      name: 'HR Onboarding Agent',
      description:
        'Coordinates and tracks IT, HR, BGV and Admin onboarding activities to ensure employees are ready for Day One.',
      category: 'HR & Recruitment',
      icon: '⊕'
    },
    {
      name: 'Employee Referral Optimisation',
      description:
        'Uses AI to analyse employee referrals, match candidates to roles and prioritise suitable profiles for recruiters.',
      category: 'HR & Recruitment',
      icon: '⌘'
    },
    {
      name: 'Poster Generation Agent',
      description:
        'Creates professional, on-brand posters for hiring, events, announcements, festivals and other organisational needs in seconds.',
      category: 'Creative',
      icon: '✧'
    },
    {
      name: 'Employee Bench Policy Enforcement Agent',
      description:
        'Monitors employee bench status, checks policy compliance and recommends timely actions such as allocation or training.',
      category: 'HR & Operations',
      icon: '◉'
    },
    {
      name: 'Weekly Project Status Agent',
      description:
        'Generates consolidated project status reports with project, financial and resource risks and shares them with stakeholders.',
      category: 'Productivity',
      icon: '◫'
    },
    {
      name: 'Automated Customer Service Agent',
      description:
        'Resolves routine customer queries using the knowledge base and automatically escalates complex cases to support teams.',
      category: 'Customer Service',
      icon: '◍'
    },
    {
      name: 'Business Operations Assistant',
      description:
        'Provides real-time, natural-language access to Business Central data including customers, orders, invoices, inventory and finance.',
      category: 'Business Operations',
      icon: '⌬'
    },
    {
      name: 'IntelliReport – PDF Report Generator',
      description:
        'Converts natural-language requests into database queries, analysis and professional, business-ready PDF reports.',
      category: 'Analytics & Reporting',
      icon: '▤'
    },
    {
      name: 'Insight Report Builder',
      description:
        'Transforms enterprise data into executive-ready reports featuring KPIs, trends, risks, opportunities and recommendations.',
      category: 'Analytics & Reporting',
      icon: '◒'
    },
    {
      name: 'Boolean X-Ray Search Agent',
      description:
        'Converts job descriptions into optimised Boolean/X-Ray searches and identifies relevant candidate profiles faster.',
      category: 'HR & Recruitment',
      icon: '⌕'
    },
    {
      name: 'Web Content Intelligence Agent',
      description:
        'Reads information from webpages and provides contextual answers based specifically on the supplied web content.',
      category: 'Knowledge',
      icon: '◎'
    },
    {
      name: 'Strategy & Policy Research Agent',
      description:
        'Combines internal company policies with current external research to deliver citation-backed, up-to-date answers.',
      category: 'Research',
      icon: '◇'
    },
    {
      name: 'Procurement & Competitive Product Intelligence',
      description:
        'Compares internal products with external vendors on pricing, availability and product fit to support procurement decisions.',
      category: 'Business Operations',
      icon: '◈'
    },
    {
      name: 'Campaign Brief Writer',
      description:
        'Uses company knowledge, market research and AI strategy to generate structured campaign briefs with messaging, channels, budgets and KPIs.',
      category: 'Creative',
      icon: '✎'
    },
    {
      name: 'Candidate Validation Agent',
      description:
        'Validates candidate information across multiple sources and generates evidence-backed recruitment reports and interview questions.',
      category: 'HR & Recruitment',
      icon: '✓'
    }
  ];

  // ── Filtered agents ──────────────────────────────────────────────────────
  get filteredAgents(): AIAgent[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.agents;
    return this.agents.filter(agent =>
      agent.name.toLowerCase().includes(term) ||
      agent.description.toLowerCase().includes(term) ||
      agent.category.toLowerCase().includes(term)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  // ── Explore modal ────────────────────────────────────────────────────────
  openExploreModal(agent: AIAgent): void {
    this.selectedExploreAgent = agent;
    this.selectedExploreAgentDetails = this.getAgentDetails(agent.name);
    this.isExploreModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeExploreModal(): void {
    this.isExploreModalOpen = false;
    this.selectedExploreAgent = null;
    this.selectedExploreAgentDetails = null;
    document.body.style.overflow = '';
  }

  requestFromExplore(agentName: string): void {
    this.closeExploreModal();
    this.openRequestModal(agentName);
  }

  getAgentDetails(agentName: string): AgentDetails | null {
    if (agentName.toLowerCase().includes('feedback agent')) {
      return {
        problemItSolves:
          'Recruiters spend hours manually reviewing interview transcripts, drafting evaluation notes, and assigning skill ratings. Unstructured manual reviews introduce subjectivity and evaluation bias across hiring teams. Manual updates to Applicant Tracking Systems (ATS) cause operational delays .',
        howItWorks:
          'The system automates the post-interview evaluation pipeline end-to-end by having HR initiate a Microsoft Teams meeting via a custom app integrated with Zoho Recruit IDs to record, stream, and generate real-time transcripts. Upon completion of the interview, backend services trigger the iGentic Agent via API to parse the transcript using role-specific rubrics, extracting key quotes and timestamps to construct objective 1–5 numerical skill ratings alongside structured feedback notes. Recruiters can then review, edit, or regenerate these AI-drafted evaluation reports directly within their chat interface (such as WhatsApp or Teams) before syncing the finalized feedback and candidate status to Zoho Recruit with a single click.',
        expectedOutput:
          'The system delivers pre-drafted, structured candidate evaluation reports directly inside chat interfaces, complete with objective 1–5 numerical skill ratings backed by exact transcript quotes and timestamps. Additionally, it provides seamless, single-click synchronization of all completed feedback notes, scorecards, and updated candidate pipeline statuses straight into Zoho Recruit.',
        keyBenefits: [
          'Time Savings & Efficiency: Eliminates manual transcript reading and report drafting by instantly generating structured evaluations for recruiters.',
          'Standardized Evaluation: Minimizes hiring bias by enforcing consistent, evidence-backed scoring metrics across all candidate interviews.'
        ]
      };
    }
    return null;
  }

  // ── Suggest modal ────────────────────────────────────────────────────────
  openSuggestModal(): void {
    this.isSuggestModalOpen = true;
    // this.suggestSubmitted = false;
    this.suggestError = '';
    this.suggestData = this.freshSuggestData();
    document.body.style.overflow = 'hidden';
  }

  closeSuggestModal(): void {
    this.isSuggestModalOpen = false;
    document.body.style.overflow = '';
  }

  async submitSuggestForm(): Promise<void> {
    if (!this.suggestData.name || !this.suggestData.email ||
      !this.suggestData.department || !this.suggestData.problem ||
      !this.suggestData.agentAction || !this.suggestData.benefit) {
      this.suggestError = 'Please fill in all required fields.';
      return;
    }

    this.isSuggestSending = true;
    this.suggestError = '';

    const templateParams = {
      from_name: this.suggestData.name,
      from_email: this.suggestData.email,
      department: this.suggestData.department,
      problem: this.suggestData.problem,
      agent_action: this.suggestData.agentAction,
      benefit: this.suggestData.benefit,
      users: this.suggestData.users ?? 'Not specified',
      tools: this.suggestData.tools || 'Not specified',
      details: this.suggestData.details || 'N/A',
    };

    emailjs
      .send(SUGGEST_SERVICE_ID, SUGGEST_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        this.ngZone.run(() => {
          this.isSuggestSending = false;
          this.closeSuggestModal();
          this.showToast('✓ Your agent suggestion has been submitted successfully!');
          this.cdr.detectChanges();
        });
      })
      .catch((err) => {
        this.ngZone.run(() => {
          console.error('EmailJS error:', err);
          this.isSuggestSending = false;
          this.suggestError = 'Failed to send. Please try again or contact us directly.';
          this.cdr.detectChanges();
        });
      });
  }

  // ── Request modal ────────────────────────────────────────────────────────
  openRequestModal(preselectedAgent?: string): void {
    this.isRequestModalOpen = true;
    this.requestError = '';
    this.requestData = this.freshRequestData();
    if (preselectedAgent) {
      this.requestData.selectedAgent = preselectedAgent;
    }
    document.body.style.overflow = 'hidden';
  }

  closeRequestModal(): void {
    this.isRequestModalOpen = false;
    document.body.style.overflow = '';
  }

  async submitRequestForm(): Promise<void> {
    if (!this.requestData.name || !this.requestData.email ||
      !this.requestData.department || !this.requestData.selectedAgent ||
      !this.requestData.purpose || !this.requestData.users ||
      !this.requestData.benefit) {
      this.requestError = 'Please fill in all required fields.';
      return;
    }

    this.isRequestSending = true;
    this.requestError = '';

    const templateParams = {
      from_name: this.requestData.name,
      from_email: this.requestData.email,
      department: this.requestData.department,
      selected_agent: this.requestData.selectedAgent,
      purpose: this.requestData.purpose,
      users: this.requestData.users,
      benefit: this.requestData.benefit,
      access: this.requestData.access || 'Not specified',
      comments: this.requestData.comments || 'N/A',
    };

    emailjs
      .send(REQUEST_SERVICE_ID, REQUEST_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        this.ngZone.run(() => {
          this.isRequestSending = false;
          this.closeRequestModal();
          this.showToast('✓ Your agent request has been submitted successfully!');
          this.cdr.detectChanges();
        });
      })
      .catch((err) => {
        this.ngZone.run(() => {
          console.error('EmailJS error:', err);
          this.isRequestSending = false;
          this.requestError = 'Failed to send. Please try again or contact us directly.';
          this.cdr.detectChanges();
        });
      });
  }

  // ── Toast ────────────────────────────────────────────────────────────────
  showToast(message: string, duration = 4000): void {
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastMessage = message;
    this.toastVisible = true;
    this.cdr.detectChanges();
    this.toastTimer = setTimeout(() => {
      this.ngZone.run(() => {
        this.toastVisible = false;
        this.cdr.detectChanges();
      });
    }, duration);
  }

  dismissToast(): void {
    this.toastVisible = false;
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  private freshSuggestData(): SuggestFormData {
    return {
      name: '', email: '', department: '', problem: '',
      agentAction: '', benefit: '', users: null, tools: '', details: ''
    };
  }

  private freshRequestData(): RequestFormData {
    return {
      name: '', email: '', department: '', selectedAgent: '',
      purpose: '', users: null, benefit: '', access: '', comments: ''
    };
  }
}