import React from "react";
import data from "../jsonData.json";

const Data = () => {
  console.log(data);
  return (
    <div>
      <h1>Json Data </h1>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h3>
              {item.heading1} : {item.heading2}
            </h3>
            <p>{item.description}</p>
            <img src={item.image} alt={item.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
