# 44. Wildcard Matching

## Problem Description

Solve standard LeetCode problem **44: Wildcard Matching** (Hard).

Formulate an optimal **Recursive** or **Divide and Conquer** algorithm by establishing well-defined base cases, self-similar state reductions, recurrence relations, and memoization caches where overlapping subproblems occur.

---

## Pattern

**2D Recurrence Matching DFS + Memoization**

---

## Recurrence Relation & Stack Execution Mechanics

To implement a clean, stack-safe recursive algorithm, establish these foundational components:

### 1. Base Case Invariants
Define explicit termination conditions to prevent stack overflow (`RangeError: Maximum call stack size exceeded`):
- **Empty / Identity Inputs:** Return trivial values when inputs hit identity limits ($N = 0$, $N = 1$, or `node == null`):
  $$f(0) = \text{base\_value}$$
- **Target Reach / Boundary Conditions:** Immediately terminate search branches that violate problem constraints.

### 2. Recurrence Relation
Express the solution of the main problem $T(N)$ as a combination of sub-solutions operating on smaller instance sizes:
$$T(N) = a \cdot T\left(\frac{N}{b}\right) + f(N) \quad \text{or} \quad T(N) = T(N - 1) + T(N - 2)$$

### 3. Call Stack Unwinding State
Differentiate work performed during the **downward activation phase** (passing parameters down the stack) versus the **upward unwinding phase** (aggregating returned subproblem values):
- **Downward Phase:** Parameter isolation, index halving, state filtering.
- **Upward Phase:** Recombining results, carrying remainders, node linking, or computing minimums/maximums.

---

## Brute Force Approach

The naive recursive strategy explores all recursive sub-branches repeatedly without storing computed states, leading to overlapping calculation trees.

1. Implement direct mathematical or structural recurrence without memoization.
2. Allow identical parameter states to trigger redundant sub-tree traversals.

### Brute Force Complexity
- **Time Complexity:** $O(2^N)$ or $O(N!)$ due to exponential branch expansion.
- **Space Complexity:** $O(N)$ depth of execution call stack frames.

---

## Optimized Approach

The optimal recursive strategy uses **Divide & Conquer** to reduce problem sizes logarithmically ($O(\log N)$), or applies **Memoization** (Top-Down Dynamic Programming) to cache subproblem evaluations.

### Algorithmic Execution Steps:
1. **Identify Base Cases:** Check termination limits at the very top of the function.
2. **Consult Memoization Cache (If applicable):** Return cached values if state parameter key exists in lookup table.
3. **Execute Sub-problem Recursion:** Divide state parameters into smaller instances (e.g., $N/2$, $N-1$, or split left/right subtrees).
4. **Combine Sub-results:** Merge values returned from sub-calls using problem operators.
5. **Cache & Return:** Store result in the memoization table and return value to caller frame.

---

## Hint 1

Can you rephrase the problem as solving the exact same operation on a smaller sub-instance (e.g., $N-1$, $N/2$, or sub-list tail)?

---

## Hint 2

Are identical recursive sub-calls being calculated multiple times? Adding a Memoization Hash Map reduces exponential $O(2^N)$ execution down to $O(N)$.

---

## Common Mistakes & Edge Cases

- **Missing / Flawed Base Cases:** Forgetting boundary termination conditions, causing infinite recursion stack overflow.
- **Global / Shared State Contamination:** Mutating global or non-isolated variables across recursive call frames without resetting state during unwinding.
- **Integer Overflow in Fast Exponentiation:** Neglecting modular arithmetic ($10^9 + 7$) during recursive multiplication steps.
- **Deep Recursion Limits:** Failing to convert tail-heavy operations to iterative processing in environments with shallow stack allocations.

---

## Complexity Analysis

- **Time Complexity:** $O(\log N)$ for Divide & Conquer halving operations (via Master Theorem), $O(N)$ with Memoization, or $O(N \log N)$ for subproblem merging.
- **Space Complexity:** $O(\log N)$ or $O(N)$ auxiliary space allocated for the execution call stack frames and memoization cache.
