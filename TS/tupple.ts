import { User } from "./TypesAndInterference";

const Person: [string, number] = ["bokya", 25];
const [nikname, age] = Person;
console.log(nikname, age);

// Object destructuring
const user: User = { name: "shreyas", email: "sss@gmail.com" };
// const { name, email }: { name: string; email: string } = user;
type GenericFuncType<T> = (val: T) => T;
const genericFunc: GenericFuncType<User> = (val) => {
  return val;
};

const result = genericFunc({ name: "shreyas", email: "sss@gmail.com" });
console.log(result);
// const genericFunc = <T>(number: T): T => {
//   return number;
// };

// const result = genericFunc<User>({ name: "shreyas", email: "sss@gmail.com" });
// console.log(result);
interface Cal {
  add(a: number, b: number): number;
}

const additiON: Cal = {
  add: (a, b) => a + b,
};
console.log(additiON.add(4, 5));
