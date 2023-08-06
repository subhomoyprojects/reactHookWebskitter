import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ParamHooks() {
  const [urlSet, setUrlSet] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((elm) => setUrlSet(elm));
  }, []);

  return (
    <>
      {/* Link to={`/edit/${item.id}`} */}
      <ul>
        {Array.isArray(urlSet) &&
          urlSet.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/hello1/${item.id}`}>Hello{item.id}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
