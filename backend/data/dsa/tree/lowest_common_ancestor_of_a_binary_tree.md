# 236. Lowest Common Ancestor of a Binary Tree

## Problem Description

Solve standard LeetCode problem **236: Lowest Common Ancestor of a Binary Tree** (Medium).

Analyze structural relationships, subtree invariants, or binary search tree properties, and implement an optimal **Tree / Binary Search Tree** algorithm using Depth-First Search (DFS) traversals, Breadth-First Search (BFS) level ordering, or structural node manipulations.

---

## Pattern

**Postorder Subtree LCA Search DFS**

---

## Tree Traversal Mechanics & BST Invariants

To manipulate trees efficiently and reliably, establish these foundational properties:

### 1. Depth-First Search (DFS) Orders
Different DFS ordering paradigms serve distinct architectural purposes:
- **Preorder (Root $\to$ Left $\right$ Right):** Ideal for cloning trees, building serializations, or propagating values downward from roots to leaves.
- **Inorder (Left $\to$ Root $\to$ Right):** Crucial for **Binary Search Trees (BST)** because traversing a BST inorder yields elements in **strictly increasing sorted order**:
  $$\text{Inorder}(\text{BST}) \implies v_1 < v_2 < v_3 < \dots < v_n$$
- **Postorder (Left $\to$ Right $\to$ Root):** Essential for bottom-up computation where a parent node depends on fully computed values returned from both left and right subtrees (e.g., tree height, subtree max path sum, or deleting nodes).

### 2. Binary Search Tree (BST) Range Boundary Invariant
For any node in a BST with value $V$, all nodes in its left subtree must be strictly less than $V$, and all nodes in its right subtree must be strictly greater than $V$:
$$\forall x \in \text{LeftSubtree}(N), \quad x.val < N.val$$
$$\forall y \in \text{RightSubtree}(N), \quad y.val > N.val$$
When validating or searching a BST, maintain explicit valid range bounds $(\text{min\_val}, \text{max\_val})$ down the call stack:
$$\text{validate}(node, \text{min}, \text{max}) \implies \text{min} < node.val < \text{max}$$

### 3. Level Order Traversal (BFS) Layer Invariant
To process nodes layer-by-layer, snapshot the current size $S = \text{queue.size()}$ before processing elements at the current depth:
$$\text{for } i = 0 \dots S - 1: \quad \text{node} = \text{queue.poll}() \implies \text{enqueue children}$$

---

## Brute Force Approach

The brute force strategy extracts tree node values into a flat list, applies global linear/sorting operations, and then rebuilds or searches the structure.

1. Traverses all nodes and stores values in a dynamic array.
2. Sorts or iteratively searches the full array to extract answers.

### Brute Force Complexity
- **Time Complexity:** $O(N \log N)$ or $O(N^2)$ due to full list sorting or redundant subtree scans.
- **Space Complexity:** $O(N)$ auxiliary space to allocate node value lists.

---

## Optimized Approach

The optimal Tree algorithm operates directly on tree node pointers using single-pass DFS or BFS traversals.

### Algorithmic Execution Steps:
1. **Identify Traversal Strategy:** Choose DFS (Preorder/Inorder/Postorder) or BFS (Level Order) depending on whether subproblems depend on root parameters or leaf returns.
2. **Handle Base Cases:** Immediately handle null pointers or leaf nodes:
   $$\text{if } (node == \text{null}) \implies \text{return } \text{default\_value}$$
3. **Recursive Step / Queue Processing:**
   - **Top-Down DFS:** Pass parameters (e.g., target sum, range limits) down to child recursive calls.
   - **Bottom-Up DFS:** Collect returned values from `dfs(node.left)` and `dfs(node.right)`, compute the current node's state, and return the aggregated result up to the parent call frame.
   - **BFS:** Process level chunks using a Queue while maintaining level markers or rightmost views.
4. **Return Final Result:** Extract the global tracker or top-level call return value.

---

## Hint 1

Does the problem require information from subtrees before computing the current node's value? If so, use a **Postorder DFS** to gather child results first.

---

## Hint 2

If the tree is a Binary Search Tree (BST), can you leverage the property $left < root < right$ to eliminate searching entire subtrees?

---

## Common Mistakes & Edge Cases

- **Null Pointer Dereference (`TypeError` / `NullPointerException`):** Forgetting to check if `node == null` or if `node.left` / `node.right` exists before inspecting `.val`.
- **Invalid BST Assumption:** Only checking if $node.left.val < node.val < node.right.val$ locally, which fails if a deep descendant node violates a higher ancestor's boundary limit.
- **Confusing Leaf Nodes with Single-Child Nodes:** Assuming a node with one null child is a leaf node (a true leaf requires `node.left == null && node.right == null`).
- **Global Variable State Leakage:** Reusing global tracking variables across test cases without resetting them between runs.

---

## Complexity Analysis

- **Time Complexity:** $O(N)$ linear time traversal over $N$ tree nodes, or $O(H)$ for BST operations where $H$ is tree height ($H = \log N$ for balanced trees, $H = N$ for skewed trees).
- **Space Complexity:** $O(H)$ auxiliary call stack space for DFS traversals ($O(\log N)$ balanced, $O(N)$ worst-case skewed), or $O(W)$ for BFS queue space where $W$ is the maximum tree width.
