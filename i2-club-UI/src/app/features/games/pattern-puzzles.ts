/**
 * Pattern Breaker — Puzzle Data
 *
 * Predefined medium-level sequence and pattern challenges.
 * All puzzles are maintained at consistent Medium difficulty.
 */

export interface PatternPuzzle {
  id: number;
  title: string;
  /** Array of items in the sequence, e.g. ["2", "4", "8", "16", "?"] */
  sequence: string[];
  question: string;
  /** 4 selectable options */
  options: (string | number)[];
  /** The correct answer matching one of the options */
  correctAnswer: string | number;
  /** Explanation shown when the user completes the puzzle */
  explanation: string;
  difficulty: 'Medium';
}

export const PATTERN_PUZZLES: PatternPuzzle[] = [
  // ── 1. Doubling (x2) ──────────────────────────────────────
  {
    id: 1,
    title: 'Geometric Growth',
    sequence: ['2', '4', '8', '16', '?'],
    question: 'WHAT COMES NEXT?',
    options: [24, 30, 32, 36],
    correctAnswer: 32,
    explanation: 'Each number in the sequence doubles (multiplied by 2). 16 × 2 = 32.',
    difficulty: 'Medium'
  },

  // ── 2. Constant Addition (+4) ──────────────────────────────
  {
    id: 2,
    title: 'Linear Increment',
    sequence: ['5', '9', '13', '17', '?'],
    question: 'WHAT COMES NEXT?',
    options: [19, 21, 23, 25],
    correctAnswer: 21,
    explanation: 'Each step adds 4 to the previous number. 17 + 4 = 21.',
    difficulty: 'Medium'
  },

  // ── 3. Increasing Differences (+3, +5, +7, +9, +11) ────────
  {
    id: 3,
    title: 'Accelerating Steps',
    sequence: ['2', '5', '10', '17', '26', '?'],
    question: 'WHAT COMES NEXT?',
    options: [33, 35, 37, 39],
    correctAnswer: 37,
    explanation: 'The difference between numbers increases by 2 each step (+3, +5, +7, +9, +11). 26 + 11 = 37.',
    difficulty: 'Medium'
  },

  // ── 4. Multiply & Add (x2 + 1) ─────────────────────────────
  {
    id: 4,
    title: 'Double & Increment',
    sequence: ['3', '7', '15', '31', '?'],
    question: 'WHAT COMES NEXT?',
    options: [55, 61, 63, 65],
    correctAnswer: 63,
    explanation: 'Multiply the previous number by 2 and add 1 (n × 2 + 1). 31 × 2 + 1 = 63.',
    difficulty: 'Medium'
  },

  // ── 5. Alternating Operations (+3, x2) ────────────────────
  {
    id: 5,
    title: 'Alternating Shift',
    sequence: ['4', '7', '14', '17', '34', '?'],
    question: 'WHAT COMES NEXT?',
    options: [35, 37, 40, 68],
    correctAnswer: 37,
    explanation: 'The operations alternate between adding 3 and multiplying by 2 (+3, ×2, +3, ×2, +3). 34 + 3 = 37.',
    difficulty: 'Medium'
  },

  // ── 6. Square Numbers (n²) ─────────────────────────────────
  {
    id: 6,
    title: 'Square Sequence',
    sequence: ['1', '4', '9', '16', '?'],
    question: 'WHAT COMES NEXT?',
    options: [20, 24, 25, 30],
    correctAnswer: 25,
    explanation: 'Sequence of perfect square numbers (1², 2², 3², 4², 5²). 5² = 25.',
    difficulty: 'Medium'
  },

  // ── 7. Cube Numbers (n³) ───────────────────────────────────
  {
    id: 7,
    title: 'Cubic Progression',
    sequence: ['1', '8', '27', '64', '?'],
    question: 'WHAT COMES NEXT?',
    options: [100, 120, 125, 144],
    correctAnswer: 125,
    explanation: 'Sequence of perfect cube numbers (1³, 2³, 3³, 4³, 5³). 5³ = 125.',
    difficulty: 'Medium'
  },

  // ── 8. Fibonacci Sum ───────────────────────────────────────
  {
    id: 8,
    title: 'Fibonacci Chain',
    sequence: ['2', '3', '5', '8', '13', '?'],
    question: 'WHAT COMES NEXT?',
    options: [18, 19, 21, 24],
    correctAnswer: 21,
    explanation: 'Each number is the sum of the preceding two numbers (8 + 13 = 21).',
    difficulty: 'Medium'
  },

  // ── 9. Alternating (x2, +3) ────────────────────────────────
  {
    id: 9,
    title: 'Dual Multiply & Step',
    sequence: ['6', '12', '15', '30', '33', '?'],
    question: 'WHAT COMES NEXT?',
    options: [36, 60, 66, 69],
    correctAnswer: 66,
    explanation: 'The sequence alternates multiplying by 2 and adding 3 (×2, +3, ×2, +3, ×2). 33 × 2 = 66.',
    difficulty: 'Medium'
  },

  // ── 10. Alternating Divide & Add (÷2, +6) ──────────────────
  {
    id: 10,
    title: 'Halving & Step',
    sequence: ['60', '30', '36', '18', '24', '?'],
    question: 'WHAT COMES NEXT?',
    options: [12, 14, 16, 48],
    correctAnswer: 12,
    explanation: 'Alternates between dividing by 2 and adding 6 (÷2, +6, ÷2, +6, ÷2). 24 ÷ 2 = 12.',
    difficulty: 'Medium'
  },

  // ── 11. Increasing Subtractions (-2, -4, -6, -8, -10) ──────
  {
    id: 11,
    title: 'Expanding Subtraction',
    sequence: ['50', '48', '44', '38', '30', '?'],
    question: 'WHAT COMES NEXT?',
    options: [18, 20, 22, 24],
    correctAnswer: 20,
    explanation: 'Subtractions increase by 2 each step (-2, -4, -6, -8, -10). 30 - 10 = 20.',
    difficulty: 'Medium'
  },

  // ── 12. Triple & Subtract 2 (x3 - 2) ───────────────────────
  {
    id: 12,
    title: 'Triple & Reduce',
    sequence: ['2', '4', '10', '28', '?'],
    question: 'WHAT COMES NEXT?',
    options: [54, 76, 82, 84],
    correctAnswer: 82,
    explanation: 'Multiply each number by 3 and subtract 2 (n × 3 - 2). 28 × 3 - 2 = 82.',
    difficulty: 'Medium'
  },

  // ── 13. Alternating Additions (+5, +10) ────────────────────
  {
    id: 13,
    title: 'Staggered Addition',
    sequence: ['7', '12', '22', '27', '37', '?'],
    question: 'WHAT COMES NEXT?',
    options: [42, 44, 47, 52],
    correctAnswer: 42,
    explanation: 'Alternates between adding 5 and adding 10 (+5, +10, +5, +10, +5). 37 + 5 = 42.',
    difficulty: 'Medium'
  },

  // ── 14. Squares minus 1 (n² - 1) ───────────────────────────
  {
    id: 14,
    title: 'Square Offset',
    sequence: ['3', '8', '15', '24', '35', '?'],
    question: 'WHAT COMES NEXT?',
    options: [44, 48, 50, 52],
    correctAnswer: 48,
    explanation: 'Pattern of (n² - 1) for n = 2, 3, 4, 5, 6, 7. (7² - 1 = 49 - 1 = 48).',
    difficulty: 'Medium'
  },

  // ── 15. Factorial Multipliers (x1, x2, x3, x4, x5) ─────────
  {
    id: 15,
    title: 'Factorial Multiplier',
    sequence: ['3', '3', '6', '18', '72', '?'],
    question: 'WHAT COMES NEXT?',
    options: [216, 288, 360, 432],
    correctAnswer: 360,
    explanation: 'Each term is multiplied by an increasing integer (×1, ×2, ×3, ×4, ×5). 72 × 5 = 360.',
    difficulty: 'Medium'
  }
];
