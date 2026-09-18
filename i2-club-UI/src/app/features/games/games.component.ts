import { Component, HostListener, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { HackTheCodeComponent } from './hack-the-code/hack-the-code.component';

/**
 * Defines the data for each game card shown in the AI Playground grid.
 * To add a future game:
 *  1. Create the game component inside features/games/<game-name>/
 *  2. Import it here
 *  3. Add an entry to the GAME_REGISTRY array below
 *  No other changes needed — the modal overlay is shared.
 */
export interface GameCard {
  id: string;
  icon: string;
  name: string;
  tag: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  /** The standalone Angular component to render inside the modal */
  component: Type<unknown>;
}

const GAME_REGISTRY: GameCard[] = [
  {
    id: 'hack-the-code',
    icon: '🔐',
    name: 'Hack the Code',
    tag: 'Logic',
    description:
      'Crack the 4-digit security access code using Mastermind-style logic clues. Analyze each hint and outsmart the system.',
    difficulty: 'Medium',
    component: HackTheCodeComponent
  }
  // ── Add future games here ──────────────────────────────────────
  // {
  //   id: 'debug-this',
  //   icon: '🐛',
  //   name: 'Debug This',
  //   tag: 'Code',
  //   description: 'Find and fix the bug hidden inside an AI-generated snippet.',
  //   difficulty: 'Hard',
  //   component: DebugThisComponent
  // },
];

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  readonly games = GAME_REGISTRY;

  /** The game currently open in the modal. null = modal closed. */
  activeGame: GameCard | null = null;

  openGame(game: GameCard): void {
    this.activeGame = game;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.activeGame = null;
    document.body.style.overflow = '';
  }

  /** Close modal on Escape key */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeGame) {
      this.closeModal();
    }
  }
}
