// class BankAccount {
//   #balance = 100;
//   deposit(ammount) {
//     if (ammount > 0) {
//       this.#balance += ammount;
//     }
//   }

//   withdraw(ammount) {
//     if (ammount <= this.#balance) {
//       this.balance -= ammount;
//     } else {
//       console.log("Inssufficient Fund");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }
// const acc = new BankAccount();

// acc.deposit(100);
// console.log(acc.getBalance());

// acc.withdraw(50);
// console.log(acc.getBalance());
// // console.log(acc.#balance);

class BankAccount {
  #balance = 0;
  #interestRate = 0.05; // 5% interest
  #calculateInterest() {
    return this.#balance * this.#interestRate;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  applyInterest() {
    const interest = this.#calculateInterest();
    this.#balance += interest;
    console.log(`Interest added: ₹${interest.toFixed(2)}`);
  }

  getBalance() {
    return this.#balance.toFixed(2);
  }
}
const acc = new BankAccount();

acc.deposit(1000);
console.log("Before interest:", acc.getBalance()); // ₹1000.00

acc.applyInterest(); // Adds ₹50
console.log("After interest:", acc.getBalance()); // ₹1050.00

// ❌ Can't access private internals:
// console.log(acc.#balance); // ❌ SyntaxError
// console.log(acc.#calculateInterest()); // ❌ SyntaxError
