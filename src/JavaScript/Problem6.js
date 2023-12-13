import React from "react";

function Problem6() {
  const handleProblem = () => {
    let runAgain = true;
    while (runAgain) {
      let age = Number.parseInt(prompt("Enter your age: "));
      if (age < 18) {
        alert("You cannot drive a car!");
        if (age < 0) console.error(age, " is not valid age!");
      } else {
        runAgain = false;
        alert("You can drive a car!");
      }
    }
    // runAgain = confirm("You want to play again!");
  };
  return (
    <div>
      <button onClick={handleProblem}>Problem 6</button>
    </div>
  );
}

export default Problem6;
