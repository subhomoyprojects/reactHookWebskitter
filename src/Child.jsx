import React, { memo } from "react";

function Child({ valueHolder, countPass }) {
  console.log(valueHolder);
  return (
    <>
      <h1>Child{valueHolder}</h1>
      <p>{countPass}</p>
    </>
  );
}

export default memo(Child);
