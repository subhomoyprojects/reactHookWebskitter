import React, { useReducer } from "react";
import { Chow1, Noodles, Biryani } from "../images/Images";
import "../TabBox.css";
const initialState = 0;
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "TAB_CHOOSE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
export default function ReducerTab() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const showHideTabBody = (e) => {
    if (e.target.className.includes("chowmein")) {
      dispatch({ type: "TAB_CHOOSE", payload: 0 });
    } else if (e.target.className.includes("noodle")) {
      dispatch({ type: "TAB_CHOOSE", payload: 1 });
    } else if (e.target.className.includes("biryani")) {
      dispatch({ type: "TAB_CHOOSE", payload: 2 });
    }
  };
  return (
    <>
      <main className="main">
        <section className="tab">
          <div className="container">
            <div className="col-12 col-md-8 mx-auto">
              <div className="tabBox">
                <ul className="tabBox-header">
                  <li>
                    <button type="button" onClick={showHideTabBody} className="chowmein">
                      Chowmein
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={showHideTabBody} className="noodle">
                      Noodle
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={showHideTabBody} className="biryani">
                      Biryani
                    </button>
                  </li>
                </ul>
                <div className="tab-body">
                  <div className={"item chowMein" + (state === 0 ? " show" : "")}>
                    <h3>Chow mein</h3>
                    <figure className="img-holder">
                      <img src={Chow1} alt="" />
                    </figure>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste modi ratione aspernatur, praesentium, expedita mollitia nobis molestias, natus voluptate obcaecati tempora facilis soluta asperiores error debitis labore accusamus
                      laudantium id?
                    </p>
                    <h4>Ingredient</h4>
                    <ul className="ingredient">
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                    </ul>
                  </div>
                  <div className={"item noodle" + (state === 1 ? " show" : "")}>
                    <h3>Noodles</h3>
                    <figure className="img-holder">
                      <img src={Noodles} alt="" />
                    </figure>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste modi ratione aspernatur, praesentium, expedita mollitia nobis molestias, natus voluptate obcaecati tempora facilis soluta asperiores error debitis labore accusamus
                      laudantium id?
                    </p>
                    <h4>Ingredient</h4>
                    <ul className="ingredient">
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                    </ul>
                  </div>
                  <div className={"item biryani" + (state === 2 ? " show" : "")}>
                    <h3>Biryani</h3>
                    <figure className="img-holder">
                      <img src={Biryani} alt="" />
                    </figure>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste modi ratione aspernatur, praesentium, expedita mollitia nobis molestias, natus voluptate obcaecati tempora facilis soluta asperiores error debitis labore accusamus
                      laudantium id?
                    </p>
                    <h4>Ingredient</h4>
                    <ul className="ingredient">
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                      <li>Lorem Ipsum</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
