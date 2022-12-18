import React, { useState, useEffect } from "react";
import "./CPButton.scss";

function CPButton() {
  const [data, setData] = useState({
    garden: { name: "Strawberry", x: "1", y: "1", icon: "" },
    utilities: [
      { x: "1", y: "1", garden: "box1" },
    ],
    cp: "286",
  });

  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await fetch(
  //         "https://9l4arxdk8l.execute-api.us-east-1.amazonaws.com/userdetails"
  //       );
  //       const data = await response.json();
  //       setData(data);
  //       console.log(data);
  //     }
  //     fetchData();
  //   }, []);
  return (
    <div id="app">
      <div className="container">
        <button className="button"> {data.cp} CP</button>
      </div>
    </div>
  );
}

export default CPButton;
