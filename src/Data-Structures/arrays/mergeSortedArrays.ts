// Time Complexity: (O(n + m)):
//  - Since the loops iterate through all elements of both arrays, the overall time complexity is (O(n + m)).
// Space Complexity: (O(n + m)):
// - The space complexity is (O(n + m)) because the mergedArray contains all elements from both arrays.
export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

/**
 Do not return anything, modify nums1 in-place instead.
 */
function mergeInPlace(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1; // last element in nums1
  let j = n - 1; // last element in nums2
  let k = m + n - 1; // last index in nums1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
