import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [value] = useState(100);

  const countIncrease = () => {
    setCount(count + 1);
  };
  const countDecrease = () => {
    setCount(count - 1);
  };

  // Use Memo

  return (
    <>
      <div className="container">
        <h1>Parent</h1>
        <p>{count}</p>
        <button type="button" onClick={countIncrease}>
          +
        </button>
        <button type="button" onClick={countDecrease}>
          -
        </button>

        <Child valueHolder={value} countPass={count} />
      </div>
    </>
  );
}
