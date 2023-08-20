import React, { memo } from "react";

function Student2({ data }) {
  return (
    <>
      <div>
        <h1>Student2</h1>
        {Array.isArray(data) &&
          data.slice(0, 3).map((item) => {
            return (
              <div className="item" key={item.id}>
                <h4>{item.title}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default memo(Student2);
