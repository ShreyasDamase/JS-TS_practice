function processTask(here) {
  console.log("Processing...");
  here();
}

// Initial condition
let condition = "delete";

// Simulate API hit after some delay
function apiHit() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API hit received!");
      if (condition === "save") {
        resolve();
      } else {
        reject("Condition is not 'save', so rejecting...");
      }
    }, 2000); // Simulate API response time
  });
}

// Check and call the processTask function based on the condition
function checkConditionAndProcess() {
  if (condition === "save") {
    processTask(() => console.log("Saving to database..."));
  } else if (condition === "delete") {
    processTask(() => console.log("Deleting from database..."));
  } else {
    processTask(() => console.log("Invalid operation"));
  }
}

// Initial call for the `delete` condition
checkConditionAndProcess();

// Wait for the API hit and then recheck the condition
apiHit()
  .then(() => {
    console.log("Condition changed to 'save', rechecking...");
    condition = "save"; // Change condition after API hit
    checkConditionAndProcess(); // Recheck and process the task
  })
  .catch((error) => {
    console.log("API error:", error);
  });
