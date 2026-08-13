# 358. Rearrange String k Distance Apart

## Problem Description

Solve standard LeetCode problem **358: Rearrange String k Distance Apart** (Hard).

Analyze element ordering, interval boundaries, or custom comparison rules, and formulate an optimal **Sorting** algorithm (Comparison Sort, Non-Comparison Bucket/Counting/Radix Sort, Dutch National Flag, or Custom Comparator Sorting).

---

## Pattern

**Character Frequency Max-Heap / Frequency Bucket Sorting**

---

## Sorting Invariants & Algorithmic Paradigm

To structure an optimal sorting strategy, establish these key invariants:

### 1. Comparison vs. Non-Comparison Bounds
- **Comparison-Based Sorting (Merge Sort, Quick Sort, Heap Sort):** Operates under the mathematical lower bound constraint of:
  $$Omega(N log N)$$
- **Non-Comparison Sorting (Counting Sort, Bucket Sort, Radix Sort):** Operates in linear time $mathcal{O}(N + K)$ when element keys fall within bounded integer/frequency ranges.

### 2. Custom Comparator Invariant
When defining custom ordering rules (e.g., string concatenation or multi-attribute sorting), the comparator function $C(a, b)$ must satisfy **Strict Weak Ordering**:
- **Irreflexivity:** $C(a, a) = 	ext{false}$
- **Asymmetry:** If $C(a, b) = 	ext{true}$, then $C(b, a) = 	ext{false}$
- **Transitivity:** If $C(a, b) = 	ext{true}$ and $C(b, c) = 	ext{true}$, then $C(a, c) = 	ext{true}$

### 3. Partitioning & In-Place Pointer Invariants
- **Dutch National Flag (3-Way Partitioning):** Partition an array into three segments (e.g., $0$s, $1$s, $2$s) using three pointers:
  $$	ext{low} le 	ext{mid} le 	ext{high}$$
  - $	ext{nums}[0 dots 	ext{low}-1] == 0$
  - $	ext{nums}[	ext{low} dots 	ext{mid}-1] == 1$
  - $	ext{nums}[	ext{high}+1 dots N-1] == 2$
- **Interval Start/End Sorting:** Sort intervals by start time to consolidate overlaps, or sort by end time to maximize non-overlapping selections (Greedy Scheduling).

---

## Brute Force Approach

The brute force strategy checks all pairs or permutations ($O(N^2)$ or $O(N!)$) without sorting or organizing the underlying search space first.

1. Run nested loops to compare every element with every other element repeatedly.
2. Exhaustively search across unordered values to evaluate constraints.

### Brute Force Complexity
- **Time Complexity:** $O(N^2)$ or $O(N!)$ due to unorganized exhaustive pairwise checks.
- **Space Complexity:** $O(1)$ auxiliary memory space.

---

## Optimized Approach

The optimal Sorting strategy organizes data upfront ($O(N log N)$ or $O(N)$), enabling fast two-pointer traversals, binary searches, or single-pass interval consolidation.

### Algorithmic Execution Steps:
1. **Choose Sorting Strategy:**
   - **Full Sort:** Apply $O(N log N)$ comparison sort when total order is needed.
   - **Bucket / Counting Sort:** Apply $O(N)$ non-comparison sort when key values/frequencies are bounded.
   - **Partial Sort / Quickselect:** Apply average $O(N)$ Quickselect when seeking $K$-th order statistics.
2. **Apply Custom Comparator (If required):** Sort multi-dimensional elements by primary and secondary criteria.
3. **Traverse Sorted Space:** Execute a single pass using Two Pointers, Sliding Window, or Interval Merging logic across the ordered array.
4. **Assemble Output:** Construct the consolidated interval list, target pair, or ranked output.

---

## Hint 1

Does ordering the input upfront allow you to replace an inner $O(N)$ loop with a fast $O(1)$ adjacent comparison or Two Pointers sweep?

---

## Hint 2

When seeking the $K$-th largest or smallest element, do you really need to sort the entire array ($O(N log N)$), or can Quickselect achieve average $O(N)$ time?

---

## Common Mistakes & Edge Cases

- **Invalid Custom Comparators:** Returning inconsistent boolean values inside custom sort comparators, causing undefined sorting behavior or segmentation faults.
- **Modifying Input Arrays In-Place unexpectedly:** Mutating caller arrays in-place when side-effect-free output is required.
- **Integer Overflow in Differences:** Writing comparators as a - b instead of explicit comparisons, leading to numeric overflow bugs with extreme positive/negative values.
- **Overlooking Non-Comparison Options:** Using $O(N log N)$ sorting when keys are small integers or character frequencies ($0 dots 255$) solvable in $O(N)$ time via Bucket/Counting Sort.

---

## Complexity Analysis

- **Time Complexity:** $O(N log N)$ for standard comparison sorts, $O(N)$ average for Quickselect / Bucket / Counting / Radix Sort.
- **Space Complexity:** $O(1)$ or $O(log N)$ for in-place Quick Sort / Heapsort, $O(N)$ for Merge Sort, Bucket Sort, or output structures.
