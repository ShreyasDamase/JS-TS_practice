function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    elementToInsert = arr[i];
    j = i - 1;
    while (j >= 0 && elementToInsert < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = elementToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
console.log(arr);
InsertionSort(arr);
console.log(arr);
