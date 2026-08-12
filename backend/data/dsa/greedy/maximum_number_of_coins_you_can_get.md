# 1561. Maximum Number of Coins You Can Get

## Problem Description

Solve standard LeetCode problem **1561: Maximum Number of Coins You Can Get** (Medium).

Analyze the problem space and construct an optimal **Greedy Strategy** by making local optimal choices at each step to guarantee a global maximum or minimum outcome.

---

## Pattern

**Sort + Pair Largest Two with Smallest**

---

## Greedy Choice Property & Optimal Substructure

To prove that a Greedy strategy works for this problem, establish these structural guarantees:

### 1. Local Greedy Choice
At every step or transition, choose the locally optimal choice based on current state constraints:
- **Choice Criterion:** Pick the choice that maximizes local gain or minimizes immediate consumption.
- **Irreversibility:** Ensure that taking this local decision never invalidates reaching an overall optimal solution.

### 2. Optimal Substructure
Demonstrate that after making a greedy choice, the remaining subproblem retains the exact same structural properties:
$$\text{Optimal}(S) = \text{Greedy Choice} + \text{Optimal}(S - \text{choice})$$

---

## Brute Force Approach

The brute force strategy evaluates all combinations, permutations, or state decisions without leveraging local greedy ordering.

1. Recursively generate or simulate all valid decision branches.
2. Search through the entire solution space to find the target optimal value.

### Brute Force Complexity
- **Time Complexity:** $O(2^n)$, $O(n^3)$, or $O(n!)$ due to exhaustive combinations.
- **Space Complexity:** $O(n)$ recursion tree or state storage space.

---

## Optimized Approach

The optimal Greedy approach processes elements according to an optimal ordering (e.g., sorting by end-times, maintaining a priority queue, or executing a single-pass sweep).

### Algorithmic Execution Steps:
1. **Preprocessing / Sorting:** Sort the input elements (or insert them into a Heap/Priority Queue) based on the greedy choice invariant.
2. **Initialize State Trackers:** Create scalar variables or pointers (e.g., `current_end`, `max_reach`, `accumulated_sum`).
3. **Iterative Greedy Selection:** Iterate through the sorted elements or data stream:
   - Check if current element meets greedy criteria.
   - Update global running metrics and advance local bounds.
4. **Final Return:** Return the accumulated minimum/maximum count or formatted optimal structure.

---

## Hint 1

Can you sort the input based on a key property (such as interval end time, ratio, or deadline) so that local choices line up sequentially?

---

## Hint 2

Does a locally optimal choice ever prevent a globally optimal solution? If not, a single pass or Priority Queue can replace nested loops.

---

## Common Mistakes & Edge Cases

- **Flawed Greedy Choice Assumption:** Making a greedy choice that fails on non-standard inputs (e.g., choosing highest denomination coins in non-canonical coin systems).
- **Incorrect Sorting Order:** Sorting by start boundary instead of end boundary when resolving interval overlaps.
- **Priority Queue Out-of-Sync:** Failing to dynamically update or clear invalid elements from a Heap during execution.
- **Tie-Breaking Edge Cases:** Neglecting secondary sorting constraints when primary properties match.

---

## Complexity Analysis

- **Time Complexity:** $O(n)$ for single-pass strategies, or $O(n \log n)$ when sorting or processing via Priority Queue / Heap operations.
- **Space Complexity:** $O(1)$ auxiliary space for in-place sweeps, or $O(n)$ to store sorted arrays/heaps.
