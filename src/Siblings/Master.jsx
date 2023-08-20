import React, { useState, useEffect } from "react";
import Student1 from "./Student1";

export default function Master() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((elm) => setData(elm))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Master</h1>
      <Student1 data={data} />
    </>
  );
}
