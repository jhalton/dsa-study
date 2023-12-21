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
