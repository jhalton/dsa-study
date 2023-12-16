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
