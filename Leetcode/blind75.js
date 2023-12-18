//----------------------12.17.23------------------------

//1.
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

//----------------------

var lengthOfLongestSubstring = function (s) {
  let usedChar = "";
  let longest = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (!usedChar.includes(s[i])) {
      usedChar += s[i];
      count++;
      console.log("In for loop", usedChar);
      if (count > longest) {
        longest = count;
      }
    } else {
      usedChar = usedChar.slice(i + 1);
      usedChar += s[i];
      count = usedChar.length;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring("dvdf"));
