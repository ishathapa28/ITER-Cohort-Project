# 94. Binary Tree Inorder Traversal

## Problem Description

Solve standard LeetCode problem **94: Binary Tree Inorder Traversal** (Easy).

Analyze the sequence constraints, expression hierarchy, or element boundary conditions, and construct an optimal **Stack** or **Monotonic Stack** algorithm to process elements in Last-In, First-Out (LIFO) order.

---

## Pattern

**Iterative Left-Branch Call Stack Traversal**

---

## Stack Invariants & Execution Mechanics

To guarantee correct behavior and prevent illegal pointer or index access, establish these structural guarantees:

### 1. LIFO Context & State Isolation
The Stack data structure enforces strict $O(1)$ operations at the top boundary:
- **Push Operation:** $\text{stack.push}(\text{item}) \implies \text{adds context to top}$
- **Pop Operation:** $\text{stack.pop}() \implies \text{restores previous evaluation frame}$
- **Top Inspection:** $\text{stack.top}() \implies \text{views immediate active context without removal}$

When parsing nested structures (e.g., brackets, expressions, nested lists), each open boundary pushes a new execution frame, isolating local computations until closed.

### 2. Monotonic Stack Invariant
A Monotonic Stack maintains elements in strictly increasing or decreasing order to resolve **Next Greater / Previous Smaller Element** queries in $O(1)$ amortized time:

- **Monotonic Increasing Stack:** Elements are ordered from smallest to largest ($S[0] < S[1] < \dots < S[k]$). Used to find the **Next / Previous Smaller Element**:
  $$\text{While } (\text{stack.top}() \ge \text{current\_val}) \implies \text{stack.pop}()$$
- **Monotonic Decreasing Stack:** Elements are ordered from largest to smallest ($S[0] > S[1] > \dots > S[k]$). Used to find the **Next / Previous Greater Element**:
  $$\text{While } (\text{stack.top}() \le \text{current\_val}) \implies \text{stack.pop}()$$

### 3. Boundary & Index Storage Pattern
When calculating widths or ranges (e.g., histograms, rain trapping, subarray minimums), store **indices rather than raw values** on the stack. The distance between the current index $i$ and the new stack top index $j$ yields the boundary span width:
$$\text{width} = i - \text{stack.top}() - 1$$

---

## Brute Force Approach

The brute force strategy scans the remaining array forward or backward repeatedly for every element using nested loops to locate boundary limits or evaluate expressions.

1. Loop through each element at index $i$.
2. Run an inner loop from $i+1$ to $N-1$ to locate the next greater/smaller element or verify matching delimiters.

### Brute Force Complexity
- **Time Complexity:** $O(N^2)$ or $O(N^3)$ due to exhaustive nested linear scans.
- **Space Complexity:** $O(1)$ or $O(N)$ auxiliary storage space.

---

## Optimized Approach

The optimal Stack algorithm processes elements in a single pass ($O(N)$), using stack push and pop mechanics to resolve local contexts or maintain monotonic invariants in $O(1)$ amortized time per element.

### Algorithmic Execution Steps:
1. **Initialize Stack:** Create an empty stack (and auxiliary result structures or tracking variables).
2. **Iterate Through Sequence:** Loop through elements or characters in the input sequence.
3. **Maintain Monotonic Property / Process Context:**
   - **Monotonic Stack:** Pop elements from the stack while they violate the ordering invariant. Each popped element uses the current item as its right boundary and the new stack top as its left boundary.
   - **Parsing Stack:** Push operators/open brackets onto the stack. Upon encountering close brackets or low-precedence operators, pop and evaluate until the frame boundary is restored.
4. **Push Current Element / State:** Add current element or index onto the stack.
5. **Final Clean-up & Output:** Process any residual elements remaining on the stack and format the output.

---

## Hint 1

Does finding the answer for the current element depend on the most recent unclosed element or immediate boundary context? A Stack naturally manages $O(1)$ access to the nearest active context.

---

## Hint 2

Are you trying to find the "Next Greater", "Previous Greater", "Next Smaller", or "Previous Smaller" element for every index? A Monotonic Stack computes these boundaries for all elements in a single $O(N)$ pass.

---

## Common Mistakes & Edge Cases

- **Empty Stack Pop Errors (`EmptyStackException` / `IndexError`):** Attempting to inspect or pop `stack.top()` when the stack is empty without checking `!stack.isEmpty()`.
- **Storing Values Instead of Indices:** Storing raw values instead of element indices when range/width calculations (e.g., histogram rectangles) are required.
- **Strict vs. Non-Strict Monotonicity:** Confusing strict inequalities (`<`, `>`) with non-strict inequalities (`\le`, `\ge`), leading to double-counting or incorrect handling of duplicate values.
- **Forgetting Residual Stack Clean-up:** Neglecting elements left on the stack after the main loop finishes (e.g., trailing operations in expression calculators or remaining digits in digit removal).

---

## Complexity Analysis

- **Time Complexity:** $O(N)$ linear time pass. Although inner `while` loops exist, each element is pushed onto and popped from the stack **at most once**, yielding $O(1)$ amortized time per element.
- **Space Complexity:** $O(N)$ auxiliary memory space to maintain stack elements or index frames.
