//----------------------12.17.23------------------------

//Poor time complexity. Would like to explore to see what else I could do to
//do this in better than O(n²) time
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};
