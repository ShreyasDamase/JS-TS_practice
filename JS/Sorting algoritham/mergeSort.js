function mergeSort() {}

function merge() {}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));

// function sort(arr, ls, le, rs, re) {
//   let temp = [];
//   let left = ls;
//   let right = rs;
//   while (left <= le && right <= re) {
//     if (arr[left] < arr[right]) {
//       temp.push(arr[left++]);
//     } else temp.push(arr[right++]);
//   }
//   while (left <= le) {
//     temp.push(arr[left++]);
//   }
//   while (right <= re) {
//     temp.push(arr[right++]);
//   }

//   for (let i = 0; i < temp.length; i++) {
//     arr[ls + i] = temp[i];
//   }
// }

// function mergeSort(arr, start, end) {
//   if (start >= end) {
//     return;
//   }
//   let mid = Math.floor((start + end) / 2);
//   mergeSort(arr, start, mid);
//   mergeSort(arr, mid + 1, end);
//   sort(arr, start, mid, mid + 1, end);
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(arr);

// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);
