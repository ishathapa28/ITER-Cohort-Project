# 53. Maximum Subarray

## Problem

Solve standard LeetCode problem **53: Maximum Subarray** (Medium).

## Pattern

Kadane's Algorithm / Dynamic Programming

## Brute Force Approach

Solve the problem by exhaustively searching or checking all combinations/subarrays.

- **Time Complexity:** $O(n^2)$ or higher
- **Space Complexity:** $O(1)$ to $O(n)$

## Optimized Approach

Apply the **Kadane's Algorithm / Dynamic Programming** pattern to reduce the search space or eliminate redundant calculations.

1. Analyze boundary conditions and invariants.
2. Utilize targeted dynamic programming, sliding window, binary search, or auxiliary data structures.
3. Traverse or reduce problem state systematically.

## Hint 1

What key invariant or monotonicity property applies to this array problem?

## Hint 2

Can auxiliary memory (Hash Table, Monotonic Stack, Pointers) eliminate unnecessary checks?

## Common Mistakes

- Out-of-bounds indexing or off-by-one errors.
- Forgetting to account for duplicates or negative inputs.
- Mutating array structures unexpectedly when in-place modifications are required.

## Complexity

- **Time Complexity:** $O(n)$ or $O(n \log n)$ depending on optimal sorting/traversal steps.
- **Space Complexity:** $O(1)$ to $O(n)$
