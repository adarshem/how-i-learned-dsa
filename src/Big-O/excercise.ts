// What is the time complexity of the following function?

function printNumbers(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function printPairs(arr: Array<any>) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

function processArray(arr: Array<any>) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}

function countDown(n: number) {
  if (n <= 0) return;
  console.log(n);
  countDown(n - 1);
}

function processMatrix(matrix: Array<Array<any>>) {
  for (let i = 0; i < matrix.length; i++) {
    // Outer loop → O(n)
    for (let j = 0; j < matrix[i].length; j++) {
      // Inner loop → O(m)
      console.log(matrix[i][j]);
    }
  }
}

function binarySearch(arr: Array<number>, target: number) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function complexFunction(arr: Array<number>, n: number) {
  for (let i = 0; i < arr.length; i++) {
    // Loop → O(n)
    console.log(arr[i]);
  }

  if (n > 1) {
    complexFunction(arr, n - 1); // Recursion → ?
  }
}

// O(n) -> Linear Time Complexity because the number of operations is directly proportional to the input size
printNumbers(10);

// O(n^2) -> Quadratic Time Complexity because the number of operations is proportional to the square of the input size
printPairs([1, 2, 3, 4, 5]);

// O(n) -> Linear Time Complexity because the number of operations is directly proportional to the input size
// The time complexity is O(2n) because the function has two loops that are not nested
// but we drop the constant(2 from 2n) and the time complexity is O(n)
processArray([1, 2, 3, 4, 5]);

// O(n) -> Linear Time Complexity because of recursive calls that are directly proportional to the input size
countDown(10);

// The outer loop runs n times (number of rows in the matrix).
// The inner loop runs m times (number of columns in each row).
// So the time complexity is O(n * m).
// If it’s a square matrix where n = m, it simplifies to O(n²). Otherwise, it’s O(n * m).
processMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

// Binary search repeatedly halves the input size. This logarithmic behavior gives a time complexity of O(log n).
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5); // O(log n) -> Logarithmic Time Complexity

// The loop runs O(n) times for each recursive call.
// The recursion depth is n, so the function calls itself n times.
// Overall, n (loop) × n (recursion depth) = O(n²).
complexFunction([1, 2, 3, 4, 5], 5);
