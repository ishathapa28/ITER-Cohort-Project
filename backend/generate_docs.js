const fs = require('fs');
const path = require('path');

// Target directory path for Sorting
const outputDir = path.join(__dirname, 'data', 'dsa', 'sorting');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Complete list of Sorting problems
const sortingProblems = [
  { id: 15, name: "3Sum", difficulty: "Medium", pattern: "Sort + Two Pointers Pair Traversal", slug: "3sum" },
  { id: 16, name: "3Sum Closest", difficulty: "Medium", pattern: "Sort + Two Pointers Min Distance Tracking", slug: "3sum_closest" },
  { id: 18, name: "4Sum", difficulty: "Medium", pattern: "Sort + Nested Loops + Two Pointers (K-Sum Generalization)", slug: "4sum" },
  { id: 47, name: "Permutations II", difficulty: "Medium", pattern: "Sort + Backtracking with Duplicate Pruning", slug: "permutations_ii" },
  { id: 49, name: "Group Anagrams", difficulty: "Medium", pattern: "Canonical Sorted String Key / Character Frequency Hash Map", slug: "group_anagrams" },
  { id: 56, name: "Merge Intervals", difficulty: "Medium", pattern: "Interval Start-Time Sorting + Overlap Merging Pass", slug: "merge_intervals" },
  { id: 75, name: "Sort Colors", difficulty: "Medium", pattern: "Dutch National Flag 3-Way Partitioning (0, 1, 2)", slug: "sort_colors" },
  { id: 88, name: "Merge Sorted Array", difficulty: "Easy", pattern: "In-Place Reverse Two Pointers Merging (Right-to-Left)", slug: "merge_sorted_array" },
  { id: 147, name: "Insertion Sort List", difficulty: "Medium", pattern: "Insertion Sort In-Place Pointer Manipulation on Linked List", slug: "insertion_sort_list" },
  { id: 148, name: "Sort List", difficulty: "Medium", pattern: "Top-Down / Bottom-Up Merge Sort on Linked List ($O(N \\log N)$)", slug: "sort_list" },
  { id: 164, name: "Maximum Gap", difficulty: "Medium", pattern: "Bucket Sort / Radix Sort Linear Time Gap Counting", slug: "maximum_gap" },
  { id: 169, name: "Majority Element", difficulty: "Easy", pattern: "Boyer-Moore Voting Algorithm / Sorting Median Element", slug: "majority_element" },
  { id: 179, name: "Largest Number", difficulty: "Medium", pattern: "Custom String Concatenation Sorting Comparator ($(a+b)$ vs $(b+a)$)", slug: "largest_number" },
  { id: 215, name: "Kth Largest Element in an Array", difficulty: "Medium", pattern: "Quickselect Partitioning / Min-Heap Size K", slug: "kth_largest_element_in_an_array" },
  { id: 217, name: "Contains Duplicate", difficulty: "Easy", pattern: "Sort + Adjacent Duplicate Inspection / Hash Set", slug: "contains_duplicate" },
  { id: 218, name: "The Skyline Problem", difficulty: "Hard", pattern: "Sweep-Line Algorithm + Event Sorting + Priority Queue", slug: "the_skyline_problem" },
  { id: 220, name: "Contains Duplicate III", difficulty: "Hard", pattern: "Bucket Sorting / Sliding Window TreeSet Range Lookup", slug: "contains_duplicate_iii" },
  { id: 229, name: "Majority Element II", difficulty: "Medium", pattern: "Extended Boyer-Moore Voting Algorithm / Sorting", slug: "majority_element_ii" },
  { id: 242, name: "Valid Anagram", difficulty: "Easy", pattern: "Character Array Sorting / Character Count Map", slug: "valid_anagram" },
  { id: 252, name: "Meeting Rooms", difficulty: "Easy", pattern: "Interval Start-Time Sorting + Single-Pass Overlap Check", slug: "meeting_rooms" },
  { id: 253, name: "Meeting Rooms II", difficulty: "Medium", pattern: "Start-Time Sorting + Min-Heap End-Time Allocation", slug: "meeting_rooms_ii" },
  { id: 259, name: "3Sum Smaller", difficulty: "Medium", pattern: "Sort + Two Pointers Index Differential Counting", slug: "3sum_smaller" },
  { id: 268, name: "Missing Number", difficulty: "Easy", pattern: "Cyclic Sort / Gauss Sum / Bitwise XOR", slug: "missing_number" },
  { id: 274, name: "H-Index", difficulty: "Medium", pattern: "Sort Descending / Bucket Counting Array ($O(N)$)", slug: "h_index" },
  { id: 280, name: "Wiggle Sort", difficulty: "Medium", pattern: "One-Pass Local Swap Traversal ($O(N)$) / Full Sorting", slug: "wiggle_sort" },
  { id: 295, name: "Find Median from Data Stream", difficulty: "Hard", pattern: "Two Balanced Heaps (Max-Heap & Min-Heap) Insertion", slug: "find_median_from_data_stream" },
  { id: 296, name: "Best Meeting Point", difficulty: "Hard", pattern: "Independent Row & Column Coordinate Sorting (Median Search)", slug: "best_meeting_point" },
  { id: 314, name: "Binary Tree Vertical Order Traversal", difficulty: "Medium", pattern: "BFS Column Index Tracking + Column Key Sorting Map", slug: "binary_tree_vertical_order_traversal" },
  { id: 324, name: "Wiggle Sort II", difficulty: "Medium", pattern: "Quickselect Median Partitioning + Virtual Index Mapping", slug: "wiggle_sort_ii" },
  { id: 332, name: "Reconstruct Itinerary", difficulty: "Hard", pattern: "Lexicographical Sort + Hierholzer's Eulerian Path DFS", slug: "reconstruct_itinerary" },
  { id: 347, name: "Top K Frequent Elements", difficulty: "Medium", pattern: "Bucket Sort by Frequency / Quickselect / Priority Queue", slug: "top_k_frequent_elements" },
  { id: 349, name: "Intersection of Two Arrays", difficulty: "Easy", pattern: "Sort Both Arrays + Two Pointers Merging / Hash Set", slug: "intersection_of_two_arrays" },
  { id: 350, name: "Intersection of Two Arrays II", difficulty: "Easy", pattern: "Sort Both Arrays + Two Pointers Frequency Match", slug: "intersection_of_two_arrays_ii" },
  { id: 354, name: "Russian Doll Envelopes", difficulty: "Hard", pattern: "2D Custom Sorting (Width Ascending, Height Descending) + LIS", slug: "russian_doll_envelopes" },
  { id: 358, name: "Rearrange String k Distance Apart", difficulty: "Hard", pattern: "Character Frequency Max-Heap / Frequency Bucket Sorting", slug: "rearrange_string_k_distance_apart" },
  { id: 360, name: "Sort Transformed Array", difficulty: "Medium", pattern: "Parabola Apex Two Pointers Fill (Extreme Outer Comparisons)", slug: "sort_transformed_array" },
  { id: 368, name: "Largest Divisible Subset", difficulty: "Medium", pattern: "Sorting Array + Dynamic Programming LIS Variant", slug: "largest_divisible_subset" },
  { id: 378, name: "Kth Smallest Element in a Sorted Matrix", difficulty: "Medium", pattern: "Binary Search on Value Space / Min-Heap Frontier Traversal", slug: "kth_smallest_element_in_a_sorted_matrix" },
  { id: 389, name: "Find the Difference", difficulty: "Easy", pattern: "Sort String Characters / Bitwise XOR / ASCII Sum Differential", slug: "find_the_difference" },
  { id: 406, name: "Queue Reconstruction by Height", difficulty: "Medium", pattern: "Sort Height Descending, K-Count Ascending + List Insertion", slug: "queue_reconstruction_by_height" },
  { id: 414, name: "Third Maximum Number", difficulty: "Easy", pattern: "Single Pass Track 3 Maxima / Sorting Unique Set", slug: "third_maximum_number" },
  { id: 435, name: "Non-overlapping Intervals", difficulty: "Medium", pattern: "Greedy Interval Sorting by End-Time", slug: "non_overlapping_intervals" },
  { id: 436, name: "Find Right Interval", difficulty: "Medium", pattern: "Sort Start-Time Map + Binary Search Lower Bound", slug: "find_right_interval" },
  { id: 442, name: "Find All Duplicates in an Array", difficulty: "Medium", pattern: "In-Place Index Negation Cyclic Hashing / Sorting", slug: "find_all_duplicates_in_an_array" },
  { id: 451, name: "Sort Characters By Frequency", difficulty: "Medium", pattern: "Bucket Sort Array by Frequency / Max-Heap", slug: "sort_characters_by_frequency" },
  { id: 452, name: "Minimum Number of Arrows to Burst Balloons", difficulty: "Medium", pattern: "Sort Intervals by End Coordinates + Greedy Arrow Sweep", slug: "minimum_number_of_arrows_to_burst_balloons" },
  { id: 455, name: "Assign Cookies", difficulty: "Easy", pattern: "Greedy Two Pointers on Sorted Greed & Cookie Arrays", slug: "assign_cookies" },
  { id: 462, name: "Minimum Moves to Equal Array Elements II", difficulty: "Medium", pattern: "Quickselect / Sort to Find Median Element", slug: "minimum_moves_to_equal_array_elements_ii" },
  { id: 472, name: "Concatenated Words", difficulty: "Hard", pattern: "Sort Words by Length + Trie / Word Break DP Verification", slug: "concatenated_words" },
  { id: 475, name: "Heaters", difficulty: "Medium", pattern: "Sort Both Houses & Heaters + Binary Search / Two Pointers", slug: "heaters" },
  { id: 502, name: "IPO", difficulty: "Hard", pattern: "Sort Projects by Capital Requirement + Max-Heap Profit", slug: "ipo" },
  { id: 506, name: "Relative Ranks", difficulty: "Easy", pattern: "Index Pair Sorting / Max-Heap Score Ranking", slug: "relative_ranks" }
];

// Rich Markdown Template Generator function for Sorting Problems
function generateSortingMarkdown(p) {
  return `# ${p.id}. ${p.name}

## Problem Description

Solve standard LeetCode problem **${p.id}: ${p.name}** (${p.difficulty}).

Analyze element ordering, interval boundaries, or custom comparison rules, and formulate an optimal **Sorting** algorithm (Comparison Sort, Non-Comparison Bucket/Counting/Radix Sort, Dutch National Flag, or Custom Comparator Sorting).

---

## Pattern

**${p.pattern}**

---

## Sorting Invariants & Algorithmic Paradigm

To structure an optimal sorting strategy, establish these key invariants:

### 1. Comparison vs. Non-Comparison Bounds
- **Comparison-Based Sorting (Merge Sort, Quick Sort, Heap Sort):** Operates under the mathematical lower bound constraint of:
  $$\Omega(N \log N)$$
- **Non-Comparison Sorting (Counting Sort, Bucket Sort, Radix Sort):** Operates in linear time $\mathcal{O}(N + K)$ when element keys fall within bounded integer/frequency ranges.

### 2. Custom Comparator Invariant
When defining custom ordering rules (e.g., string concatenation or multi-attribute sorting), the comparator function $C(a, b)$ must satisfy **Strict Weak Ordering**:
- **Irreflexivity:** $C(a, a) = \text{false}$
- **Asymmetry:** If $C(a, b) = \text{true}$, then $C(b, a) = \text{false}$
- **Transitivity:** If $C(a, b) = \text{true}$ and $C(b, c) = \text{true}$, then $C(a, c) = \text{true}$

### 3. Partitioning & In-Place Pointer Invariants
- **Dutch National Flag (3-Way Partitioning):** Partition an array into three segments (e.g., $0$s, $1$s, $2$s) using three pointers:
  $$\text{low} \le \text{mid} \le \text{high}$$
  - $\text{nums}[0 \dots \text{low}-1] == 0$
  - $\text{nums}[\text{low} \dots \text{mid}-1] == 1$
  - $\text{nums}[\text{high}+1 \dots N-1] == 2$
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

The optimal Sorting strategy organizes data upfront ($O(N \log N)$ or $O(N)$), enabling fast two-pointer traversals, binary searches, or single-pass interval consolidation.

### Algorithmic Execution Steps:
1. **Choose Sorting Strategy:**
   - **Full Sort:** Apply $O(N \log N)$ comparison sort when total order is needed.
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

When seeking the $K$-th largest or smallest element, do you really need to sort the entire array ($O(N \log N)$), or can Quickselect achieve average $O(N)$ time?

---

## Common Mistakes & Edge Cases

- **Invalid Custom Comparators:** Returning inconsistent boolean values inside custom sort comparators, causing undefined sorting behavior or segmentation faults.
- **Modifying Input Arrays In-Place unexpectedly:** Mutating caller arrays in-place when side-effect-free output is required.
- **Integer Overflow in Differences:** Writing comparators as a - b instead of explicit comparisons, leading to numeric overflow bugs with extreme positive/negative values.
- **Overlooking Non-Comparison Options:** Using $O(N \log N)$ sorting when keys are small integers or character frequencies ($0 \dots 255$) solvable in $O(N)$ time via Bucket/Counting Sort.

---

## Complexity Analysis

- **Time Complexity:** $O(N \log N)$ for standard comparison sorts, $O(N)$ average for Quickselect / Bucket / Counting / Radix Sort.
- **Space Complexity:** $O(1)$ or $O(\log N)$ for in-place Quick Sort / Heapsort, $O(N)$ for Merge Sort, Bucket Sort, or output structures.
`;
}

// Write files out
let count = 0;
sortingProblems.forEach(p => {
  const filePath = path.join(outputDir, `${p.slug}.md`);
  fs.writeFileSync(filePath, generateSortingMarkdown(p), 'utf-8');
  count++;
});

console.log(`Successfully generated ${count} detailed Sorting Markdown files in: ${outputDir}`);