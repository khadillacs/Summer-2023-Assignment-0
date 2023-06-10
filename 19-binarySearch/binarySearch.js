class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let mid = Math.floor(nums.length / 2);

    if (nums[mid] === target) 
        return true;
    else if (nums.length === 1 && nums[0] !== target) 
        return false;
    else if (nums[mid] > target)
        return this.binarySearch(nums.slice(0, mid), target);
    else 
        return this.binarySearch(nums.slice(mid), target);

    return false;
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;