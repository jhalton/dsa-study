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
