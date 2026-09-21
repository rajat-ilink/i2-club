/**
 * Hack the Code — Puzzle Data
 *
 * Each puzzle is a Mastermind-style 4-digit logic challenge.
 * All puzzles are mathematically verified to be uniquely solvable
 * from the provided clues alone.
 *
 * Clues provide hints about digits and positions without revealing
 * the actual secret code.
 */

export interface CodePuzzle {
  /** The secret 4-digit access code (string to preserve leading zeros) */
  code: string;
  clues: PuzzleClue[];
}

export interface PuzzleClue {
  /** A 4-digit guess */
  guess: string;
  /** Human-readable description of the result */
  description: string;
}

export const PUZZLES: CodePuzzle[] = [

  // ─── Puzzle 1 ───────────────────────────────────────────────
  // Code: 3 8 4 2
  {
    code: '3842',
    clues: [
      {
        guess: '6157',
        description: 'Nothing is correct'
      },
      {
        guess: '9801',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '3940',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '4283',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '3812',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 2 ───────────────────────────────────────────────
  // Code: 7 1 5 0
  {
    code: '7150',
    clues: [
      {
        guess: '2346',
        description: 'Nothing is correct'
      },
      {
        guess: '7892',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '0517',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '7198',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '7159',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 3 ───────────────────────────────────────────────
  // Code: 2 6 9 3
  {
    code: '2693',
    clues: [
      {
        guess: '1457',
        description: 'Nothing is correct'
      },
      {
        guess: '3962',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '2083',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '2608',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '2690',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 4 ───────────────────────────────────────────────
  // Code: 5 0 7 4
  {
    code: '5074',
    clues: [
      {
        guess: '1236',
        description: 'Nothing is correct'
      },
      {
        guess: '4705',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '5089',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '5078',
        description: 'Three digits are correct and in the right positions'
      },
      {
        guess: '9074',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 5 ───────────────────────────────────────────────
  // Code: 9 4 1 6
  {
    code: '9416',
    clues: [
      {
        guess: '2357',
        description: 'Nothing is correct'
      },
      {
        guess: '6149',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '9408',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '9410',
        description: 'Three digits are correct and in the right positions'
      },
      {
        guess: '0416',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 6 ───────────────────────────────────────────────
  // Code: 6 3 8 1
  {
    code: '6381',
    clues: [
      {
        guess: '0245',
        description: 'Nothing is correct'
      },
      {
        guess: '1836',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '6379',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '6380',
        description: 'Three digits are correct and in the right positions'
      },
      {
        guess: '0381',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 7 ───────────────────────────────────────────────
  // Code: 0 5 2 8
  {
    code: '0528',
    clues: [
      {
        guess: '1347',
        description: 'Nothing is correct'
      },
      {
        guess: '8250',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '0569',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '0529',
        description: 'Three digits are correct and in the right positions'
      },
      {
        guess: '9528',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 8 ───────────────────────────────────────────────
  // Code: 4 7 0 9
  {
    code: '4709',
    clues: [
      {
        guess: '1235',
        description: 'Nothing is correct'
      },
      {
        guess: '9074',
        description: 'Four digits are correct but all in wrong positions'
      },
      {
        guess: '4786',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '4706',
        description: 'Three digits are correct and in the right positions'
      },
      {
        guess: '8709',
        description: 'Three digits are correct and in the right positions'
      }
    ]
  }

];
