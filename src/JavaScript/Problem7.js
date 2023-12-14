import React from "react";

function Problem7(props) {
  const match = (cpu, user) => {
    if (cpu === user) {
      return "Koi Bhi nahi jeetega!";
    } else if (cpu === "S" && user === "W") {
      return "CPU";
    } else if (cpu === "S" && user === "G") {
      return "USER";
    } else if (cpu === "G" && user === "W") {
      return "User";
    } else if (cpu === "G" && user === "S") {
      return "CPU";
    } else if (cpu === "W" && user === "S") {
      return "USER";
    } else if (cpu === "W" && user === "G") {
      return "CPU";
    }
  };
  const handleProblem = () => {
    // alert("Hello");
    // document.querySelector(".nav").style.color = "red";
    // document.querySelector(".nav").style.dispaly = "flex";
    // document.querySelector(".nav").style.justifyContent = "center";
    let user = prompt("Enter S, W and G : ");
    let cpuI = Math.floor(Math.random() * 3);
    let cpu = ["S", "W", "G"][cpuI];
    let result = match(cpu, user);
    document.write("The winner is " + result, "<br />;");

    document.write("The CPU is : ", cpu);
    <br />;
    document.write("The user is : ", user);
  };
  return (
    <div>
      {/* <nav className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </nav> */}
      <button onClick={handleProblem}>Problem 7</button>
    </div>
  );
}

export default Problem7;
