# Arrays in JavaScript

Arrays are one of the most commonly used data structures in JavaScript. They are used to store multiple values in a single variable and provide various methods to manipulate and access the data.

## Table of Contents
- [What is an Array?](#what-is-an-array)
- [Creating an Array](#creating-an-array)
- [Accessing Elements](#accessing-elements)
- [Common Array Methods](#common-array-methods)
- [Examples](#examples)
- [Conclusion](#conclusion)

---

## What is an Array?

An array is a collection of elements, where each element is identified by an index. Arrays in JavaScript are dynamic, meaning their size can change, and they can hold elements of different types.

---

## Creating an Array

You can create an array in JavaScript using either the `Array` constructor or array literals.

```javascript
// Using array literal
const fruits = ['Apple', 'Banana', 'Cherry'];

// Using Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
```

---

## Accessing Elements

Array elements can be accessed using their index, starting from `0`.

```javascript
const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry
```

---

## Common Array Methods

JavaScript provides several built-in methods to work with arrays:

1. **`push()`** - Adds an element to the end of the array.
2. **`pop()`** - Removes the last element from the array.
3. **`shift()`** - Removes the first element from the array.
4. **`unshift()`** - Adds an element to the beginning of the array.
5. **`slice()`** - Returns a shallow copy of a portion of an array.
6. **`splice()`** - Adds or removes elements from an array.
7. **`forEach()`** - Executes a function for each array element.
8. **`map()`** - Creates a new array by applying a function to each element.
9. **`filter()`** - Creates a new array with elements that pass a test.
10. **`reduce()`** - Reduces the array to a single value.

---

## Examples

### Example 1: Adding and Removing Elements
```javascript
const numbers = [1, 2, 3];

// Add elements
numbers.push(4); // [1, 2, 3, 4]
numbers.unshift(0); // [0, 1, 2, 3, 4]

// Remove elements
numbers.pop(); // [0, 1, 2, 3]
numbers.shift(); // [1, 2, 3]
```

### Example 2: Iterating Over an Array
```javascript
const fruits = ['Apple', 'Banana', 'Cherry'];

fruits.forEach((fruit) => {
    console.log(fruit);
});
// Output:
// Apple
// Banana
// Cherry
```

### Example 3: Transforming an Array
```javascript
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map((num) => num * num);
console.log(squared); // [1, 4, 9, 16, 25]
```

### Example 4: Filtering an Array
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

---

## Conclusion

Arrays are a fundamental data structure in JavaScript, offering flexibility and powerful methods for data manipulation. By mastering arrays, you can efficiently handle and process collections of data in your applications.

For more details, refer to the [MDN Web Docs on Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).