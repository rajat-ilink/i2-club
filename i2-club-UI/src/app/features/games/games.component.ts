import { Component, HostListener, Input, Type } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { HackTheCodeComponent } from './hack-the-code/hack-the-code.component';
import { DebugThisComponent } from './debug-this/debug-this.component';
import { PatternBreakerComponent } from './pattern-breaker/pattern-breaker.component';

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
  },
  {
    id: 'debug-this',
    icon: '🐛',
    name: 'Debug This',
    tag: 'Code',
    description:
      'Spot the single line containing the bug in short code snippets across Python, JS, TypeScript, SQL & more.',
    difficulty: 'Easy',
    component: DebugThisComponent
  },
  {
    id: 'pattern-breaker',
    icon: '🧠',
    name: 'Pattern Breaker',
    tag: 'Sequence',
    description:
      'Find the hidden rule and predict what comes next in mathematical and logical sequence challenges.',
    difficulty: 'Medium',
    component: PatternBreakerComponent
  }
];

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  /**
   * 'page'  — renders as a full homepage section with padding + border-top.
   * 'modal' — suppresses section chrome; used when the host already provides
   *           a modal container (e.g. the AI Playground overlay in HomeComponent).
   */
  @Input() mode: 'page' | 'modal' = 'page';

  readonly games = GAME_REGISTRY;

  /** The game currently open in the inner game modal. null = closed. */
  activeGame: GameCard | null = null;

  openGame(game: GameCard): void {
    this.activeGame = game;
    // Body overflow is managed by the parent playground overlay,
    // so we only need to lock scroll here when used standalone.
    if (this.mode === 'page') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.activeGame = null;
    if (this.mode === 'page') {
      document.body.style.overflow = '';
    }
  }

  /** Close inner game modal on Escape key */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeGame) {
      this.closeModal();
    }
  }
}
