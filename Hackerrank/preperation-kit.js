//-----------------12.15.23------------------------

//This one frustrated me because I tried to get all fancy with objects
//but when the value was 0, it wouldn't translate when I tried to utilize
//Object.values(counts). So I reverted back to a an inefficient res that I knew would work
function matchingStrings(strings, queries) {
  const res = [];

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (strings[j] === query) {
        count += 1;
      }
    }
    res.push(count);
  }
  return res;
}

//---------------------12.16.23---------------------

//My thought process was to create an object to hold the keys and count of how many times
//that integer appears.
//Then, access that key by turning that object into an array of keys and using
//the built-in find() method to find the find the key whose value is equal to 1

function lonelyinteger(a) {
  const intObj = {};

  a.forEach((int) => {
    if (int in intObj) {
      intObj[int] += 1;
    } else {
      intObj[int] = 1;
    }
  });
  return Object.keys(intObj).find((key) => intObj[key] === 1);
}

//-----------------

//I started off with a letters array to keep track of whether a character exists in the
//letters already. I start the array with a " " first and count up to 27. I utilized the
//built-in toLowerCase() to ignore case in the letters.
//Some edge cases I would like to account for that would improve this are: additional
//characters that could be added to the sentence. There is nothing that specifically
//states that all characters will be letters. There could also be punctuation or numbers,
//or other non-letter characters in the sentence. These are things I would like to approach
//The next time I run through these practices.
//Something to consider, also, moving forward when using a for loop is where I choose to put
//the return. I want to exit the loop as soon as the condition is met rather than return to it
//and then check to see if the condition has been met.
function pangrams(s) {
  let letters = [" "];

  for (let i = 0; i < s.length; i++) {
    if (!letters.includes(s[i].toLowerCase())) {
      letters.push(s[i].toLowerCase());
      if (letters.length === 27) return "pangram";
    }
  }
  return "not pangram";
}
