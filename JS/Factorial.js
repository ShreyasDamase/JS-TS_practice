function factorial(num) {
  if (num == 0) {
    return 1;
  }

  return num * factorial(num - 1);
}
console.log(factorial(5));
/*
 *Time Complexity: O(n)
 *Space Complexity: O(n)
 */
