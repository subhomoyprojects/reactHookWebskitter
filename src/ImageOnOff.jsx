import React, { useState } from "react";

import LightOn from "../src/images/pic_bulbon.gif";
import LightOff from "../src/images/pic_bulboff.gif";

export default function ImageOnOff() {
  const [image, setImage] = useState(true);
  const switchOnOff = () => {
    setImage((light) => !light);
  };
  return (
    <>
      <div>
        <div>
          <img src={image ? LightOff : LightOn} alt="" />
        </div>
        <button type="button" onClick={switchOnOff}>
          {image ? "Switch On" : "Switch Off"}
        </button>
      </div>
    </>
  );
}
