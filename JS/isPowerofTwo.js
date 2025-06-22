function isPowerOfTwo(num) {
  if (num == 0) {
    return true;
  }
  if (num == 1) {
    return true;
  }
  if (num % 2 != 0) {
    return false;
  }

  return isPowerOfTwo(num / 2);
}
console.log(isPowerOfTwo(3));

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));

//return num &(num-1) ===0   //this also work it is bitwize logic
