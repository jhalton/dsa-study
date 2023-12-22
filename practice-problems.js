//--------------- 12.15.23-------------------------
const greet = (s) => {
  // todo
  return `hey ${s}`;
};

//-------------------------------------------------

const maxValue = (nums) => {
  // todo
  let max = -Infinity;
  nums.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
};

//-------------------------------------------------

const isPrime = (n) => {
  // todo
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

//---------------------------12.19.23--------------------------

/*
-Utilize 2 pointers to help keep track of numbers and letters.
-There is nothing explicity limiting the number of digits before a letter character
*/
const uncompress = (s) => {
  const nums = "0123456789";
  // let res = "";
  let res = [];
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (nums.includes(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        // res += s[j];
        res.push(s[j]);
      }
      j++;
      i = j;
    }
  }
  // return res;
  return res.join("");
};

//-----------------------------------------------

//In the walk-through, Alvin uses pointers again. I went with a for loop because
//it makes more sense for me to keep track of fewer pointers. But pointers are good
//to use. Maybe I will come back through later and try it a different way.
const compress = (s) => {
  const res = [];
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count > 1) res.push(count);
      res.push(s[i]);
      count = 1;
    }
  }
  return res.join("");
};

//------------------------------12.20.23--------------------------

//This was my solution. I split the strings into arrays, sort them, then join them.
//If the two strings are equal to each other, return true. Else, return false.
const anagrams = (s1, s2) => {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

//Alvin's solution creates a hash. You check to see if the character is already in the count.
//Then when you go through the second string, we are looking to see if all of the characters
//are in the first string. If at the end, we have any leftover nums in the count
//or we have tried to decrement to less than 0, we return false. If we never meet a false
//condition, we return true
const anagramsAlt = (s1, s2) => {
  const count = {};

  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  for (let char of s2) {
    if (char in count) {
      count[char] -= 1;
    } else {
      return false;
    }
  }
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  return true;
};

//---------------------------------

//I chose to create a hash, and a variable to store the highest frequency.
//I iterated through the string to build my hash. Then found the highest count.
//Last, I returned the first key to meet the highest count using built-in find().
const mostFrequentChar = (s) => {
  const count = {};
  let highestCount = 0;

  for (let char of s) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  highestCount = Math.max(...Object.values(count));
  return Object.keys(count).find((key) => count[key] === highestCount);
};

//Structy solution starts off similar to mine. However, he does not use built in functions.
//a best variable is used to store the character with the highest frequency. He returns
//the 'best' character at the end of the function.
const mostFrequentCharAlt = (s) => {
  const count = {};

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  let best = null;
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }
  return best;
};

//--------------------12.21.23-----------------------

//This is the simplest way I know how to solve this problem. The downside is that it's
//O(n²) time which isn't ideal
const pairSum = (numbers, targetSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++)
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
  }
  return;
};

//Here we want a hash! It will allow us to do this in linear time. Here we are checking
//to see if there exists another number in the hash that will make up the targetSum.
//There is guaranteed to be a pair and when it's found, we return and exit.
const pairSumLinear = (numbers, targetSum) => {
  const previous = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let complement = targetSum - num;

    if (complement in previous) {
      return [i, previous[complement]];
    }

    previous[num] = i;
  }
};
