function examination(internal = 0) {
  return (b = 0) => {
    console.log(internal + b);
  };
}
let resultOfSum1 = examination();
let resultOfSum2 = examination(75);
// console.log(resultOfSum1);
resultOfSum1(100);
resultOfSum2();
// result1 = 100;
// result2 = 50;
// examination()(result2);
