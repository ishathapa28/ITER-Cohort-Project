const fs = require('fs');
const path = require('path');

// Target directory path for Binary Search
const outputDir = path.join(__dirname, 'data', 'dsa', 'binary_search');

// Ensure directory structure exists safely
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Complete list of Binary Search problems
const binarySearchProblems = [
    { id: 4, name: "Median of Two Sorted Arrays", difficulty: "Hard", pattern: "Partition Binary Search on Smaller Array", slug: "median_of_two_sorted_arrays" },
    { id: 33, name: "Search in Rotated Sorted Array", difficulty: "Medium", pattern: "Modified Binary Search (Identify Sorted Half)", slug: "search_in_rotated_sorted_array" },
    { id: 34, name: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", pattern: "Lower Bound & Upper Bound Binary Search", slug: "find_first_and_last_position_of_element_in_sorted_array" },
    { id: 35, name: "Search Insert Position", difficulty: "Easy", pattern: "Standard Lower Bound Binary Search", slug: "search_insert_position" },
    { id: 69, name: "Sqrt(x)", difficulty: "Easy", pattern: "Binary Search on Answer Range [0, x]", slug: "sqrt_x" },
    { id: 74, name: "Search a 2D Matrix", difficulty: "Medium", pattern: "Virtual 1D Array Binary Search (Row/Col Mapping)", slug: "search_a_2d_matrix" },
    { id: 81, name: "Search in Rotated Sorted Array II", difficulty: "Medium", pattern: "Binary Search with Duplicates (Shrink Bounds)", slug: "search_in_rotated_sorted_array_ii" },
    { id: 153, name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", pattern: "Binary Search Pivot Detection", slug: "find_minimum_in_rotated_sorted_array" },
    { id: 154, name: "Find Minimum in Rotated Sorted Array II", difficulty: "Hard", pattern: "Binary Search Pivot with Duplicate Handling", slug: "find_minimum_in_rotated_sorted_array_ii" },
    { id: 162, name: "Find Peak Element", difficulty: "Medium", pattern: "Binary Search on Slope / Gradient Traversal", slug: "find_peak_element" },
    { id: 167, name: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", pattern: "Two Pointers / Binary Search Range Reduction", slug: "two_sum_ii_input_array_is_sorted" },
    { id: 209, name: "Minimum Size Subarray Sum", difficulty: "Medium", pattern: "Binary Search on Prefix Sums / Sliding Window", slug: "minimum_size_subarray_sum" },
    { id: 222, name: "Count Complete Tree Nodes", difficulty: "Medium", pattern: "Binary Search on Complete Tree Paths + Depth", slug: "count_complete_tree_nodes" },
    { id: 240, name: "Search a 2D Matrix II", difficulty: "Medium", pattern: "Top-Right to Bottom-Left Staircase Search / Binary Search", slug: "search_a_2d_matrix_ii" },
    { id: 259, name: "3Sum Smaller", difficulty: "Medium", pattern: "Sort + Two Pointers / Binary Search Index Count", slug: "3sum_smaller" },
    { id: 268, name: "Missing Number", difficulty: "Easy", pattern: "Binary Search on Sorted Indices / Math Sum", slug: "missing_number" },
    { id: 270, name: "Closest Binary Search Tree Value", difficulty: "Easy", pattern: "BST Binary Search Path Traversal", slug: "closest_binary_search_tree_value" },
    { id: 275, name: "H-Index II", difficulty: "Medium", pattern: "Binary Search on Sorted Citations Array", slug: "h_index_ii" },
    { id: 278, name: "First Bad Version", difficulty: "Easy", pattern: "Binary Search First Occurrence Pattern", slug: "first_bad_version" },
    { id: 287, name: "Find the Duplicate Number", difficulty: "Medium", pattern: "Binary Search on Count Range [1, n]", slug: "find_the_duplicate_number" },
    { id: 300, name: "Longest Increasing Subsequence", difficulty: "Medium", pattern: "Patience Sorting / Binary Search Index Replacement", slug: "longest_increasing_subsequence" },
    { id: 302, name: "Smallest Rectangle Enclosing Black Pixels", difficulty: "Hard", pattern: "Binary Search Row & Column Projection Boundaries", slug: "smallest_rectangle_enclosing_black_pixels" },
    { id: 315, name: "Count of Smaller Numbers After Self", difficulty: "Hard", pattern: "Binary Indexed Tree (BIT) / Merge Sort / Binary Search", slug: "count_of_smaller_numbers_after_self" },
    { id: 327, name: "Count of Range Sum", difficulty: "Hard", pattern: "Merge Sort Divide & Conquer / Prefix Sum Binary Search", slug: "count_of_range_sum" },
    { id: 349, name: "Intersection of Two Arrays", difficulty: "Easy", pattern: "Sort + Binary Search / Hash Set", slug: "intersection_of_two_arrays" },
    { id: 350, name: "Intersection of Two Arrays II", difficulty: "Easy", pattern: "Sort + Two Pointers / Binary Search Lookup", slug: "intersection_of_two_arrays_ii" },
    { id: 352, name: "Data Stream as Disjoint Intervals", difficulty: "Hard", pattern: "TreeMap / Binary Search Tree Interval Insertion", slug: "data_stream_as_disjoint_intervals" },
    { id: 354, name: "Russian Doll Envelopes", difficulty: "Hard", pattern: "2D Sorting + Patience Sorting (LIS) Binary Search", slug: "russian_doll_envelopes" },
    { id: 362, name: "Design Hit Counter", difficulty: "Medium", pattern: "Binary Search Timestamps / Fixed Circular Queue", slug: "design_hit_counter" },
    { id: 363, name: "Max Sum of Rectangle No Larger Than K", difficulty: "Hard", pattern: "2D Prefix Sums + Binary Search Tree Subarray Range", slug: "max_sum_of_rectangle_no_larger_than_k" },
    { id: 367, name: "Valid Perfect Square", difficulty: "Easy", pattern: "Binary Search on Integer Range [1, x]", slug: "valid_perfect_square" },
    { id: 374, name: "Guess Number Higher or Lower", difficulty: "Easy", pattern: "Standard Interactive Binary Search", slug: "guess_number_higher_or_lower" },
    { id: 378, name: "Kth Smallest Element in a Sorted Matrix", difficulty: "Medium", pattern: "Binary Search on Value Space Range [min, max]", slug: "kth_smallest_element_in_a_sorted_matrix" },
    { id: 400, name: "Nth Digit", difficulty: "Medium", pattern: "Mathematical Grouping + Binary Search Digit Indexing", slug: "nth_digit" },
    { id: 410, name: "Split Array Largest Sum", difficulty: "Hard", pattern: "Binary Search on Answer Space Range [max_val, sum]", slug: "split_array_largest_sum" },
    { id: 436, name: "Find Right Interval", difficulty: "Medium", pattern: "Sorted Start Times + Binary Search Lower Bound", slug: "find_right_interval" },
    { id: 441, name: "Arranging Coins", difficulty: "Easy", pattern: "Binary Search on Stair Rows / Math Formula", slug: "arranging_coins" },
    { id: 456, name: "132 Pattern", difficulty: "Medium", pattern: "Monotonic Stack / Binary Search Prefix Range", slug: "132_pattern" },
    { id: 475, name: "Heaters", difficulty: "Medium", pattern: "Binary Search Closest Element Search", slug: "heaters" },
    { id: 483, name: "Smallest Good Base", difficulty: "Hard", pattern: "Binary Search on Base Degree Power Range", slug: "smallest_good_base" },
    { id: 493, name: "Reverse Pairs", difficulty: "Hard", pattern: "Merge Sort / Fenwick Tree Binary Search", slug: "reverse_pairs" },
    { id: 497, name: "Random Point in Non-overlapping Rectangles", difficulty: "Medium", pattern: "Prefix Area Sums + Binary Search Weight Sampling", slug: "random_point_in_non_overlapping_rectangles" },
    { id: 528, name: "Random Pick with Weight", difficulty: "Medium", pattern: "Prefix Sum Array + Binary Search Sampling", slug: "random_pick_with_weight" },
    { id: 532, name: "K-diff Pairs in an Array", difficulty: "Medium", pattern: "Hash Map / Sort + Binary Search Pointer Match", slug: "k_diff_pairs_in_an_array" },
    { id: 540, name: "Single Element in a Sorted Array", difficulty: "Medium", pattern: "Binary Search on Even/Odd Parity Indexing", slug: "single_element_in_a_sorted_array" },
    { id: 611, name: "Valid Triangle Number", difficulty: "Medium", pattern: "Sort + Two Pointers / Binary Search Side Bounds", slug: "valid_triangle_number" },
    { id: 633, name: "Sum of Square Numbers", difficulty: "Medium", pattern: "Two Pointers / Binary Search Range [0, sqrt(c)]", slug: "sum_of_square_numbers" },
    { id: 644, name: "Maximum Average Subarray II", difficulty: "Hard", pattern: "Binary Search on Continuous Average Value Space", slug: "maximum_average_subarray_ii" },
    { id: 658, name: "Find K Closest Elements", difficulty: "Medium", pattern: "Binary Search Sliding Window Start Index", slug: "find_k_closest_elements" },
    { id: 668, name: "Kth Smallest Number in Multiplication Table", difficulty: "Hard", pattern: "Binary Search on Answer Matrix Range", slug: "kth_smallest_number_in_multiplication_table" },
    { id: 702, name: "Search in a Sorted Array of Unknown Size", difficulty: "Medium", pattern: "Exponential Boundary Expansion + Binary Search", slug: "search_in_a_sorted_array_of_unknown_size" },
    { id: 704, name: "Binary Search", difficulty: "Easy", pattern: "Classic Two-Pointer Binary Search", slug: "binary_search" },
    { id: 710, name: "Random Pick with Blacklist", difficulty: "Hard", pattern: "Binary Search Bounds / Remapped Hash Table", slug: "random_pick_with_blacklist" },
    { id: 713, name: "Subarray Product Less Than K", difficulty: "Medium", pattern: "Sliding Window / Binary Search Logarithm Prefix Sums", slug: "subarray_product_less_than_k" },
    { id: 718, name: "Maximum Length of Repeated Subarray", difficulty: "Medium", pattern: "Rabin-Karp Rolling Hash + Binary Search Length", slug: "maximum_length_of_repeated_subarray" },
    { id: 719, name: "Find K-th Smallest Pair Distance", difficulty: "Hard", pattern: "Sort + Binary Search on Distance Space + Two Pointers", slug: "find_k_th_smallest_pair_distance" },
    { id: 729, name: "My Calendar I", difficulty: "Medium", pattern: "Binary Search Tree / Floor & Ceiling Interval Map", slug: "my_calendar_i" },
    { id: 731, name: "My Calendar II", difficulty: "Medium", pattern: "Sweep Line / Interval List Binary Search", slug: "my_calendar_ii" },
    { id: 732, name: "My Calendar III", difficulty: "Hard", pattern: "TreeMap Boundary Sweep / Segment Tree Binary Search", slug: "my_calendar_iii" },
    { id: 744, name: "Find Smallest Letter Greater Than Target", difficulty: "Easy", pattern: "Upper Bound Binary Search with Wrap-Around", slug: "find_smallest_letter_greater_than_target" },
    { id: 754, name: "Reach a Number", difficulty: "Medium", pattern: "Mathematical Parity Search / Binary Search Sum Range", slug: "reach_a_number" },
    { id: 774, name: "Minimize Max Distance to Gas Station", difficulty: "Hard", pattern: "Binary Search on Floating Distance Space", slug: "minimize_max_distance_to_gas_station" },
    { id: 778, name: "Swim in Rising Water", difficulty: "Hard", pattern: "Binary Search Grid Feasibility + BFS/DFS", slug: "swim_in_rising_water" },
    { id: 786, name: "K-th Smallest Prime Fraction", difficulty: "Medium", pattern: "Binary Search on Fraction Range [0, 1] + Two Pointers", slug: "k_th_smallest_prime_fraction" },
    { id: 792, name: "Number of Matching Subsequences", difficulty: "Medium", pattern: "Precomputed Index Lists + Binary Search Location", slug: "number_of_matching_subsequences" },
    { id: 793, name: "Preimage Size of Factorial Zeroes Function", difficulty: "Hard", pattern: "Binary Search Trailing Zeroes Range", slug: "preimage_size_of_factorial_zeroes_function" },
    { id: 825, name: "Friends Of Appropriate Ages", difficulty: "Medium", pattern: "Sort / Frequency Array + Binary Search Range Bounds", slug: "friends_of_appropriate_ages" },
    { id: 826, name: "Most Profit Assigning Work", difficulty: "Medium", pattern: "Sort Jobs + Binary Search Maximum Profit for Ability", slug: "most_profit_assigning_work" },
    { id: 852, name: "Peak Index in a Mountain Array", difficulty: "Medium", pattern: "Binary Search Gradient Slope Evaluation", slug: "peak_index_in_a_mountain_array" },
    { id: 862, name: "Shortest Subarray with Sum at Least K", difficulty: "Hard", pattern: "Monotonic Deque / Prefix Sums Binary Search", slug: "shortest_subarray_with_sum_at_least_k" },
    { id: 875, name: "Koko Eating Bananas", difficulty: "Medium", pattern: "Binary Search on Speed Range [1, max_piles]", slug: "koko_eating_bananas" },
    { id: 878, name: "Nth Magical Number", difficulty: "Hard", pattern: "Binary Search on Value Range + LCM Inclusion-Exclusion", slug: "nth_magical_number" },
    { id: 887, name: "Super Egg Drop", difficulty: "Hard", pattern: "Dynamic Programming + Binary Search Decision Transition", slug: "super_egg_drop" },
    { id: 888, name: "Fair Candy Swap", difficulty: "Easy", pattern: "Hash Set / Sort + Binary Search Target Difference", slug: "fair_candy_swap" },
    { id: 902, name: "Numbers At Most N Given Digit Set", difficulty: "Hard", pattern: "Digit DP / Binary Search Combinations", slug: "numbers_at_most_n_given_digit_set" },
    { id: 911, name: "Online Election", difficulty: "Medium", pattern: "Precomputed Leader List + Binary Search Timestamp", slug: "online_election" },
    { id: 981, name: "Time Based Key-Value Store", difficulty: "Medium", pattern: "Hash Map of Sorted Timestamps + Binary Search", slug: "time_based_key_value_store" },
    { id: 1004, name: "Max Consecutive Ones III", difficulty: "Medium", pattern: "Sliding Window / Binary Search Prefix Sum Zeroes", slug: "max_consecutive_ones_iii" },
    { id: 1011, name: "Capacity To Ship Packages Within D Days", difficulty: "Medium", pattern: "Binary Search on Capacity Space [max_weight, sum_weight]", slug: "capacity_to_ship_packages_within_d_days" },
    { id: 1027, name: "Longest Arithmetic Subsequence", difficulty: "Medium", pattern: "Dynamic Programming + Difference Index Lookup", slug: "longest_arithmetic_subsequence" },
    { id: 1044, name: "Longest Duplicate Substring", difficulty: "Hard", pattern: "Rabin-Karp Rolling Hash + Binary Search Length", slug: "longest_duplicate_substring" },
    { id: 1055, name: "Shortest Way to Form String", difficulty: "Medium", pattern: "Character Indices Map + Binary Search Position", slug: "shortest_way_to_form_string" },
    { id: 1060, name: "Missing Element in Sorted Array", difficulty: "Medium", pattern: "Binary Search Missing Count Formula", slug: "missing_element_in_sorted_array" },
    { id: 1062, name: "Longest Repeating Substring", difficulty: "Medium", pattern: "Binary Search Substring Length + Hash Set Search", slug: "longest_repeating_substring" },
    { id: 1064, name: "Fixed Point", difficulty: "Easy", pattern: "Binary Search Value Equals Index (`arr[i] == i`)", slug: "fixed_point" },
    { id: 1095, name: "Find in Mountain Array", difficulty: "Hard", pattern: "Triple Binary Search (Peak Search + 2 Half Searches)", slug: "find_in_mountain_array" },
    { id: 1099, name: "Two Sum Less Than K", difficulty: "Easy", pattern: "Sort + Two Pointers / Binary Search Range Match", slug: "two_sum_less_than_k" },
    { id: 1102, name: "Path With Maximum Minimum Value", difficulty: "Medium", pattern: "Binary Search Answer Grid Reachability + BFS/DFS", slug: "path_with_maximum_minimum_value" },
    { id: 1146, name: "Snapshot Array", difficulty: "Medium", pattern: "Array of Sorted Snapshots + Binary Search Upper Bound", slug: "snapshot_array" },
    { id: 1150, name: "Check If a Number Is Majority Element in a Sorted Array", difficulty: "Easy", pattern: "Binary Search First Occurrence + Target Index Shift Check", slug: "check_if_a_number_is_majority_element_in_a_sorted_array" },
    { id: 1157, name: "Online Majority Element In Subarray", difficulty: "Hard", pattern: "Randomized Sampling / Segment Tree + Binary Search Index Bounds", slug: "online_majority_element_in_subarray" },
    { id: 1170, name: "Compare Strings by Frequency of the Smallest Character", difficulty: "Medium", pattern: "Frequency Calculation + Binary Search / Prefix Sum", slug: "compare_strings_by_frequency_of_the_smallest_character" },
    { id: 1182, name: "Shortest Distance to Target Color", difficulty: "Medium", pattern: "Color Index Maps + Binary Search Closest Position", slug: "shortest_distance_to_target_color" },
    { id: 1187, name: "Make Array Strictly Increasing", difficulty: "Hard", pattern: "Dynamic Programming + Binary Search Next Larger Element", slug: "make_array_strictly_increasing" },
    { id: 1198, name: "Find Smallest Common Element in All Rows", difficulty: "Medium", pattern: "Binary Search Rows / Row Frequency Counters", slug: "find_smallest_common_element_in_all_rows" },
    { id: 1201, name: "Ugly Number III", difficulty: "Medium", pattern: "Binary Search on Value Range + Inclusion-Exclusion LCM", slug: "ugly_number_iii" },
    { id: 1208, name: "Get Equal Substrings Within Budget", difficulty: "Medium", pattern: "Sliding Window / Prefix Cost Array + Binary Search", slug: "get_equal_substrings_within_budget" },
    { id: 1213, name: "Intersection of Three Sorted Arrays", difficulty: "Easy", pattern: "Three Pointers / Binary Search Elements across Rows", slug: "intersection_of_three_sorted_arrays" },
    { id: 1214, name: "Two Sum BSTs", difficulty: "Medium", pattern: "Inorder BST Traversal + Binary Search Complement", slug: "two_sum_bsts" }
];

// Rich Markdown Template Generator function for Binary Search
function generateBinarySearchMarkdown(p) {
    return `# ${p.id}. ${p.name}

## Problem Description

Solve standard LeetCode problem **${p.id}: ${p.name}** (${p.difficulty}).

Analyze the problem space and formulate an optimal **Binary Search** approach by defining a search range, monotonic conditions, and mid-point predicates to reduce search space logarithmically.

---

## Pattern

**${p.pattern}**

---

## Search Space & Monotonicity Analysis

To apply Binary Search effectively, establish the monotonicity property and search bounds:

### 1. Search Space Range Definition
Identify the upper and lower boundaries for the search pointers:
- **Low Boundary (\`low\` / \`left\`):** The minimum possible valid index or feasible solution parameter.
- **High Boundary (\`high\` / \`right\`):** The maximum possible valid index or feasible solution parameter.

### 2. Monotonic Predicate Function
Define a decision function $P(\\text{mid})$ that returns a boolean condition based on domain monotonicity:
$$P(\\text{mid}) = \\begin{cases} \\text{true} & \\text{if condition holds for } \\text{mid} \\\\ \\text{false} & \\text{otherwise} \\end{cases}$$

Monotonic property guarantees:
$$\\text{If } P(k) = \\text{true}, \\text{ then } P(x) = \\text{true} \\quad \\forall x > k \\quad (\\text{or } \\forall x < k)$$

---

## Brute Force Approach

The brute force strategy sequentially scans every element in the array or tests every possible integer answer within the range.

1. Iterate linearly through indices from $0$ to $n - 1$ or test candidate values sequentially.
2. Verify constraints at each step using linear evaluation.

### Brute Force Complexity
- **Time Complexity:** $O(n)$ for linear scan, or $O(n \\cdot m)$ for value range verification.
- **Space Complexity:** $O(1)$ auxiliary memory space.

---

## Optimized Approach

The optimal Binary Search algorithm repeatedly cuts the candidate search interval in half based on the outcome of evaluating the middle element.

### Algorithmic Execution Steps:
1. **Initialize Search Bounds:** Set \`low\` and \`high\` to cover the complete range.
2. **Calculate Safe Midpoint:** Avoid overflow by computing:
   $$\\text{mid} = \\text{low} + \\left\\lfloor \\frac{\\text{high} - \\text{low}}{2} \\right\\rfloor$$
3. **Evaluate Predicate & Shrink Search Space:**
   - If $P(\\text{mid})$ satisfies the condition, record \`mid\` as candidate answer and update boundaries to search for a better boundary:
     $$\\text{high} = \\text{mid} - 1 \\quad \\text{or} \\quad \\text{low} = \\text{mid}$$
   - Otherwise, eliminate the unfeasible half:
     $$\\text{low} = \\text{mid} + 1 \\quad \\text{or} \\quad \\text{high} = \\text{mid} - 1$$
4. **Termination & Output:** Return the converged \`low\` pointer or tracked optimal value.

---

## Hint 1

Can you rephrase the problem as a decision question: *"Is it possible to achieve target condition $X$ with parameter $\\text{mid}$?"*

---

## Hint 2

Does the target search space possess a monotonic property where true/false values split cleanly at a single boundary point?

---

## Common Mistakes & Edge Cases

- **Integer Overflow on Midpoint:** Computing \`mid = (low + high) / 2\` in languages like C++/Java instead of \`low + (high - low) / 2\`.
- **Infinite Loop Traps:** Incorrect boundary updates when setting \`low = mid\` or \`high = mid\` without proper integer division rounding.
- **Off-by-One Range Errors:** Mismanaging inclusive vs. exclusive search boundaries (\`low <= high\` vs. \`low < high\`).
- **Duplicates Handling:** Failing to shrink boundaries when boundary elements match (e.g., \`arr[low] == arr[mid] == arr[high]\`).

---

## Complexity Analysis

- **Time Complexity:** $O(\\log n)$ or $O(k \\log(\\text{range}))$, where $n$ is array length and $k$ is cost of checking feasibility at each step.
- **Space Complexity:** $O(1)$ auxiliary space for iterative search, or $O(\\log n)$ for recursive call stack.
`;
}

// Write files out
let count = 0;
binarySearchProblems.forEach(p => {
    const filePath = path.join(outputDir, `${p.slug}.md`);
    fs.writeFileSync(filePath, generateBinarySearchMarkdown(p), 'utf-8');
    count++;
});

console.log(`Successfully generated ${count} detailed Binary Search Markdown files in: ${outputDir}`);