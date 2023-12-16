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
