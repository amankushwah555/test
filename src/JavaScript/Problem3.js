import React from "react";

function Problem3() {
  const handleClick = () => {
    // const marks = {
    //   math: 55,
    //   sst: 59,
    //   english: 40,
    // };
    // for (let i in marks) {
    //   console.log(marks[i]);
    // }
    // for (let i = 0; i < Object.keys(marks).length; i++) {
    //   console.log(
    //     Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]
    //   );
    // }
    // let i = prompt("Enter a correct no. : ");
    // let j;
    // while (i != j) {
    //   j = prompt("Enter a number to be matched with i : ");
    // }
    // prompt("Your number is matched with i.");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Problem3;
