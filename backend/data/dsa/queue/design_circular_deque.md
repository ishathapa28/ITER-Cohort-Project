# 641. Design Circular Deque

## Problem Description

Solve standard LeetCode problem **641: Design Circular Deque** (Medium).

Analyze stream processing constraints, sliding window bounds, or dynamic range optimums, and construct an optimal **Queue**, **Deque**, or **Monotonic Queue** algorithm to manage data in First-In, First-Out (FIFO) or ordered window bounds.

---

## Pattern

**Double-Ended Array / Doubly Linked List Circular Buffer**

---

## Queue Mechanics & Sliding Window Invariants

To guarantee correct behavior and maintain optimal time complexity, establish these core guarantees:

### 1. FIFO Stream Invariant
The standard Queue enforces strict First-In, First-Out order:
- **Enqueue (`offer` / `push`):** Appends elements to the back of the queue ($O(1)$).
- **Dequeue (`poll` / `pop`):** Removes elements from the front of the queue ($O(1)$).
- **Time-Bounded Eviction:** Expire elements at the front of the queue whenever their timestamp or index falls outside the valid window boundary:
  $$\text{while } (\text{queue.front}().\text{time} < t - \text{threshold}) \implies \text{queue.pop}()$$

### 2. Monotonic Deque Invariant
A Double-Ended Queue (Deque) can maintain sliding window extrema (minima or maxima) in $O(1)$ amortized time per operation:

- **Monotonic Decreasing Deque (Window Maximum):** Elements are maintained in strictly decreasing order ($D[0] > D[1] > \dots > D[k]$). The front element $D[0]$ always holds the **maximum value** in the current sliding window:
  $$\text{While } (!D.\text{isEmpty}() \land D.\text{back}().\text{val} \le \text{curr.val}) \implies D.\text{pop\_back}()$$
- **Monotonic Increasing Deque (Window Minimum):** Elements are maintained in strictly increasing order ($D[0] < D[1] < \dots < D[k]$). The front element $D[0]$ always holds the **minimum value** in the current sliding window:
  $$\text{While } (!D.\text{isEmpty}() \land D.\text{back}().\text{val} \ge \text{curr.val}) \implies D.\text{pop\_back}()$$

### 3. Window Boundary Eviction
Store **element indices rather than raw values** inside the Deque. Before reading the window extremum from the front, pop stale indices that lie outside the active window range $[i - W + 1, i]$:
$$\text{While } (!D.\text{isEmpty}() \land D.\text{front}().\text{index} < i - W + 1) \implies D.\text{pop\_front}()$$

---

## Brute Force Approach

The brute force strategy scans the full sliding window range of size $W$ repeatedly for every new element added to the stream or array.

1. Advance a sliding window pointer across the sequence.
2. Iterate through all $W$ elements within the window to find the maximum, minimum, or sum.

### Brute Force Complexity
- **Time Complexity:** $O(N \cdot W)$ or $O(N^2)$ due to redundant sub-array scans.
- **Space Complexity:** $O(1)$ or $O(W)$ auxiliary memory space.

---

## Optimized Approach

The optimal Monotonic Deque / Queue algorithm processes elements in a single pass ($O(N)$), maintaining dynamic range optimums in $O(1)$ amortized time per element.

### Algorithmic Execution Steps:
1. **Initialize Deque / Queue Structure:** Allocate a double-ended queue to store candidate indices or elements.
2. **Process Sequence / Stream:** Iterate through array elements at index $i$.
3. **Evict Out-of-Bound Front Elements:** Remove indices from the front of the deque if $D.\text{front}() \le i - W$.
4. **Maintain Monotonicity at Back:** Pop elements from the back of the deque while they violate the monotonic invariant relative to `nums[i]`.
5. **Push Current Index:** Push index $i$ to the back of the deque.
6. **Record Window Result:** If $i \ge W - 1$, the front of the deque ($D.\text{front}()$) contains the optimum value for the current window.

---

## Hint 1

Do you need to extract the maximum or minimum element of a continuously moving sliding window in $O(1)$ time? A Monotonic Deque maintains window extrema dynamically.

---

## Hint 2

When maintaining a Monotonic Deque, store **indices** instead of raw values so you can check when an element falls out of the active sliding window boundary.

---

## Common Mistakes & Edge Cases

- **Index Out-of-Bounds Eviction Omission:** Forgetting to check and pop expired indices from the front of the deque (`pop_front`), causing stale values from prior windows to contaminate results.
- **Incorrect Monotonic Inequality:** Using $\le$ instead of $<$ (or vice-versa) when cleaning the back of the deque, leading to duplicate index accumulation or incorrect eviction.
- **Failing to Wait for Window Formation:** Attempting to record results before the sliding window has reached full size ($i < W - 1$).
- **Memory Leaks in Circular Buffers:** Incorrect modulo arithmetic (`index = (index + 1) % capacity`) in array-based circular queue implementations.

---

## Complexity Analysis

- **Time Complexity:** $O(N)$ linear time. Each element or index is pushed onto and popped from the deque **at most once**, yielding $O(1)$ amortized time per step.
- **Space Complexity:** $O(W)$ or $O(N)$ auxiliary memory space to store window indices inside the Deque or stream queue.
