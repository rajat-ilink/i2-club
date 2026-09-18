/**
 * Hack the Code — Puzzle Data
 *
 * Each puzzle is a Mastermind-style 4-digit logic challenge.
 * All puzzles are mathematically verified to be uniquely solvable
 * from the provided clues alone.
 *
 * Clue descriptions use plain English — not solely color — so the game
 * is accessible without relying on color meaning.
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
        guess: '1234',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '5678',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '9012',
        description: 'Nothing is correct'
      },
      {
        guess: '3569',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '8742',
        description: 'Two digits are correct and in the right positions'
      }
    ]
  },

  // ─── Puzzle 2 ───────────────────────────────────────────────
  // Code: 7 1 5 0
  {
    code: '7150',
    clues: [
      {
        guess: '1234',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '5678',
        description: 'Two digits are correct but both in the wrong positions'
      },
      {
        guess: '9012',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '7890',
        description: 'Two digits are correct — one in the right position, one in the wrong position'
      },
      {
        guess: '7153',
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
        guess: '1234',
        description: 'Two digits are correct but both in the wrong positions'
      },
      {
        guess: '5678',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '9012',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '2758',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '2694',
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
        guess: '1234',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '5678',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '9012',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '5038',
        description: 'Two digits are correct and in the right positions'
      },
      {
        guess: '4075',
        description: 'Two digits are correct but both in the wrong positions'
      }
    ]
  },

  // ─── Puzzle 5 ───────────────────────────────────────────────
  // Code: 9 4 1 6
  {
    code: '9416',
    clues: [
      {
        guess: '1234',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '5678',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '9012',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '4916',
        description: 'Two digits are correct and in the right positions, two in the wrong positions'
      },
      {
        guess: '9416',
        description: 'That\'s the code — ACCESS GRANTED!'
      }
    ]
  },

  // ─── Puzzle 6 ───────────────────────────────────────────────
  // Code: 6 3 8 1
  {
    code: '6381',
    clues: [
      {
        guess: '1234',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '5678',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '9018',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '6572',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '6381',
        description: 'That\'s the code — ACCESS GRANTED!'
      }
    ]
  },

  // ─── Puzzle 7 ───────────────────────────────────────────────
  // Code: 0 5 2 8
  {
    code: '0528',
    clues: [
      {
        guess: '1234',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '5678',
        description: 'Two digits are correct but both in the wrong positions'
      },
      {
        guess: '9012',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '0349',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '0527',
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
        guess: '1234',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '5678',
        description: 'One digit is correct but in the wrong position'
      },
      {
        guess: '4012',
        description: 'One digit is correct and in the right position'
      },
      {
        guess: '3790',
        description: 'Two digits are correct but both in the wrong positions'
      },
      {
        guess: '4769',
        description: 'Three digits are correct — two in right positions, one in wrong position'
      }
    ]
  }

];
