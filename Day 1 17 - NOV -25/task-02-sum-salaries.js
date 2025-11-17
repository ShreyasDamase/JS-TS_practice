let EmpSal = [];

const getuserSalYear = async () => {
  const apiResponse = await fetch("https://dummyjson.com/users");
  const apiData = await apiResponse.json();

  apiData.users.forEach((element) => {
    const expire = element.bank.cardExpire;
    const [month, year] = expire.split("/");
    const fullYear = 2000 + Number(year);
    EmpSal = [...EmpSal, fullYear];
  });
  return EmpSal;
};

const salArrayPrinted = async () => {
  const salArray = await getuserSalYear();
  return salArray;
};

const getSumSal = async () => {
  const array = await salArrayPrinted();
  let sum = 0;
  array.forEach((i) => {
    sum += i;
  });
  console.log(sum);
};
getSumSal();
