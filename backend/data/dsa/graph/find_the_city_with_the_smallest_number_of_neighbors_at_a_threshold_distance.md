# 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance

## Problem Description

Solve standard LeetCode problem **1334: Find the City With the Smallest Number of Neighbors at a Threshold Distance** (Medium).

Analyze the problem domain, build the appropriate graph structure (directed/undirected, weighted/unweighted, DAG), and execute an optimal **Graph Algorithm** to address connectivity, traversal, or path optimization requirements.

---

## Pattern

**Floyd-Warshall All-Pairs Shortest Path / Multi-Dijkstra**

---

## Graph Representation & Algorithmic Invariants

To execute graph operations cleanly without falling into infinite loops or illegal states, establish these structural guarantees:

### 1. Adjacency Representation & In-Degree/Out-Degree Setup
- **Adjacency List Construction:** Represent nodes and neighbors efficiently using dynamic structures:
  $$\text{adj}[u] = [ (v_1, w_1), (v_2, w_2), \dots ]$$
- **Degree Tracking:** For directed graph topological problems, maintain an explicit array tracking incoming edge counts:
  $$\text{indegree}[v] = \text{count of incoming edges } u \to v$$

### 2. Visited State Management
Avoid cyclic traversal traps by categorizing node inspection states explicitly:
- **Unvisited ($0$):** Node has not been discovered yet.
- **Visiting ($1$):** Node is currently on the active recursion stack (indicates cycle if re-encountered in directed graph DFS).
- **Visited ($2$):** Node and all its downstream paths have been fully evaluated.

### 3. Shortest Path & Component Invariants
- **Unweighted Graphs (BFS):** Layer-by-layer exploration guarantees minimum edge traversal distance.
- **Weighted Non-Negative Graphs (Dijkstra):** Priority queue min-heap extraction guarantees optimal shortest path bounds upon node relaxation:
  $$\text{dist}[v] = \min\big(\text{dist}[v], \quad \text{dist}[u] + w(u, v)\big)$$
- **Disjoint Set Union (DSU):** Path compression and rank-based union yield near-constant time component grouping:
  $$\alpha(N) \approx O(1)$$

---

## Brute Force Approach

The brute force strategy attempts to evaluate paths, permutations, or sub-graphs by recursively exploring all possible routes without caching intermediate node states or detecting component boundaries.

1. Perform unrestricted Depth-First Search across all available directed/undirected edges.
2. Re-visit nodes along multiple redundant paths without memoization or state compression.

### Brute Force Complexity
- **Time Complexity:** $O(V!)$ or $O(2^V)$ due to combinatorial path explosion across dense vertices.
- **Space Complexity:** $O(V)$ recursion stack depth.

---

## Optimized Approach

The optimal approach applies graph reduction techniques (e.g., Kahn's topological sort, Dijkstra's priority queue, or DSU with path compression) to process vertices and edges strictly within optimal asymptotic limits.

### Algorithmic Execution Steps:
1. **Graph Construction:** Build an adjacency list and initialize visited arrays, indegree counters, or DSU parent pointers.
2. **Initialize Frontier / Queue:** Push all starting source vertices (e.g., indegree $0$ nodes, root nodes, or distance $0$ nodes) into a Queue or Min-Heap.
3. **Traverse & Relax Edges:** Process vertices systematically:
   - Extract current vertex $u$.
   - Iterate over adjacent neighbors $v$.
   - Apply state transitions, edge relaxations, or component merges.
4. **Validation & Final Assembly:** Check for valid termination conditions (e.g., cycle-free traversal, complete component connectivity, or target reachability).

---

## Hint 1

Can you map the problem entities into Vertices ($V$) and Relationships into Edges ($E$)? Is the resulting graph directed, undirected, or a Directed Acyclic Graph (DAG)?

---

## Hint 2

Does the problem require finding shortest paths (BFS / Dijkstra), components (DSU / DFS), dependency ordering (Topological Sort), or minimum spanning trees (Kruskal / Prim)?

---

## Common Mistakes & Edge Cases

- **Infinite Loops from Unvisited Cycles:** Forgetting to mark undirected edges or maintaining a `visited` set during traversal.
- **Topological Sorting Cycle Pitfalls:** Assuming a directed graph is acyclic without verifying that all nodes are processed by Kahn's algorithm.
- **Incorrect Dijkstra Relaxation:** Failing to check whether an extracted heap distance exceeds the current recorded `dist[u]` (stale heap entry).
- **Disconnected Graph Components:** Assuming the graph consists of a single connected component and failing to iterate over all unvisited root nodes $0 \dots V-1$.

---

## Complexity Analysis

- **Time Complexity:** $O(V + E)$ for standard BFS/DFS/Topological Sort, $O(E \log V)$ for Dijkstra/Kruskal algorithms, or $O(E \cdot \alpha(V))$ for DSU operations.
- **Space Complexity:** $O(V + E)$ auxiliary space to store adjacency lists, distance tables, and traversal queue/stack structures.
