function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivote = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivote) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivote, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(arr);

console.log(quickSort(arr));
