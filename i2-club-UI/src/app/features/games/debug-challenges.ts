/**
 * Debug This — Challenge Data
 *
 * Predefined debugging challenges across multiple programming languages.
 * Each challenge has a snippet of code with exactly one intentional bug.
 *
 * Line numbers are 1-indexed.
 */

export interface DebugChallenge {
  id: number;
  language: string;
  title: string;
  /** Array of lines representing the code snippet */
  code: string[];
  /** 1-indexed line number containing the bug */
  bugLine: number;
  /** Line numbers presented as clickable button options (must include bugLine) */
  options: number[];
  /** Explanation displayed when the user correctly identifies the bug */
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const DEBUG_CHALLENGES: DebugChallenge[] = [
  // ── 1. Python — Undefined Variable ──────────────────────────
  {
    id: 1,
    language: 'Python',
    title: 'Total Price Calculator',
    difficulty: 'Easy',
    code: [
      'def calculate_total(items):',
      '    total = 0',
      '    for item in items:',
      '        total += item.price',
      '    return total + tax'
    ],
    bugLine: 5,
    options: [2, 4, 5],
    explanation:
      '`tax` is referenced on Line 05 but is never defined or passed as a parameter to `calculate_total()`. This raises a `NameError` at runtime.'
  },

  // ── 2. JavaScript — Array Sorting Default ────────────────────
  {
    id: 2,
    language: 'JavaScript',
    title: 'Numeric Score Sorting',
    difficulty: 'Easy',
    code: [
      'function sortScores(scores) {',
      '  // Sort numbers in ascending order',
      '  const sorted = scores.sort();',
      '  return sorted;',
      '}'
    ],
    bugLine: 3,
    options: [1, 3, 4],
    explanation:
      '`Array.prototype.sort()` sorts elements as strings alphabetically by default (e.g. `[10, 2, 5]` becomes `[10, 2, 5]`). On Line 03, use `scores.sort((a, b) => a - b)` for numeric sorting.'
  },

  // ── 3. TypeScript — Unchecked Optional Property ──────────────
  {
    id: 3,
    language: 'TypeScript',
    title: 'User Greeting Formatter',
    difficulty: 'Medium',
    code: [
      'function getGreeting(user: { name?: string }): string {',
      '  const name = user.name;',
      '  const uppercaseName = name.toUpperCase();',
      '  return "Hello, " + uppercaseName;',
      '}'
    ],
    bugLine: 3,
    options: [1, 2, 3],
    explanation:
      '`user.name` is optional (`string | undefined`). Calling `.toUpperCase()` directly on Line 03 without optional chaining (`name?.toUpperCase()`) or a fallback will crash with a `TypeError` if `name` is missing.'
  },

  // ── 4. Python — Mutable Default Argument ─────────────────────
  {
    id: 4,
    language: 'Python',
    title: 'User Role Assigner',
    difficulty: 'Medium',
    code: [
      'def add_user_role(user_id, roles=[]):',
      '    roles.append("member")',
      '    print(f"User {user_id} roles: {roles}")',
      '    return roles'
    ],
    bugLine: 1,
    options: [1, 2, 4],
    explanation:
      'Using a mutable default argument `roles=[]` on Line 01 evaluates the list once at function definition time. Subsequent calls mutate and share the exact same list across different users. Use `roles=None` instead.'
  },

  // ── 5. SQL — Unaggregated Column in GROUP BY ─────────────────
  {
    id: 5,
    language: 'SQL',
    title: 'Department Salary Summary',
    difficulty: 'Medium',
    code: [
      'SELECT department_id, employee_name, AVG(salary)',
      'FROM employees',
      'WHERE status = "ACTIVE"',
      'GROUP BY department_id;'
    ],
    bugLine: 1,
    options: [1, 3, 4],
    explanation:
      'On Line 01, `employee_name` is selected without being included in the `GROUP BY` clause (Line 04) or wrapped in an aggregate function. SQL strict mode rejects this query.'
  },

  // ── 6. Java — Object Reference Equality ──────────────────────
  {
    id: 6,
    language: 'Java',
    title: 'Security Token Verification',
    difficulty: 'Easy',
    code: [
      'public boolean validateToken(String userToken, String secretToken) {',
      '    if (userToken == secretToken) {',
      '        return true;',
      '    }',
      '    return false;',
      '}'
    ],
    bugLine: 2,
    options: [1, 2, 5],
    explanation:
      'In Java, using `==` on Line 02 compares memory reference addresses rather than string content. Use `userToken.equals(secretToken)` for value comparison.'
  },

  // ── 7. JavaScript — Off-By-One Array Loop ────────────────────
  {
    id: 7,
    language: 'JavaScript',
    title: 'Array Total Sum',
    difficulty: 'Easy',
    code: [
      'function sumArray(numbers) {',
      '  let sum = 0;',
      '  for (let i = 0; i <= numbers.length; i++) {',
      '    sum += numbers[i];',
      '  }',
      '  return sum;',
      '}'
    ],
    bugLine: 3,
    options: [2, 3, 4],
    explanation:
      'The loop condition `i <= numbers.length` on Line 03 causes an off-by-one error. On the final iteration, `numbers[numbers.length]` evaluates to `undefined`, turning `sum` into `NaN`. Change to `i < numbers.length`.'
  },

  // ── 8. Python — Infinite Recursion ───────────────────────────
  {
    id: 8,
    language: 'Python',
    title: 'Factorial Calculator',
    difficulty: 'Easy',
    code: [
      'def factorial(n):',
      '    if n <= 1:',
      '        return 1',
      '    return n * factorial(n)'
    ],
    bugLine: 4,
    options: [2, 3, 4],
    explanation:
      'Line 04 recursively calls `factorial(n)` instead of `factorial(n - 1)`. The value of `n` never decreases, resulting in an infinite recursion and a `RecursionError` stack overflow.'
  },

  // ── 9. JavaScript — Missing Await on Fetch ───────────────────
  {
    id: 9,
    language: 'JavaScript',
    title: 'Async User Fetcher',
    difficulty: 'Medium',
    code: [
      'async function fetchUserData(userId) {',
      '  const response = fetch("/api/users/" + userId);',
      '  const data = await response.json();',
      '  return data;',
      '}'
    ],
    bugLine: 2,
    options: [1, 2, 3],
    explanation:
      '`fetch()` on Line 02 returns a `Promise`. Because `await` was omitted, `response` holds a Promise object instead of a Response instance. Calling `await response.json()` on Line 03 throws a `TypeError`.'
  },

  // ── 10. C++ — Memory Leak ────────────────────────────────────
  {
    id: 10,
    language: 'C++',
    title: 'Dynamic Buffer Processing',
    difficulty: 'Hard',
    code: [
      'void processBuffer(int size) {',
      '    int* buffer = new int[size];',
      '    fillBuffer(buffer, size);',
      '    sendBuffer(buffer, size);',
      '    // Processing finished',
      '}'
    ],
    bugLine: 5,
    options: [2, 4, 5],
    explanation:
      'Line 02 dynamically allocates memory on the heap with `new int[size]`. Returning at Line 05 without calling `delete[] buffer;` leaks memory every time the function is executed.'
  },

  // ── 11. Python — Key Access Without Fallback ──────────────────
  {
    id: 11,
    language: 'Python',
    title: 'Config Database Extractor',
    difficulty: 'Medium',
    code: [
      'def get_db_port(config):',
      '    db_settings = config["database"]',
      '    port = db_settings["port"]',
      '    return int(port)'
    ],
    bugLine: 3,
    options: [2, 3, 4],
    explanation:
      'Line 03 performs direct key lookup `db_settings["port"]`. If the `"port"` key is missing from the dictionary, Python raises an unhandled `KeyError`. Using `.get("port", 5432)` is safer.'
  },

  // ── 12. JavaScript — Assignment in Filter ────────────────────
  {
    id: 12,
    language: 'JavaScript',
    title: 'Filter Active Accounts',
    difficulty: 'Hard',
    code: [
      'function getActiveUsers(users) {',
      '  return users.filter(user => {',
      '    return user.isActive = true;',
      '  });',
      '}'
    ],
    bugLine: 3,
    options: [2, 3, 4],
    explanation:
      'Line 03 uses single equals `=` (assignment) instead of `===` (strict equality comparison). This inadvertently sets every `user.isActive` to `true` and returns all users.'
  }
];
