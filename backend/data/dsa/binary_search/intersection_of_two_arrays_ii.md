# 350. Intersection of Two Arrays II

## Problem Description

Solve standard LeetCode problem **350: Intersection of Two Arrays II** (Easy).

Analyze the problem space and formulate an optimal **Binary Search** approach by defining a search range, monotonic conditions, and mid-point predicates to reduce search space logarithmically.

---

## Pattern

**Sort + Two Pointers / Binary Search Lookup**

---

## Search Space & Monotonicity Analysis

To apply Binary Search effectively, establish the monotonicity property and search bounds:

### 1. Search Space Range Definition
Identify the upper and lower boundaries for the search pointers:
- **Low Boundary (`low` / `left`):** The minimum possible valid index or feasible solution parameter.
- **High Boundary (`high` / `right`):** The maximum possible valid index or feasible solution parameter.

### 2. Monotonic Predicate Function
Define a decision function $P(\text{mid})$ that returns a boolean condition based on domain monotonicity:
$$P(\text{mid}) = \begin{cases} \text{true} & \text{if condition holds for } \text{mid} \\ \text{false} & \text{otherwise} \end{cases}$$

Monotonic property guarantees:
$$\text{If } P(k) = \text{true}, \text{ then } P(x) = \text{true} \quad \forall x > k \quad (\text{or } \forall x < k)$$

---

## Brute Force Approach

The brute force strategy sequentially scans every element in the array or tests every possible integer answer within the range.

1. Iterate linearly through indices from $0$ to $n - 1$ or test candidate values sequentially.
2. Verify constraints at each step using linear evaluation.

### Brute Force Complexity
- **Time Complexity:** $O(n)$ for linear scan, or $O(n \cdot m)$ for value range verification.
- **Space Complexity:** $O(1)$ auxiliary memory space.

---

## Optimized Approach

The optimal Binary Search algorithm repeatedly cuts the candidate search interval in half based on the outcome of evaluating the middle element.

### Algorithmic Execution Steps:
1. **Initialize Search Bounds:** Set `low` and `high` to cover the complete range.
2. **Calculate Safe Midpoint:** Avoid overflow by computing:
   $$\text{mid} = \text{low} + \left\lfloor \frac{\text{high} - \text{low}}{2} \right\rfloor$$
3. **Evaluate Predicate & Shrink Search Space:**
   - If $P(\text{mid})$ satisfies the condition, record `mid` as candidate answer and update boundaries to search for a better boundary:
     $$\text{high} = \text{mid} - 1 \quad \text{or} \quad \text{low} = \text{mid}$$
   - Otherwise, eliminate the unfeasible half:
     $$\text{low} = \text{mid} + 1 \quad \text{or} \quad \text{high} = \text{mid} - 1$$
4. **Termination & Output:** Return the converged `low` pointer or tracked optimal value.

---

## Hint 1

Can you rephrase the problem as a decision question: *"Is it possible to achieve target condition $X$ with parameter $\text{mid}$?"*

---

## Hint 2

Does the target search space possess a monotonic property where true/false values split cleanly at a single boundary point?

---

## Common Mistakes & Edge Cases

- **Integer Overflow on Midpoint:** Computing `mid = (low + high) / 2` in languages like C++/Java instead of `low + (high - low) / 2`.
- **Infinite Loop Traps:** Incorrect boundary updates when setting `low = mid` or `high = mid` without proper integer division rounding.
- **Off-by-One Range Errors:** Mismanaging inclusive vs. exclusive search boundaries (`low <= high` vs. `low < high`).
- **Duplicates Handling:** Failing to shrink boundaries when boundary elements match (e.g., `arr[low] == arr[mid] == arr[high]`).

---

## Complexity Analysis

- **Time Complexity:** $O(\log n)$ or $O(k \log(\text{range}))$, where $n$ is array length and $k$ is cost of checking feasibility at each step.
- **Space Complexity:** $O(1)$ auxiliary space for iterative search, or $O(\log n)$ for recursive call stack.
