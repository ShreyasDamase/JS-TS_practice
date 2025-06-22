function fibonacci(num) {
  arr = [0, 1];
  for (i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}
console.log(fibonacci(5));
console.log(fibonacci(2));
console.log(fibonacci(15));
