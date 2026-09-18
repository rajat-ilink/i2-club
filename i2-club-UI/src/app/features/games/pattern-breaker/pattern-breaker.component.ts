import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PATTERN_PUZZLES, PatternPuzzle } from '../pattern-puzzles';

type GameState = 'idle' | 'wrong' | 'correct';

@Component({
  selector: 'app-pattern-breaker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pattern-breaker.component.html',
  styleUrls: ['./pattern-breaker.component.scss']
})
export class PatternBreakerComponent implements OnInit {

  /** The active pattern puzzle */
  puzzle: PatternPuzzle | null = null;

  /** User's currently selected option */
  selectedOption: string | number | null = null;

  /** Game evaluation state */
  gameState: GameState = 'idle';

  /** Controls error shake animation */
  shaking = false;

  /** Track previous puzzle index to prevent immediate consecutive repeats */
  private lastPuzzleIndex = -1;

  ngOnInit(): void {
    this.loadRandomPuzzle();
  }

  /** Select a random puzzle, avoiding immediate repetition */
  loadRandomPuzzle(): void {
    const total = PATTERN_PUZZLES.length;
    let nextIndex: number;

    if (total === 1) {
      nextIndex = 0;
    } else {
      do {
        nextIndex = Math.floor(Math.random() * total);
      } while (nextIndex === this.lastPuzzleIndex);
    }

    this.lastPuzzleIndex = nextIndex;
    this.puzzle = PATTERN_PUZZLES[nextIndex];
    this.resetState();
  }

  /** Reset selection and game status */
  private resetState(): void {
    this.selectedOption = null;
    this.gameState = 'idle';
    this.shaking = false;
  }

  /** Handle user selecting an option button */
  selectOption(option: string | number): void {
    if (this.gameState === 'correct' || !this.puzzle) return;

    this.selectedOption = option;

    if (option === this.puzzle.correctAnswer) {
      this.gameState = 'correct';
    } else {
      this.gameState = 'wrong';
      this.triggerShake();
    }
  }

  /** Advance to the next random puzzle */
  nextPattern(): void {
    this.loadRandomPuzzle();
  }

  /** Trigger error shake animation */
  private triggerShake(): void {
    this.shaking = true;
    setTimeout(() => {
      this.shaking = false;
    }, 600);
  }
}
