import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>My url is {params.id == 1 ? "hello1" : ""}</h1>
      <h1>My url is {params.id == 2 ? "hello2" : ""}</h1>
      <h1>My url is {params.id == 3 ? "hello3" : ""}</h1>
    </>
  );
}
