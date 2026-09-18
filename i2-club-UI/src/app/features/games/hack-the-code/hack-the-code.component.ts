import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PUZZLES, CodePuzzle } from '../puzzles';

type GameState = 'idle' | 'wrong' | 'correct';

@Component({
  selector: 'app-hack-the-code',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hack-the-code.component.html',
  styleUrls: ['./hack-the-code.component.scss']
})
export class HackTheCodeComponent implements OnInit {

  @ViewChildren('digitInput') digitInputs!: QueryList<ElementRef<HTMLInputElement>>;

  /** The currently displayed puzzle */
  puzzle: CodePuzzle | null = null;

  /** The four digit values entered by the user */
  digits: string[] = ['', '', '', ''];

  /** Number of attempts made on the current puzzle */
  attempts = 0;

  /** Current game state */
  gameState: GameState = 'idle';

  /** Whether the shake animation is active */
  shaking = false;

  /** Index of the last displayed puzzle, used to avoid immediate repeat */
  private lastPuzzleIndex = -1;

  ngOnInit(): void {
    this.loadRandomPuzzle();
  }

  /** Load a random puzzle, avoiding the immediately previous one */
  loadRandomPuzzle(): void {
    const total = PUZZLES.length;
    let nextIndex: number;

    if (total === 1) {
      nextIndex = 0;
    } else {
      do {
        nextIndex = Math.floor(Math.random() * total);
      } while (nextIndex === this.lastPuzzleIndex);
    }

    this.lastPuzzleIndex = nextIndex;
    this.puzzle = PUZZLES[nextIndex];
    this.resetState();
  }

  /** Reset the input and game state, keeping the current puzzle */
  private resetState(): void {
    this.digits = ['', '', '', ''];
    this.attempts = 0;
    this.gameState = 'idle';
    this.shaking = false;

    // Clear focus after a tick so the DOM has updated
    setTimeout(() => {
      const inputs = this.digitInputs?.toArray();
      if (inputs?.length) {
        inputs[0].nativeElement.focus();
      }
    }, 0);
  }

  /** Whether the submit button should be enabled */
  get canSubmit(): boolean {
    return this.digits.every(d => d !== '') && this.gameState !== 'correct';
  }

  /** Handle single-digit input in a box */
  onDigitInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value.replace(/\D/g, '');

    // Allow only the last digit typed
    const digit = raw.slice(-1);
    this.digits[index] = digit;
    input.value = digit;

    // Auto-advance to next input
    if (digit && index < 3) {
      const inputs = this.digitInputs.toArray();
      inputs[index + 1].nativeElement.focus();
    }

    // Reset game state to idle when user modifies input after wrong guess
    if (this.gameState === 'wrong') {
      this.gameState = 'idle';
    }
  }

  /** Handle keydown — backspace moves focus to previous when current is empty */
  onDigitKeydown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace') {
      if (this.digits[index] === '' && index > 0) {
        const inputs = this.digitInputs.toArray();
        this.digits[index - 1] = '';
        inputs[index - 1].nativeElement.value = '';
        inputs[index - 1].nativeElement.focus();
        event.preventDefault();
      } else {
        this.digits[index] = '';
        (event.target as HTMLInputElement).value = '';
        event.preventDefault();
      }
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      this.digitInputs.toArray()[index - 1].nativeElement.focus();
    }

    if (event.key === 'ArrowRight' && index < 3) {
      this.digitInputs.toArray()[index + 1].nativeElement.focus();
    }
  }

  /** Handle paste — distribute a 4-digit string across the inputs */
  onDigitPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '').slice(0, 4);
    if (!pasted) return;

    const inputs = this.digitInputs.toArray();
    for (let i = 0; i < 4; i++) {
      this.digits[i] = pasted[i] ?? '';
      inputs[i].nativeElement.value = this.digits[i];
    }

    // Focus the last filled input
    const lastFilled = Math.min(pasted.length - 1, 3);
    inputs[lastFilled].nativeElement.focus();
  }

  /** Evaluate the entered code against the secret */
  checkCode(): void {
    if (!this.canSubmit || !this.puzzle) return;

    this.attempts++;
    const entered = this.digits.join('');

    if (entered === this.puzzle.code) {
      this.gameState = 'correct';
    } else {
      this.gameState = 'wrong';
      this.triggerShake();
    }
  }

  /** Load the next random puzzle after a correct answer */
  nextChallenge(): void {
    this.loadRandomPuzzle();
  }

  /** Trigger shake animation */
  private triggerShake(): void {
    this.shaking = true;
    setTimeout(() => {
      this.shaking = false;
    }, 600);
  }

  /** Clue color indicator label (purely semantic for screen readers / text) */
  clueLabel(index: number): string {
    const labels = ['Red', 'Yellow', 'Blue', 'Dark', 'Purple'];
    return labels[index] ?? '';
  }

  /** Decorative status items */
  readonly systemStatus = [
    { label: 'SYSTEM STATUS', value: 'ONLINE' },
    { label: 'SECURITY LEVEL', value: 'RED' },
    { label: 'FIREWALL', value: 'ACTIVE' },
    { label: 'ENCRYPTION', value: 'ACTIVE' }
  ];
}
