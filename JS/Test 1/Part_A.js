//  TODO: PART A: INDIVIDUAL METHOD
console.log("Q1");
//* Question 1: push() & pop()
const fruits = ["apple", "banana"];
// Add 'orange' and 'grape' to the end
// Then remove the last item
// What's the final array and what was removed?
fruits.push("orange", "grapes");
fruits.pop();

console.log(fruits);

fruits.forEach((i, j) => {
  console.log(j);
  console.log(i);
});
console.log("Q2");

//* Question 2: shift() & unshift()
const numbers = [10, 20, 30];
// Add 5 to the beginning
// Then remove the first item
// What's the result?
const addednum = numbers.unshift(5);
console.log(" Add 5 to the beginning and lenth become ", addednum);
numbers.forEach((i) => console.log(i));
const removedNum = numbers.shift();
console.log("Then remove the first item", removedNum);
numbers.forEach((i) => console.log(i));
console.log("Q3");

//* Question 3: slice()
const colors = ["red", "green", "blue", "yellow", "purple"];
// Extract items from index 1 to 3 (not including 3)
// Original array should remain unchanged

const extractedItems = colors.slice(1, 3); //? Return New Array no changed in orignal array
console.log(extractedItems);
console.log("Q4");

//* Question 4: splice()

var animals = ["cat", "dog", "bird", "fish"];
// Remove 2 items starting from index 1
console.log(animals);
const removedElement = animals.splice(1, 2); //! give array of removed elemnt
console.log(removedElement); //! modifies the orignal array by remving elements wich we splice
console.log(animals);

animals = ["cat", "dog", "bird", "fish"];
// Insert 'rabbit' and 'turtle' at that position
console.log(animals);
const removedElementAndAdd = animals.splice(1, 2, "rabit", "turtle");
console.log(removedElement); //! modifies the orignal array by remving elements wich we splice and add "rabit", "turtle"
console.log(animals);
console.log("Q5");
//*Question 5:indexOf() & includes()
const cities = ["Paris", "London", "Tokyo", "Paris", "NYC"];
// Find first index of 'Paris'
console.log(cities.indexOf("Paris"));
// Check if 'Berlin' exists
console.log(cities.includes("Berlin"));
// Find last index of 'Paris'
console.log(cities.lastIndexOf("Paris"));

//? ARRAY METHODS - INTERMEDIATE LEVEL
//* Question 6: forEach()
console.log("Q6");
const scores = [85, 92, 78, 96, 88];
// Print each score with its position (1-based indexing)
// Format: "Student 1: 85 points"
scores.forEach((value, index) => console.log(index, " : ", value));

//*Question 7: map
console.log("Q7");
const temperatures = [0, 20, 30, 40];
// Convert Celsius to Fahrenheit: F = C × 9/5 + 32
const Fahrenheit = temperatures.map((temp) => {
  return (temp * 9) / 5 + 32;
});
console.log(Fahrenheit);

//Question 8: filter()
console.log("Q8");

const ages = [16, 21, 18, 25, 14, 30, 17];
// Get all ages that are 18 or older (legal adults)
console.log("age:", ages);
const filteredAge = ages.filter((age) => {
  if (age >= 18) {
    return true;
  } else false;
});
console.log(filteredAge);

//Question 9: find() & findIndex()

console.log("Q9");
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];
// Find the product with price exactly 500
const productResult = products.find((i) => i.price === 500);
console.log("Product prise equals to 500 is", productResult);
// Find the index of product with id 3
const productIndx = products.findIndex((i) => i.id === 3);
console.log("Index of product is ", productIndx);

//Question 10: reduce()
console.log("Q10");
const expenses = [120, 80, 200, 45, 90];
// Calculate total expenses
// Find the maximum expense
// Expected Output: Total: 535 , Max: 200
const totalExpense = expenses.reduce((sum, expense) => {
  return sum + expense;
}, 0);

console.log("Total expense", totalExpense);
// Find the maximum expense
const maxExpense = expenses.reduce((max, expense) => {
  return expense > max ? expense : max;
}, 0);
console.log("Maxr Expense ", maxExpense);

//? ARRAY METHODS - ADVANCED LEVE
//*Question 11: every() & some()
console.log("Q11");
const grades = [85, 90, 78, 92, 88];
const failingGrades = [45, 60, 55, 40];
// Check if all grades are passing (>= 70)
const allGrade = grades.every((i) => i >= 70);
console.log("all greade ", allGrade);
// Check if any grade is excellent (>= 90)
const anyGrade = grades.some((i) => i >= 90);
console.log("any grde:", anyGrade);

//*Question 12: sort()
const words = ["banana", "apple", "cherry", "date"];
const numbers1 = [10, 5, 40, 25, 1000, 1];
// Sort words alphabetically
const sorteAlpha = [...words].sort(); //! It make mutation and changed array so carefull so copy array on doing sort
console.log("sorted words", sorteAlpha);
// Sort numbers in ascending order
const ascend = numbers1.sort((a, b) => {
  return a + b;
});
console.log("assending order ", ascend);
// Sort numbers in descending order
const descending = numbers1.sort((a, b) => {
  return b - a;
});
console.log("desending: ", descending);

//Question 13: flat() & flatMap()
console.log("Q 13");
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// Flatten the nested array completely
//! const flatArray = nestedArray.flat(); // wil give Flated array [ 1, 2, 3, 4, [ 5, 6 ], 7 ]
const flatArray = nestedArray.flat(Infinity); //* will give  [1, 2, 3, 4,5, 6, 7 ]
console.log("Flated array", flatArray);

/*  
 How it works:
array.flat() → Flattens 1 level (default).

array.flat(1) → Same as above — flattens 1 level.

array.flat(2) → Flattens 2 levels deep.

array.flat(Infinity) → Flattens all levels (no matter how deep).

array.flat(0) → Does nothing, returns the original array.

array.flat(-1) → Same as flat(0) — no flattening.

array.flat("abc") → Invalid, treated as flat(0).

array.flat(undefined) → Treated as flat(1) — default behavior.
*/
const sentences = ["Hello world", "JavaScript rocks"];

// Get all individual words from sentences
const individualWords = sentences.flatMap((i) => i.split("")); //* so faltMap() takes argument as callback so we can split it with ''* */
console.log(individualWords);

//? 🟩 STRING METHODS

//*Question 14: charAt() & charCodeAt()
console.log("Q14");
const text = "Hello World";
// Get character at index 6
const charAtSix = text.charAt(6);
console.log("character at index 6", charAtSix);
// Get ASCII code of character at index 0
const charCode = text.charCodeAt(0);
console.log(" ASCII code of character at index 0 ", charCode);

//Question 15: substring(),slice(),substr()
console.log("Q15");
const email = "user@example.com";
// Extract username (before @)
// Extract domain (after @)
// Extract file extension using slice
