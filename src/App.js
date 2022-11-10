import React, { useState } from "react";
import "./styles.css";
export default function App() {
  // react Hook For State Handler
  const [data, setData] = useState(null);

  // Fetch Function
  fetch("./api/cars.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // store Data in State Data Variable
      setData(data);
    })
    .catch(function (err) {
      console.log(err, " error");
    });

  return (
    <div className="App">
      {
        // use data State Variable For Get Data Use JavaScript Map Mathod
        data
          ? data.map(function (data) {
              return (
                <div className="card" key={data.id}>
                  <p className="bodyTy"> {data.bodyType}</p>
                  <div>
                    <p className="modelNa">{data.modelName} </p>
                    <p className="modelTy">{data.modelType} </p>
                  </div>
                  <img src={data.imageUrl} alt={data.modelName} />
                </div>
              );
            })
          : ""
      }
    </div>
  );
}
