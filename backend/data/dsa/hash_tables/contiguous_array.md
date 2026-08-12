# 525. Contiguous Array

## Problem Description

Solve LeetCode problem **525: Contiguous Array** (Medium). 

Analyze input conditions and structure an optimal algorithmic solution using **Hash Tables / Hash Sets** to achieve maximum speed and low space usage.

---

## Pattern

**Prefix Balance (+1/-1 Sum) + Hash Map First Index**

---

## Brute Force Approach

The brute force strategy attempts to evaluate all combinations, nested elements, or sub-paths exhaustively without leveraging constant time memory lookups.

1. Loop through all possible combinations or sub-arrays using multiple nested loops.
2. Recompute equality, sum checks, or frequency conditions repeatedly.

### Brute Force Complexity
- **Time Complexity:** $\mathcal{O}(n^2)$ or $\mathcal{O}(n^3)$ due to exhaustive scanning.
- **Space Complexity:** $\mathcal{O}(1)$ or $\mathcal{O}(n)$ memory allocation.

---

## Optimized Approach

The optimal approach utilizes **Prefix Balance (+1/-1 Sum) + Hash Map First Index** to trade minimal memory space for immediate $\mathcal{O}(1)$ average lookups, eliminating redundant scans.

### Algorithmic Steps:
1. **Initialize Data Structures:** Create a Hash Map / Hash Set to record seen values, frequencies, indices, or custom key encodings.
2. **Iterate & Compute:** Scan the input structure once. For every element, compute the target state or complement.
3. **Lookup & Validate:** Query the Hash Table in $\mathcal{O}(1)$ average time to check if required conditions are satisfied.
4. **Update State:** Insert or update the current element's record in the Hash Table before advancing to the next iteration step.

---

## Hint 1

What specific complement, state value, or index can be mapped in your Hash Table to replace an inner loop check with a direct $\mathcal{O}(1)$ look-up?

---

## Hint 2

Can state normalization (e.g., prefix modulo, character frequency counts, sorted strings, or coordinate tuples) serve as a unique key in the map?

---

## Common Mistakes & Edge Cases

- **Hash Collision Handling / Mutable Keys:** Using mutable structures as Hash Table keys without canonical stringification.
- **Duplicate Value Overwriting:** Overwriting indices in the map when processing duplicate inputs without proper array list checks or boundary validation.
- **Off-By-One Indexing Errors:** Miscalculating window boundaries when tracking subarray lengths or prefix sum indices.
- **Space Complexity Overflow:** Creating excessive intermediate sub-objects inside hot loop operations.

---

## Complexity Analysis

- **Time Complexity:** $\mathcal{O}(n)$ average runtime, where $n$ is the total number of elements or characters processed.
- **Space Complexity:** $\mathcal{O}(n)$ auxiliary space to store elements within the Hash Map or Hash Set.
