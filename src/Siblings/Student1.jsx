import React, { memo } from "react";
import Student2 from "./Student2";

function Student1({ data }) {
  return (
    <div>
      <h1>Student1</h1>
      {/* {Array.isArray(data) &&
        data.slice(0, 3).map((item) => {
          return (
            <div className="item" key={item.id}>
              <h4>{item.id}</h4>
            </div>
          );
        })} */}
      <Student2 data={data} />
    </div>
  );
}

export default memo(Student1);
