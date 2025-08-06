// // by Method over ridding menas define own methode for child

// class Animal {
//   sound() {
//     console.log("Animale make a sound");
//   }
// }

// class Cat extends Animal {
//   sound() {
//     super.sound();
//     console.log("MEow");
//   }
// }

// const cat = new Cat();
// cat.sound();
class Payment {
  process(amount) {
    console.log(`Processing ₹${amount}...`);
  }
}

class CreditCardPayment extends Payment {
  process(amount) {
    console.log(`Charging ₹${amount} to credit card 💳`);
  }
}

class PayPalPayment extends Payment {
  process(amount) {
    console.log(`Processing ₹${amount} via PayPal 🅿️`);
  }
}

function checkout(paymentMethod) {
  paymentMethod.process(500);
}

checkout(new CreditCardPayment()); // Credit card logic
checkout(new PayPalPayment()); // PayPal logic
//📝JS doesnt suppor method overloading (Same method name, different parameters)
