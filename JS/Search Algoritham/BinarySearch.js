function BinorySearch(arr, target) {
  left = 0;
  right = arr.length - 1;
  while (left <= right) {
    x = left + (right - left) / 2;
    mid = Math.floor(x);
    console.log(mid);
    if (arr[mid] === target) {
      return `target found at ${mid}`;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else right = mid - 1;
  }
}

//console.log(BinorySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(BinorySearch([0, 1, 2, 3, 4, 5, 6, 77, 88], 77));
