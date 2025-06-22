function lenearSearch(a, value) {
  for (i = 0; i < a.length; i++) {
    if (a[i] === value) {
      return `give value ${value} found at ${i} index`;
    }
  }
  return "value not fond";
}

console.log(lenearSearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 9));
console.log(lenearSearch([9, 5, 44, 85, 2, 3, 8, 6, 5, 6], 44));
