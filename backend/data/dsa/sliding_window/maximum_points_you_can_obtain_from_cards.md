# Maximum Points You Can Obtain from Cards

Problem ID: maximum_points_you_can_obtain_from_cards

Title: Maximum Points You Can Obtain from Cards

Difficulty: Medium

Topic: sliding_window

Pattern: **Fixed Sliding Window / Complement**

---

## Problem Identity

This document is specifically about:

**Maximum Points You Can Obtain from Cards**

This knowledge chunk belongs to:

**sliding_window**

Do not confuse this problem with another problem that uses a similar pattern.

---

## Problem

Solve the standard **Maximum Points You Can Obtain from Cards** problem.

The primary problem-solving pattern is:

**Fixed Sliding Window / Complement**

---

## Key Idea

Instead of choosing K cards from the ends directly, find the minimum-sum subarray of length N-K that must remain in the middle. Subtract that minimum sum from the total.

### Core Invariant

The fixed-size window represents the cards that are not selected.

The invariant explains why binary search can eliminate part of the search space without losing the correct answer.

---

## Brute Force Approach

Try every possible combination of taking cards from the left and right ends.

### Brute Force Complexity

- **Time Complexity:** O(K)
- **Space Complexity:** O(1) auxiliary space unless otherwise required by the implementation.

---

## Optimized Approach

### Algorithm Steps

1. Calculate the total sum of all cards.
2. The number of cards left in the middle is N - K.
3. Find the minimum-sum contiguous subarray of length N - K.
4. Subtract that minimum sum from the total sum.
5. The remaining sum is the maximum score obtainable.

### Why This Works

The optimized solution works because it exploits the structure provided by:

**Fixed Sliding Window / Complement**

The search space is reduced systematically while preserving the correct answer inside the remaining range.

---

## Hints

### Hint 1

If you take K cards, how many cards remain?

### Hint 2

Can the unselected cards form one contiguous middle segment?

---

## Common Mistakes

- Trying all left/right combinations unnecessarily.
- Using the maximum window instead of the minimum window.
- Using the wrong window length N - K.
- Forgetting to handle K = N.

---

## Edge Cases

- K equals 0.
- K equals N.
- K equals 1.
- All card values are equal.
- Single-card array.

---

## Complexity Analysis

### Time Complexity

**O(N)**

### Space Complexity

**O(1)**

---

## Interview Explanation

A concise interview explanation for **Maximum Points You Can Obtain from Cards** is:

> Instead of choosing K cards from the ends directly, find the minimum-sum subarray of length N-K that must remain in the middle. Subtract that minimum sum from the total.

When explaining this problem in an interview, focus on:

1. Why binary search is applicable.
2. What invariant is maintained.
3. How the search boundaries change.
4. Why half of the search space can be eliminated.
5. The final time and space complexity.

---

## Retrieval Keywords

- maximum points
- cards
- fixed window
- complement window
- minimum sum subarray

---

## Problem Retrieval Identity

Problem Name: Maximum Points You Can Obtain from Cards

Problem ID: maximum_points_you_can_obtain_from_cards

Topic: sliding_window

Pattern: Fixed Sliding Window / Complement

Difficulty: Medium

Primary Retrieval Entity:

**Maximum Points You Can Obtain from Cards**

This document should be preferred when a user explicitly asks about:

- maximum points
- cards
- fixed window
- complement window
- minimum sum subarray

Related concepts:

- maximum points
- cards
- fixed window
- complement window
- minimum sum subarray
