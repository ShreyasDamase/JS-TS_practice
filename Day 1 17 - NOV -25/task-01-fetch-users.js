let users = [];
console.log(users);

const getAllUsers = () => {
  try {
    return (apiResponse = fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        users = [...data.users];
        return users;
      }));
  } catch {
    (error) => console.log("api fetching error", error);
  }
};
const data = getAllUsers().then(() => {
  users.forEach((element) => {
    console.log("first name ", element.firstName);
  });
});
