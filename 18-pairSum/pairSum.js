function pairSum(nums, target) {
  // Insert code here;
  
  if (nums.length <= 1) {
    throw new Error("The length of the array must be greater than 1.");
  }

  const arr = nums.slice();
  arr.sort();

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target)
      return true;
    else if (sum < target)
      left++;
    else
      right--;
  }

  return false;

}

// Do not edit this line;
module.exports = pairSum;