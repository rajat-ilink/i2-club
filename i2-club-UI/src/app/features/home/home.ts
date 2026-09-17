import { Component, ElementRef, ViewChild } from '@angular/core';

interface InfoSection {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
}

interface HackathonJourney {
  number: string;
  location: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

interface HackathonImpact {
  value: string;
  label: string;
}

interface HackathonEvent {
  title: string;
  date: string;
  tag: string;
  description: string;
  icon: string;
  popupTitle: string;
  sections: InfoSection[];
  gallery: string[];
  hackathonJourney?: HackathonJourney[];
  hackathonImpact?: HackathonImpact[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {

  @ViewChild('cardTrack') cardTrack!: ElementRef<HTMLDivElement>;

  selectedEvent: HackathonEvent | null = null;

  hackathonEvents: HackathonEvent[] = [
    {
      title: 'Hackathon',
      date: 'Jul 18–19',
      tag: '24-Hour Hackathon',
      description: 'Build AI-powered solutions for real enterprise problems. Open to all teams, mentors on-site.',
      icon: 'trophy',
      popupTitle: 'Our AI Hackathon Journey',

      sections: [],

      gallery: [],

      hackathonJourney: [

        {
          number: '01',
          location: 'Chennai',
          title: 'BEAK Hackathon',
          subtitle: 'Karpagam College of Engineering',
          description:
            'Our first student hackathon in Chennai brought together 65 students from Karpagam College of Engineering. The event marked the beginning of our journey to take AI innovation beyond ideas and into practical solutions.',
          highlights: [
            '30+ AI agents ideated',
            '20 finalists',
            'Top 3 agents selected',
            '1 student offered a full-time opportunity'
          ]
        },

        {
          number: '02',
          location: 'Pune & Chennai',
          title: 'iGentic Internal Hackathon',
          subtitle: 'Employee Innovation',
          description:
            'Following the success of the first hackathon, we brought together employees from Pune and Chennai through a virtual iGentic-powered hackathon. Employees explored innovative ways to automate their everyday tasks and identify opportunities for AI transformation.',
          highlights: [
            '30+ employees participated',
            '7 AI agents ideated',
            '3 agents moved into production',
            'Agents are currently being used within the organisation'
          ]
        },

        {
          number: '03',
          location: 'Pune',
          title: 'iGentic Internal Hackathon',
          subtitle: 'Employee-Led AI Transformation',
          description:
            'The third hackathon continued our employee-led AI transformation journey in Pune, focusing on making everyday tasks simpler and more efficient through AI agents.',
          highlights: [
            '20+ AI agents ideated',
            '5 agents moved towards production',
            'Employee-driven solutions for real-world use cases'
          ]
        },

        {
          number: '04',
          location: 'Trichy',
          title: 'Saranathan College of Engineering',
          subtitle: 'Student Hackathon',
          description:
            'Students from Saranathan College of Engineering brought tremendous enthusiasm and creativity to our Trichy hackathon.',
          highlights: [
            '70+ students participated',
            '20 finalists',
            '20 AI agents ideated',
            '5 agents considered for production',
            '3 students selected for internships',
            'Selected interns are currently working with the SIMS team'
          ]
        },

        {
          number: '05',
          location: 'Pune',
          title: 'DY Patil College',
          subtitle: 'SIMS & BEAK Hackathon',
          description:
            'Our fifth hackathon brought the SIMS and BEAK platforms together at DY Patil College, giving students an opportunity to explore AI and agentic solutions.',
          highlights: [
            '100+ students participated',
            '20+ AI agents ideated',
            'Students explored AI-powered solutions to real-world challenges'
          ]
        },

        {
          number: '06',
          location: 'Coimbatore',
          title: 'KovAI Hackathon',
          subtitle: 'Powered by iGentic & BEAK',
          description:
            'Our sixth and largest hackathon brought the AI innovation journey to Coimbatore. With 300+ students participating, KovAI became a platform for students to experiment, collaborate and build AI agents around real-world use cases.',
          highlights: [
            '300+ students participated',
            '30+ AI agents ideated',
            '20 AI agents moving towards production',
            '6 students offered internship opportunities'
          ]
        }

      ],

      hackathonImpact: [
        {
          value: '800+',
          label: 'Participants'
        },
        {
          value: '100+',
          label: 'AI Agents Ideated'
        },
        {
          value: '20+',
          label: 'Agents Moving Towards Production'
        },
        {
          value: '10+',
          label: 'Internship & Full-Time Opportunities'
        },
        {
          value: '6',
          label: 'Hackathons Completed'
        }
      ]
    },
    {
      title: 'User group',
      date: 'Aug 05–06',
      tag: 'Multi-Agent Systems',
      description: 'Design autonomous agent workflows using iGentic. Prizes for the most creative orchestration.',
      icon: 'users',
      popupTitle: 'Our User Group',
      sections: [
        {
          heading: 'About the User Group',
          paragraphs: [
            'The iGentic User Group brings together practitioners working on multi-agent orchestration to share patterns, troubleshoot designs, and showcase what they\'ve built.'
          ]
        }
      ],
      gallery: []
    },
    // {
    //   title: 'Thinking Beyond',
    //   date: 'Aug 05–06',
    //   tag: 'Multi-Agent Systems',
    //   description: 'Design autonomous agent workflows using iGentic. Prizes for the most creative orchestration.',
    //   icon: 'chat',
    //   popupTitle: 'Thinking Beyond',
    //   sections: [
    //     {
    //       heading: 'About This Event',
    //       paragraphs: [
    //         'Thinking Beyond is a forum for exploring ambitious, longer-horizon ideas in applied AI — beyond the scope of a single hackathon sprint.'
    //       ]
    //     }
    //   ],
    //   gallery: []
    // },
    {
      title: 'iLink League',
      date: '',
      tag: 'Community',
      description: 'Engage. Contribute. Lead.',
      icon: 'star',
      popupTitle: 'iLink League',
      sections: [
        {
          heading: 'iLink League',
          paragraphs: [
            'Details about the iLink League will be shared soon.'
          ]
        }
      ],
      gallery: []
    }
  ];

  scrollLeft(): void {
    this.cardTrack.nativeElement.scrollBy({ left: -340, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.cardTrack.nativeElement.scrollBy({ left: 340, behavior: 'smooth' });
  }

  openEvent(event: HackathonEvent): void {
    this.selectedEvent = event;
    document.body.style.overflow = 'hidden';
  }

  closeEvent(): void {
    this.selectedEvent = null;
    document.body.style.overflow = '';
  }

  joinNow(): void {
    // hook up routing or modal here
  }

  explore(): void {
    // hook up routing or scroll-to-section here
  }

  submitIdea(): void {
    // Add idea submission functionality later
  }

  playChallenge(): void {
    // Add AI Challenge functionality later
  }
}