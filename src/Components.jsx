import React, { useState } from "react";

export default function Components() {
  // user current value jodi value change korta chai then use korta hoba setUser
  const [user, setUser] = useState(true);
  // const [user, setUser] = useState("Subhomoy");

  //   Simple click function value change
  //   const valueReturn = () => {
  //     setUser("Arinita");
  //   };

  //   Toggle System
  const valueReturn = () => {
    setUser((item) => !item);

    // if (user) {
    //   setUser(true);
    // } else {
    //   setUser(false);
    // }
    // if(user === "Subhomoy"){
    //     setUser("Arinita")
    // }
    // else{
    //     setUser("Subhomoy")
    // }
  };

  return (
    <>
      <h1>{user ? "Subhomoy" : "Arinita"}</h1>
      {/* <h1>{user}</h1> */}

      <button type="button" onClick={valueReturn}>
        Save
      </button>
    </>
  );
}
