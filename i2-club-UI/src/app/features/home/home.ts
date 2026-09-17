import { Component, ElementRef, ViewChild } from '@angular/core';

interface InfoSection {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
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
      icon: '⚡',
      popupTitle: 'Our Hackathons',
      sections: [
        {
          heading: 'Our Hackathons',
          paragraphs: [
            "Our AI Hackathons provide a platform for students across India to gain hands-on experience in building real-world AI agents. Participants work on practical business challenges under the guidance of industry experts using our in-house AI platforms, iGentic and BEAK.",
            "The hackathons are designed to encourage innovation, strengthen AI development skills, and give students exposure to real-world problem-solving through collaborative learning. Outstanding participants are recognized with exciting cash prizes and the opportunity to earn a paid internship with us."
          ]
        },
        {
          heading: 'Our Journey So Far',
          paragraphs: [
            'We have successfully conducted 5 AI Hackathons across India:'
          ],
          listItems: [
            '3 BEAK Hackathons',
            '2 iGentic Hackathons'
          ]
        },
        {
          heading: '',
          paragraphs: [
            'These events have been hosted in Chennai, Trichy, and Pune, engaging 300+ students who have worked on innovative AI solutions.',
            'Our 6th AI Hackathon is currently underway in Coimbatore, with 285+ students participating and building AI-powered solutions under the mentorship of our experts.'
          ]
        },
        {
          heading: 'Be a Part of the Journey',
          paragraphs: [
            "Whether you're a student, professional, or AI enthusiast, we'd love to have you involved!"
          ],
          listItems: [
            'Join us as a Volunteer',
            'Join us as a Participant',
            'Share AI Use Case Ideas',
            'Become a Mentor'
          ]
        }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80'
      ]
    },
    {
      title: 'User group',
      date: 'Aug 05–06',
      tag: 'Multi-Agent Systems',
      description: 'Design autonomous agent workflows using iGentic. Prizes for the most creative orchestration.',
      icon: '🤖',
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
    {
      title: 'Thinking Beyond',
      date: 'Aug 05–06',
      tag: 'Multi-Agent Systems',
      description: 'Design autonomous agent workflows using iGentic. Prizes for the most creative orchestration.',
      icon: '🤖',
      popupTitle: 'Thinking Beyond',
      sections: [
        {
          heading: 'About This Event',
          paragraphs: [
            'Thinking Beyond is a forum for exploring ambitious, longer-horizon ideas in applied AI — beyond the scope of a single hackathon sprint.'
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
}