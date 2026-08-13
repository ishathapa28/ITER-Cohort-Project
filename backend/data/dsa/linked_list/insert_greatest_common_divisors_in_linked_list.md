# 2807. Insert Greatest Common Divisors in Linked List

## Problem Description

Solve standard LeetCode problem **2807: Insert Greatest Common Divisors in Linked List** (Medium).

Analyze the list structure and implement an optimal **Linked List** solution while safely manipulating node pointers (`next`, `prev`), keeping track of memory invariants, and handling boundary conditions cleanly.

---

## Pattern

**Single Pass Adjacent Nodes Euclid GCD Insertion**

---

## Pointer Invariants & Structural Mechanics

To implement linked list operations safely without losing reference to memory nodes, establish these invariants:

### 1. Sentinel / Dummy Head Node Pattern
- Always create a sentinel dummy node before beginning head-modifying operations:
  $$\text{dummy.next} = \text{head}$$
- Using a dummy node eliminates special edge case handling for inserting, deleting, or reordering the initial head node.

### 2. Slow & Fast Pointer Strategy (Tortoise and Hare)
- **Midpoint Detection:** Advance `fast` by $2$ steps and `slow` by $1$ step. When `fast` reaches the end, `slow` sits directly at the list midpoint.
- **Cycle Detection:** If `fast` and `slow` intersect, a cycle exists.
- **K-th Node From End:** Advance `fast` pointer by $k$ steps first, then move both pointers together at equal speed.

### 3. Pointer Reversal Invariant
To reverse linked list pointers in-place, maintain three explicit references:
$$\text{prev} = \text{null}, \quad \text{curr} = \text{head}, \quad \text{next\_node} = \text{null}$$
At each step:
$$\text{next\_node} = \text{curr.next} \implies \text{curr.next} = \text{prev} \implies \text{prev} = \text{curr} \implies \text{curr} = \text{next\_node}$$

---

## Brute Force Approach

The brute force strategy converts the linked list into a linear dynamic array (e.g., Python `list`, C++ `vector`), performs modifications on index-based array elements, and then rebuilds or updates node values.

1. Traverse the linked list and store all node values or references in an array.
2. Apply standard array operations (sorting, two-pointer swaps, index deletions).
3. Re-link nodes sequentially by iterating through the modified array.

### Brute Force Complexity
- **Time Complexity:** $O(n)$ or $O(n \log n)$ if sorting is involved.
- **Space Complexity:** $O(n)$ auxiliary space to allocate the array.

---

## Optimized Approach

The optimal in-place pointer approach modifies node pointers directly in a single pass without allocating extra memory structures.

### Algorithmic Execution Steps:
1. **Initialize Sentinel Node:** Create a `dummy` node pointing to `head` to unify edge case modifications.
2. **Setup Traversal References:** Declare necessary pointer references (`prev`, `curr`, `fast`, `slow`).
3. **Traverse and Rewire Links:** Iterate while `curr != null` and update node pointers in-place.
4. **Disconnect / Re-attach Sub-lists:** Ensure broken sub-list ends are terminated with `null` to prevent unintended cycles or infinite loops.
5. **Return Result:** Return `dummy.next` as the newly modified list head.

---

## Hint 1

Would introducing a `dummy` node pointing to the head simplify edge cases where the head itself gets removed or swapped?

---

## Hint 2

Can slow and fast pointers (or a temporary stack / sub-list reversal) remove the need to convert the nodes into an array?

---

## Common Mistakes & Edge Cases

- **Null Pointer Dereference (`TypeError` / `NullPointerException`):** Attempting to read `curr.next.val` when `curr` or `curr.next` is already `null`.
- **Losing List Memory References:** Overwriting a node's `next` pointer before saving the downstream reference into a temporary `next_node` variable.
- **Cycle Creation / Forgotten Tail Termination:** Forgetting to set `tail.next = null` after partitioning or reversing sub-lists.
- **Single-Node or Empty List Edge Cases:** Failing to test boundary inputs where $N = 0$, $N = 1$, or $N = 2$.

---

## Complexity Analysis

- **Time Complexity:** $O(n)$ linear time pass over the $n$ nodes in the linked list.
- **Space Complexity:** $O(1)$ auxiliary space since node link modifications are executed strictly in-place.
