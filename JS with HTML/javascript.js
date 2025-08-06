// const data = function getsum() {
//   let sum = 0;
//   return function () {
//     for (var i = 0; i <= 10; i++) {
//       sum += i;
//     }
//     console.log(sum);
//     return sum;
//   };
// };
// const result = data();
// console.log(result());
var a = 0;

{
  let a = 20;
  console.log(a);
}
console.log(a);
