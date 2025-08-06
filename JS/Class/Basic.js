// class Persone {
//   constructor(name = "Bokya", age = 25) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Name: ", this.name, " Age: ", this.age);
//   }
// }

// // const Johan = new Persone("Shreyas", 25);
// // Johan.greet();
// // const Bokya = new Persone();
// // Bokya.greet();

// class Student extends Persone {
//   constructor(hobby = "Nothing") {
//     super();

//     this.hobby = hobby;
//   }

//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   myHobby() {
//     console.log("Hobby", this.name, this.age, this.hobby);
//   }
// }

// const P = new Student("Coding");
// P.myHobby();
// P.setName("Kiyo");
// const myname = P.getName();
// console.log(myname);
// P.myHobby();

class Person {
  constructor(name) {
    this.name = name;
  }

  static greet() {
    console.log(this.name); // logs: "Person" (class name)
  }
}
const a = new Person("yupi");
Person.greet();
// a.greet();          // ❌ Error: greet is not a function
// a.Person.greet();   // ❌ Error: a.Person is undefined

class MyClass {
  static myStaticMethod() {
    console.log("This is a static method");
  }

  static myStaticValue = 123;
}
MyClass.myStaticMethod(); // ✅ works
console.log(MyClass.myStaticValue); // ✅ 123

const obj = new MyClass();
// obj.myStaticMethod(); // ❌ Error

class MathUtils {
  static square(a) {
    return a * a;
  }
}

console.log(MathUtils.square(5));
class Config {
  static API_KEY = "XYZ-123";
}

console.log(Config.API_KEY); // ✅ XYZ-123
