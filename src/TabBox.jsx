import { useState } from "react";
import { Chow1, Noodles, Biryani } from "./images/Images";
import "./TabBox.css";
export default function TabBox() {
  const [tabShow, setTabShow] = useState(0);

  const showHideTabBody = (event) => {
    if (event.target.classList.contains("chowmein")) {
      setTabShow(0);
    } else if (event.target.classList.contains("noodle")) {
      setTabShow(1);
    } else if (event.target.classList.contains("biryani")) {
      setTabShow(2);
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
                  <div className={"item chowMein" + (tabShow === 0 ? " show" : "")}>
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
                  <div className={"item noodle" + (tabShow === 1 ? " show" : "")}>
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
                  <div className={"item biryani" + (tabShow === 2 ? " show" : "")}>
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
