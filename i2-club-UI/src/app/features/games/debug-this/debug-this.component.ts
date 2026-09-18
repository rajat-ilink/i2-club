import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEBUG_CHALLENGES, DebugChallenge } from '../debug-challenges';

type GameState = 'idle' | 'wrong' | 'correct';

@Component({
  selector: 'app-debug-this',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debug-this.component.html',
  styleUrls: ['./debug-this.component.scss']
})
export class DebugThisComponent implements OnInit {

  /** Current debugging challenge */
  challenge: DebugChallenge | null = null;

  /** Line number selected by the user (1-indexed) */
  selectedLine: number | null = null;

  /** Current game state */
  gameState: GameState = 'idle';

  /** Controls error shake animation */
  shaking = false;

  /** Index of the previous challenge to prevent immediate repeat */
  private lastChallengeIndex = -1;

  ngOnInit(): void {
    this.loadRandomChallenge();
  }

  /** Selects a random challenge, avoiding showing the same one twice in a row */
  loadRandomChallenge(): void {
    const total = DEBUG_CHALLENGES.length;
    let nextIndex: number;

    if (total === 1) {
      nextIndex = 0;
    } else {
      do {
        nextIndex = Math.floor(Math.random() * total);
      } while (nextIndex === this.lastChallengeIndex);
    }

    this.lastChallengeIndex = nextIndex;
    this.challenge = DEBUG_CHALLENGES[nextIndex];
    this.resetState();
  }

  /** Reset selection and game state */
  private resetState(): void {
    this.selectedLine = null;
    this.gameState = 'idle';
    this.shaking = false;
  }

  /** Handle user clicking a line button option */
  selectLine(lineNum: number): void {
    if (this.gameState === 'correct' || !this.challenge) return;

    this.selectedLine = lineNum;

    if (lineNum === this.challenge.bugLine) {
      this.gameState = 'correct';
    } else {
      this.gameState = 'wrong';
      this.triggerShake();
    }
  }

  /** Advance to the next random challenge */
  nextChallenge(): void {
    this.loadRandomChallenge();
  }

  /** Format 1-indexed line numbers with leading zeros (e.g. 1 -> "01") */
  padLine(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
  }

  /** Trigger error shake animation */
  private triggerShake(): void {
    this.shaking = true;
    setTimeout(() => {
      this.shaking = false;
    }, 600);
  }
}
