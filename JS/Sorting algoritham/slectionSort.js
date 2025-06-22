function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr1 = [64, 25, 12, 22, 11];
console.log(arr1);
selectionSort(arr1);
console.log(arr1);
let arr2 = [5, 1, 9, 3, 7];
console.log(arr2);
selectionSort(arr2);
console.log(arr2);
let arr3 = [45, 67, 23, 89, 12, 56];
console.log(arr3);
selectionSort(arr3);
console.log(arr3);
