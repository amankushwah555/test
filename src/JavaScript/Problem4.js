import React from "react";

function Problem4() {
  const handleProblem = () => {
    // console.log('Aman\"'.length);
    // let str = "Please give Rs 100";
    // let amount = str.slice(15);
    // console.log(amount);

    let num = [1, 2, 3, 4];
    // num.forEach((element) => {
    //   console.log(element * element);
    // });

    // for (let i of num) {
    //   console.log(i);
    // }

    // for (let i in num) {
    //   console.log(i);
    // }

    // num.map((value, index, arr) => {
    //   console.log(value);
    //   console.log(index);
    //   console.log(arr);
    // });

    // let a = num.filter((val) => {
    //   return val > 2;
    // });
    // console.log(a);

    let b = num.reduce((a, b) => {
      return a + b;
    });
    console.log(b);
  };

  return (
    <div>
      <button onClick={handleProblem}>Problem 4</button>
    </div>
  );
}

export default Problem4;
