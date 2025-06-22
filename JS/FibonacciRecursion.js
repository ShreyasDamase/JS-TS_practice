function fibonacci(num) {
  //BaseCase
  if (num < 2) return num;

  //recccursive call
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6));
