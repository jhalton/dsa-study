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
