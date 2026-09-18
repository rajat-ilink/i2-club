import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AIAgent {
  name: string;
  description: string;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-ai-agents',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ai-agents.html',
  styleUrl: './ai-agents.scss'
})
export class AiAgentsComponent {

  searchTerm = '';

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

  get filteredAgents(): AIAgent[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.agents;
    }

    return this.agents.filter(agent =>
      agent.name.toLowerCase().includes(term) ||
      agent.description.toLowerCase().includes(term) ||
      agent.category.toLowerCase().includes(term)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
  }
}