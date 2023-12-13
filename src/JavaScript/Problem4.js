import React from "react";

function Problem4() {
  const handleProblem = () => {
    // console.log('Aman\"'.length);
    let str = "Please give Rs 100";
    let amount = str.slice(15);
    console.log(amount);
  };

  return (
    <div>
      <button onClick={handleProblem}>Problem 4</button>
    </div>
  );
}

export default Problem4;
