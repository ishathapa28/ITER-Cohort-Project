# 332. Reconstruct Itinerary

## Problem

Solve standard LeetCode problem **332: Reconstruct Itinerary** (Hard).

## Pattern

Hierholzer's Algorithm (Eulerian Path)

## Brute Force Approach

Solve the problem by checking all possible substrings, combinations, or parsing paths.

- Time Complexity: O(n²) or O(n³)
- Space Complexity: O(1) to O(n)

## Optimized Approach

Apply the **Hierholzer's Algorithm (Eulerian Path)** strategy to prune invalid branches, avoid redundant character operations, or process string indices efficiently.

1. Analyze string invariants, character ASCII limits, or delimiter boundaries.
2. Maintain auxiliary structures like frequency lookup tables, monotonic stacks, sliding window boundaries, or Tries.
3. Traverse and evaluate string state incrementally.

## Hint 1

How can character frequency mapping or ASCII boundary rules help optimize lookups?

## Hint 2

Can a sliding window, dynamic programming state, or stack avoid re-scanning previous string portions?

## Common Mistakes

- Handling edge cases like empty strings, spaces, or single-character strings incorrectly.
- Immutability pitfalls in languages like Python or Java leading to high memory allocations.
- Off-by-one errors in substring bounds indexing.

## Complexity

Time: O(n) or O(n log n) depending on optimal traversal or tree depth.
Space: O(1) or O(n)
