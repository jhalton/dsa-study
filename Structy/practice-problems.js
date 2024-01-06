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

//-----------------------------------

//I based my approach off of the last problem. The only difference is needing
//to divide rather than subtract. This runs in O(n) time and O(n) space
const pairProduct = (numbers, targetProduct) => {
  const previous = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let mult = targetProduct / num;

    if (mult in previous) {
      return [i, previous[mult]];
    }
    previous[num] = i;
  }
};

//------------------------------12.22.23-------------------------------

//Don't love this solution because the time complexity sucks at the end.
const intersection = (a, b) => {
  // todo
  const nums = {};

  for (let i = 0; i < a.length; i++) {
    let num = a[i];
    if (num in nums) {
      nums[num] += 1;
    } else {
      nums[num] = 1;
    }
  }
  for (let j = 0; j < b.length; j++) {
    let num = b[j];
    if (num in nums) {
      nums[num] += 1;
    } else {
      nums[num] = 1;
    }
  }
  return Object.keys(nums)
    .filter((key) => nums[key] > 1)
    .map(Number);
};

//I thought about doing a set before but I felt like I should be using a hash
const intersectionEfficient = (a, b) => {
  const res = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      res.push(item);
    }
  }
  return res;
};

//------------------------12.23.23--------------------------

//Start with pointers for i and j, one at the beginning and one at the end.
//If i === j, then we have reached the end of our sort. Otherwise, if
// nums[i] is a five and nums[j] isn't, swap the two values.
const fiveSort = (nums) => {
  i = 0;
  j = nums.length - 1;

  while (i <= j) {
    if (nums[j] !== 5 && nums[i] === 5) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
    } else if (nums[i] !== 5) {
      i++;
    } else if (nums[j] === 5) {
      j--;
    }
  }
  return nums;
};

//The Structy solution is about the same as mine, just structured a little bit differently

//--------------------------12.28.23-------------------------------

//Linked Lists
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

//      A -> B -> C -> D -> NULL
//      cur

//ITERATIVE
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

//RECURSIVE
const printLinkedList = (head) => {
  if (head === null) return;

  console.log(head.val);
  printLinkedList(head.next);
};

//--------------------------01.06.24--------------------------------------

//Alvin approaches these types of problems often by focusing first on the traversal
//and then adding in the thing that needs to be done.
//Your logic should pretty much always be focused on your current node. Stay very present.

//iterative
const linkedListValues = (head) => {
  const resArr = [];
  let curr = head;

  while (curr !== null) {
    resArr.push(curr.val);
    curr = curr.next;
  }
  return resArr;
};

//Alvin breaks this down into two functions. Split this up so that the recursion doesn't have to create
//multiple arrays. It's more efficient so we don't run into an n² run time.
//recursive

const linkedListValuesRecursive = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

//-------------------------------------------------------
// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

//iterative
const sumList = (head) => {
  let sum = 0;
  let curr = head;
  while (curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }
  return sum;
};

//recursive
const sumListRecursive = (head) => {
  //Start with a meaningfull base case. If there are no nodes, we should return 0
  if (head === null) return 0;

  //If there IS a node, we want to add our head to the value of the sum of our remaining list
  return head.val + sumList(head.next);
};

//--------------------------------------------------

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

//iterative
const linkedListFind = (head, target) => {
  let curr = head;
  while (curr !== null) {
    if (curr.val === target) return true;
    curr = curr.next;
  }
  return false;
};

//recursive
const linkedListFindRecursive = (head, target) => {
  if (head === null) return false;

  if (head.val === target) return true;

  return linkedListFindRecursive(head.next, target);
};

// console.log(linkedListFindRecursive(a, "c"));

//------------------------------------------------------

//iterative
const getNodeValue = (head, index) => {
  let i = 0;
  let curr = head;
  while (curr !== null) {
    if (i === index) return curr.val;
    i++;
    curr = curr.next;
  }
  return null;
};

//We need to reframe the way we look at this when using recursion. Here, we're counting down to where index
//is going to be zero. We are counting down the number of recursive calls needed for the head to meet the
//index. On either side of our list is a null value, so if our index is greater than the number of nodes in our list,
//we're going to run into null, where we will return null. Otherwise, when our index countdown reaches 0,
//we'll return the value of the node there.
//recursive
const getNodeValueRecursive = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValueRecursive(head.next, index - 1);
};
// console.log(getNodeValueRecursive(a, 2));

//---------------------------------------------------------
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const reverseList = (head) => {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseListRecursive(next, head);
};

// console.log(reverseListRecursive(a));
