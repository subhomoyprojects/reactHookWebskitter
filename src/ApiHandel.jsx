import React, { useState } from "react";

export default function ApiHandel() {
  const [data, setData] = useState();
  const [flag, setFlag] = useState(false);

  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((elm) => setData(elm));

  const dataFetch = () => {
    setFlag((toggleFunction) => !toggleFunction);
  };
  console.log(data);
  return (
    <div>
      <h1>Hello</h1>
      <button type="button" onClick={dataFetch}>
        Fetch Data
      </button>
      {Array.isArray(data) &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{flag ? item.title : ""}</h1>
            </div>
          );
        })}
    </div>
  );
}
