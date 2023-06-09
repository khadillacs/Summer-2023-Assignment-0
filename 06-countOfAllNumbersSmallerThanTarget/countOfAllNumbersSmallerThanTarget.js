function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) 
      counter++;
  }

}

/*
For this exercise (`countOfAllNumbersSmallerThanTarget.js`), you are tasked 
to write out solution code for a function titled 
`countOfAllNumbersSmallerThanTarget(nums, target)`. 
This function will take in two arguments. The first argument will be `nums` 
which is an object that is an array of numbers. The second argument will be 
`target` which is of the `number` data type. The business logic you provide 
should allow for tallying up all of the numbers in `nums` 
that are less than the `target` value and reporting that amount.
*/
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;