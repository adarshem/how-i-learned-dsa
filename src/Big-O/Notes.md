
### What is Big O Notation?

`Big O` notation is a way to describe how efficient a program is. It measures the time or space your code takes as the input grows. 
It’s not about the actual time or memory but about how the usage scales.

#### Think of it like this:
1. Small input: Program runs fast.
2. Large input: Program might slow down. Big O tells you how much slower it will get.

#### How Should You Understand It?
1. Focus on the input size (n): Big O describes how the program’s performance changes as n grows.
2. Ignore constants:Big O doesn’t care about the exact time (like 2 seconds or 5 seconds). It cares about the 3.growth rate.
3. Different types of Big O:
    1. O(1): Constant time (fastest). Doesn’t matter how big n is; it takes the same time.
    2. O(log n): Logarithmic time. Gets slower, but not by much (e.g., binary search).
    3. O(n): Linear time. Gets slower proportional to n (e.g., a single loop).
    4. O(n²): Quadratic time. Slows down a lot as n grows (e.g., nested loops).
    5. O(2ⁿ): Exponential time. Grows super fast (e.g., recursive Fibonacci).

#### How to Calculate Big O of a Program?
1. Look at the loops:
    1. A single loop that runs n times → O(n).
    2. A nested loop (loop inside a loop) → O(n²).
2. Look at recursion:
	  1. Each recursive call adds complexity. If it halves the input each time → O(log n).
3. Drop constants and less significant terms:
    1. Example: 5n + 10 simplifies to O(n).
    2. Example: n² + n simplifies to O(n²) (since n² grows faster).

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

### Space Complexity in Big O Notation:

Just like `time complexity`, we use `Big O` notation to express `space complexity`.  We're interested in the `asymptotic growth` of the memory used by the algorithm.

#### What Counts as Space?

- `Variables`: The space used to store variables declared in your code.
- `Data Structures`: The space used to store data structures like arrays, lists, trees, etc.
- `Function Call Stack`: Space used for recursive calls (each call adds a frame to the stack).
- `Input Size`: In some cases, the input itself takes up space, and we might consider that in space complexity. However, often, we analyze the auxiliary space used by the algorithm in addition to the input.

#### How to Determine Space Complexity:

- Identify the variables and data structures: Look at what variables and data structures your algorithm creates and how their size relates to the input size 'n'.

- Consider the space used by each: Determine how the space used by these variables and data structures scales with 'n'.

- Drop constants and non-dominant terms: Just like with time complexity, we only care about the highest order term.##

#### Examples:

1. `O(1)` - Constant Space:

```python
def constant_space(n):
    result = 0  # One integer variable
    for i in range(n):
        result += i
    return result
```
The space used by `result` and `i` is constant.  It doesn't depend on the input `n`.  Therefore, the space complexity is `O(1)`.

2. `O(n)` - Linear Space:
```python
def linear_space(n):
    arr = [0] * n  # Creating an array of size 'n'
    for i in range(n):
        arr[i] = i * 2
    return arr
```
The space used by the array `arr` grows linearly with the input `n`.  Therefore, the space complexity is `O(n)`.

3. `O(n^2)` - Quadratic Space:
```python
def quadratic_space(n):
    matrix = [[0] * n for _ in range(n)]  # Creating a 2D array (n x n)
    for i in range(n):
        for j in range(n):
            matrix[i][j] = i + j
    return matrix
```
The space used by the 2D array `matrix` grows quadratically with the input `n` (n * n).  Therefore, the space complexity is `O(n^2)`.

4. `O(log n)` - Logarithmic Space (Often due to recursion):
```python
def logarithmic_space(n):
    if n <= 1:
        return 1
    else:
        return logarithmic_space(n // 2) + 1  # Integer division
```
Although this function appears to be `O(n)` at first glance, the space complexity is `O(log n)` due to the function call stack. Each `recursive` call adds a frame to the stack, and the maximum depth of the stack is proportional to `log n`.

Important Considerations:
- Auxiliary Space:  We often focus on auxiliary space complexity, which is the space used by the algorithm excluding the input itself.  Sometimes, the input is considered part of the problem and not counted towards auxiliary space.

- In-place Algorithms:  Algorithms that use a constant amount of extra space (O(1)) are called in-place algorithms.


### Big O Notation Complexity Table

Big O notation describes the performance of an algorithm as input size grows. Below is a reference table outlining common time complexities, their types, and examples.

| Big O Notation | Complexity Type     | Example                        |
|---------------|---------------------|--------------------------------|
| **O(1)**      | Constant Time       | Accessing an array element `arr[0]` |
| **O(log n)**  | Logarithmic Time    | Binary Search                 |
| **O(n)**      | Linear Time         | Iterating through an array    |
| **O(n log n)**| Log-Linear Time     | Merge Sort, Quick Sort        |
| **O(n²)**     | Quadratic Time      | Nested loops (Bubble Sort)    |
| **O(2ⁿ)**     | Exponential Time    | Recursion in Fibonacci        |
| **O(n!)**     | Factorial Time      | Brute-force permutations      |

## Understanding Time Complexities

- **O(1):** The algorithm runs in constant time, regardless of input size.
- **O(log n):** The algorithm’s execution time increases logarithmically, often seen in divide-and-conquer approaches like Binary Search.
- **O(n):** The execution time scales linearly with input size, as in iterating over an array.
- **O(n log n):** Common in efficient sorting algorithms like Merge Sort and Quick Sort.
- **O(n²):** Algorithms with nested loops, such as Bubble Sort, exhibit quadratic time complexity.
- **O(2ⁿ):** Typically found in recursive solutions that double the number of calls at each step.
- **O(n!):** The worst-case scenario for brute-force approaches, seen in problems like the Traveling Salesman Problem (TSP).


#### Quick Tips to Practice:
	•	Analyze code step by step.
	•	Focus on the number of loops or recursive calls.
	•	Use smaller inputs to understand how the time or memory changes as input grows.


Understanding these complexities is crucial for optimizing algorithms and making efficient design choices in software development.