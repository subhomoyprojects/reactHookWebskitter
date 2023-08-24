import LightOn from "../../src/images/pic_bulbon.gif";
import LightOff from "../../src/images/pic_bulboff.gif";
import { useReducer } from "react";

const initialState = true;

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_OFF":
      return (state = !state);
    default: {
      return state;
    }
  }
};

export default function LightOnOffReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const switchOnOff = () => dispatch({ type: "SWITCH_OFF" });
  return (
    <>
      <div className="container">
        <div>
          <img src={state ? LightOff : LightOn} alt="" />
        </div>
        <button type="button" onClick={switchOnOff}>
          {state ? "Switch On" : "Switch Off"}
        </button>
      </div>
    </>
  );
}
