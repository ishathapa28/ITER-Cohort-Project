# 1425. Constrained Subsequence Sum

## Problem Description

Solve standard LeetCode problem **1425: Constrained Subsequence Sum** (Hard).

Analyze dynamic stream conditions, range constraints, or distance bounds, and construct an optimal **Heap / Priority Queue** algorithm to maintain structural order and extract dynamic minimums or maximums efficiently.

---

## Pattern

**Dynamic Programming + Monotonic Deque / Max-Heap Window**

---

## Heap Mechanics & Invariant Guarantees

To ensure correct heap operations and avoid unnecessary performance overhead, maintain these structural invariants:

### 1. Heap Order Property
A complete binary tree underlying a Priority Queue guarantees $O(1)$ access to the extreme element:
- **Min-Heap Invariant:** Parent node value is always less than or equal to child nodes:
  $$\text{parent}(i) \le \text{child}(i) \implies \text{root} = \min(S)$$
- **Max-Heap Invariant:** Parent node value is always greater than or equal to child nodes:
  $$\text{parent}(i) \ge \text{child}(i) \implies \text{root} = \max(S)$$

### 2. Top-K Maintenance Invariant
- To track the **$K$ largest elements** in a dynamic stream, maintain a **Min-Heap of size $K$**. The heap root represents the $K$-th largest boundary threshold:
  $$\text{If } |H| > K, \quad H.\text{pop}() \implies \text{root} = K\text{-th largest}$$
- To track the **$K$ smallest elements**, maintain a **Max-Heap of size $K$**.

### 3. Dual Heap & Lazy Deletion Mechanics
- **Dual Heap Median Tracking:** Balance element counts between a Max-Heap (lower half) and a Min-Heap (upper half):
  $$|H_{\text{max}}| = |H_{\text{min}}| \quad \text{or} \quad |H_{\text{max}}| = |H_{\text{min}}| + 1$$
- **Lazy Deletion:** When heap structures do not support $O(\log N)$ arbitrary internal deletions, track stale elements in a Hash Map and pop them lazily only when they surface at the top of the heap:
  $$\text{while } (H.\text{top}() \in \text{invalidMap}) \implies H.\text{pop}()$$

---

## Brute Force Approach

The brute force strategy re-sorts the entire collection or performs a linear scan across all elements whenever the maximum or minimum element is queried or modified.

1. Store stream elements or candidate pairs in a dynamic array.
2. Sort the entire array of size $N$ repeatedly ($O(N \log N)$) upon each insertion or update to extract the target element.

### Brute Force Complexity
- **Time Complexity:** $O(N^2 \log N)$ or $O(N^2)$ due to repeated full-array sort and linear search iterations.
- **Space Complexity:** $O(N)$ memory allocations.

---

## Optimized Approach

The optimal Priority Queue algorithm performs dynamic insertion and extraction operations in logarithmic time while preserving constant-time peak access.

### Algorithmic Execution Steps:
1. **Choose Heap Type & Custom Comparator:** Define a Min-Heap or Max-Heap using custom tuple comparisons (e.g., sorting by distance, frequency, or coordinates).
2. **Push & Restrain Bounds:** Insert elements into the Priority Queue in $O(\log K)$ time. If tracking a bounded subset, evict root entries whenever heap size exceeds $K$.
3. **Extract & Transition State:** Repeatedly pop the extreme element from the heap, update downstream variables or state queues, and push newly unlocked candidates back onto the heap.
4. **Final Assembly:** Aggregate extracted heap elements into the final result structure.

---

## Hint 1

Do you need to continuously query the smallest or largest item from a dynamically changing collection? A Heap provides $O(1)$ lookup and $O(\log N)$ insertion.

---

## Hint 2

When tracking a sliding window median or top-$K$ constraint, can maintaining two balanced heaps or a bounded Min-Heap of size $K$ eliminate full sorting overhead?

---

## Common Mistakes & Edge Cases

- **Mismatched Heap Orientations:** Using a Max-Heap instead of a Min-Heap when trying to keep the $K$ largest elements (causing true largest elements to be evicted).
- **Stale Elements in Priority Queue:** Pushing graph/grid nodes onto Dijkstra heaps without checking if an already recorded distance is smaller (missing stale check: `if (dist > recorded[u]) continue`).
- **Ignoring Custom Tie-Breaker Logic:** Not defining explicit secondary comparator fields when primary values are equal (leading to non-deterministic node orders).
- **Comparator Integer Overflow:** Subtracting integer values directly inside a comparator (e.g., `a - b`) instead of using explicit comparisons, causing numeric overflow bugs with negative integers.

---

## Complexity Analysis

- **Time Complexity:** $O(N \log K)$ or $O(N \log N)$, where $N$ is total elements processed and $K$ is heap size constraint.
- **Space Complexity:** $O(K)$ or $O(N)$ auxiliary memory space to maintain heap elements and auxiliary frequency/distance maps.
