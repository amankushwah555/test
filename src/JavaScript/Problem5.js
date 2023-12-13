import React from "react";

function Problem5() {
  const handleProblem = () => {
    // let arr = [1, 2, 3, 4, 5];
    // let a;
    // while (a != 0) {
    //   a = Number.parseInt(prompt("Enter a number: "));
    //   arr.push(a);
    // }
    // console.log(arr);
    // let a = arr.filter((item) => {
    //   return item % 10 === 0;
    // });
    // console.log(a);
    // let square = arr.map((a) => {
    //   return a * a;
    // });
    // console.log(square);
    // let factorial = arr.reduce((a, b) => {
    //   return a * b;
    // });
    // console.log(factorial);
    // let num = Math.round(Math.random() * 100);
    // let userNumber;
    // while (num !== userNumber) {
    //   userNumber = Number.parseInt("Enter the expected number : ");
    //   break;
    // }
    // if (num === userNumber) {
    //   alert("You guess the number correct!");
    // }
  };
  return (
    <div>
      <button onClick={handleProblem}>Problem 5</button>
    </div>
  );
}

export default Problem5;
