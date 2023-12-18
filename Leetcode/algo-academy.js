//----------------12.18.23---------------------

//Use a stack to determine whether parentheses are positioned in the correct spots.
//We're using a hash to determine whether the character is matched with its corresponding
//parenthesis. If not, return false.
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];

  const closeToOpen = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!closeToOpen[char]) {
      stack.push(char);
    } else if (!stack.length || stack[stack.length - 1] !== closeToOpen[char]) {
      return false;
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
};
//-----------------------------

var merge = function (intervals) {
  intervals.sort((a, b) => a - b);
};
