# 377. Combination Sum IV

## Problem Description

Solve standard LeetCode problem **377: Combination Sum IV** (Medium).

Formulate an optimal **Dynamic Programming** solution by establishing clear state representations, recursive transition equations, boundary base cases, and state space optimizations.

---

## Pattern

**1D Permutation Target Sum DP**

---

## Recursive State & Transition Formulation

To solve this problem efficiently using Dynamic Programming, define the state and transitions explicitly:

### 1. State Definition
Define $dp[i]$ (or $dp[i][j]$) as:
- **$dp[i]$**: The optimal value, boolean reachability, or total count for subproblem considering elements up to index $i$.
- **$dp[i][j]$**: The optimal solution over the interval $[i, j]$ or state evaluation using $i$ elements with $j$ constraints.

### 2. State Transition Equation
Express the optimal solution of a larger subproblem in terms of smaller subproblems:
$$dp[i] = \text{optimize} \Big( dp[i - 1] + \text{cost}, \quad dp[i - 2] + \text{value} \Big)$$

### 3. Base Cases
- Establish base initialization states for empty inputs, zero bounds, or single element states:
  $$dp[0] = 0, \quad dp[1] = \text{initial\_value}$$

---

## Brute Force Approach

The brute force strategy recursively explores all possible decision branches without saving or caching calculated results (overlapping subproblems).

1. Generate all recursive decision paths across choices.
2. Evaluate validity or compute metrics from leaf states.

### Brute Force Complexity
- **Time Complexity:** $O(2^n)$ or $O(n!)$ due to repeating computation trees.
- **Space Complexity:** $O(n)$ recursion stack depth.

---

## Optimized Approach

The optimal DP approach solves subproblems bottom-up (iterative) or top-down (recursive memoization) to avoid duplicate work.

### Algorithmic Execution Steps:
1. **Define Table/State Variables:** Allocate $dp$ table initialized with identity elements (e.g., $0$, $\infty$, $-\infty$, or `False`).
2. **Apply Base Cases:** Pre-fill initial index entries corresponding to boundary conditions.
3. **Iterate & Fill State Space:** Loop through subproblems in topological dependencies (bottom-up execution).
4. **Optimize Space (Rolling Array):** If current state depends only on $dp[i-1]$ or $dp[i-2]$, compress higher-dimensional arrays to linear scalar variables.

---

## Hint 1

Can you break down the problem into smaller overlapping subproblems where the choice at step $i$ depends only on precomputed results of step $i-1$ or $i-2$?

---

## Hint 2

Are you recomputing identical recursive branches? Can a 1D or 2D memoization cache prune duplicate subtrees?

---

## Common Mistakes & Edge Cases

- **Off-by-One Array Alignment:** Incorrect mapping between $0$-indexed input arrays and $1$-indexed $dp$ tables.
- **State Space Memory Limits:** Allocating full $N \times M$ matrices when a $1\text{D}$ rolling array suffices.
- **Initialization Pitfalls:** Initializing min-maximization DP entries with `0` instead of $\infty$ or $-\infty$.
- **Subproblem Dependency Order:** Iterating nested loops in an order that reads uncomputed DP states.

---

## Complexity Analysis

- **Time Complexity:** $O(n)$ or $O(n^2)$ total computed states (each state computed in $O(1)$ time).
- **Space Complexity:** $O(n)$ or $O(n^2)$ memory space (compressible to $O(1)$ or $O(n)$ via rolling space optimization).
