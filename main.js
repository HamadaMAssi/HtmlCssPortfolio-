function getMissingNumber(numbers) {
  const n = numbers.length;
  // Calculate the actual sum of elements in the input array to use it to find the missing number
  let theActualSum = 0;

  for (const num of numbers) {
    theActualSum += num;
  }

  // Calculate the expected sum of numbers from 0 to n using the formula for the sum of consecutive numbers
  const theExpectedSum = (n * (n + 1)) / 2;
  //now the missing number is the result of theExpectedSum - theActualSum
  return theExpectedSum - theActualSum;
}

// Example 1
console.log(
  "Example :  the number missing from the range [3, 0, 1] is " +
    getMissingNumber([3, 0, 1])
);
// Example 2
console.log(
  "Example :  the number missing from the range [9, 6, 4, 2, 3, 5, 7, 0, 1] is " +
    getMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
);
// Example 3
console.log(
  "Example :  the number missing from the range [0, 1] is " +
    getMissingNumber([0, 1])
);
