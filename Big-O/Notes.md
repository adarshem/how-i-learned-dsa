
### What is Big O Notation?

`Big O` notation is a way to describe how efficient a program is. It measures the time or space your code takes as the input grows. 
It’s not about the actual time or memory but about how the usage scales.

#### Think of it like this:
	1.	Small input: Program runs fast.
	2.	Large input: Program might slow down. Big O tells you how much slower it will get.

#### How Should You Understand It?
	1.	Focus on the input size (n): Big O describes how the program’s performance changes as n grows.
	2.	Ignore constants:Big O doesn’t care about the exact time (like 2 seconds or 5 seconds). It cares about the growth rate.
	3.	Different types of Big O:
        • O(1): Constant time (fastest). Doesn’t matter how big n is; it takes the same time.
        • O(log n): Logarithmic time. Gets slower, but not by much (e.g., binary search).
        • O(n): Linear time. Gets slower proportional to n (e.g., a single loop).
        • O(n²): Quadratic time. Slows down a lot as n grows (e.g., nested loops).
        • O(2ⁿ): Exponential time. Grows super fast (e.g., recursive Fibonacci).

#### How to Calculate Big O of a Program?
	1.	Look at the loops:
        • A single loop that runs n times → O(n).
        • A nested loop (loop inside a loop) → O(n²).
	2.	Look at recursion:
	    • Each recursive call adds complexity. If it halves the input each time → O(log n).
	3.	Drop constants and less significant terms:
        • Example: 5n + 10 simplifies to O(n).
        • Example: n² + n simplifies to O(n²) (since n² grows faster).

Example:
```
function printItems(arr) {
  for (let i = 0; i < arr.length; i++) { // O(n)
    console.log(arr[i]);
  }
}
```

	•	There’s one loop, so the time complexity is O(n).

Another example:

```
function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {     // O(n)
    for (let j = 0; j < arr.length; j++) {   // O(n)
      console.log(arr[i], arr[j]);
    }
  }
}
```

	•	Two nested loops → O(n²).

#### Quick Tips to Practice:
	•	Analyze code step by step.
	•	Focus on the number of loops or recursive calls.
	•	Use smaller inputs to understand how the time or memory changes as input grows.
