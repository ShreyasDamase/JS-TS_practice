function BinorySearch(arr, target) {
  const ans = (function recursionFunc(left, right) {
    mid = Math.floor(left + (right - left) / 2);
    if (left > right) {
      return -1;
    }
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      return recursionFunc(mid + 1, right);
    } else return recursionFunc(right, mid + 1);
  })(0, arr.length - 1);
  return ans;
}
//console.log(BinorySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(BinorySearch([1, 2], 2));
