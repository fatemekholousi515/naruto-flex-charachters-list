import React from "react";
import { naruto } from "naruto-name-generator";
import header from "./header.jpg";
function App() {
  const charachters = naruto.all;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={header} />
        {charachters.map((charachter) => (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              // color: "white",
              width: "150px",
              height: "50px",
              margin: "5px",
            }}
          >
            {charachter.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
