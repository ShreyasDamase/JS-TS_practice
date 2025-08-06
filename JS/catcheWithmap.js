const memoize = (func) => {
  const catcheMap = new Map();
  return function (...arg) {
    const key = JSON.stringify(arg);
    if (catcheMap.has(key)) {
      return catcheMap.get(key);
    }
    const result = func.apply(this, arg);
    catcheMap.set(key, result);

    return result;
  };
};

const square = (x) => {
  console.log("claculating");
  result = x * x;
  return result;
};
const memoizeFunctioncaller = memoize(square);
const result1 = memoizeFunctioncaller(4);
console.log(result1);
const result2 = memoizeFunctioncaller(4);
console.log(result2);
