import React from "react";
import "./TabBox.css";
export default function TabBox() {
  return (
    <>
      <main className="main">
        <section className="tab">
          <div className="container">
            <div className="col-12 col-md-8 mx-auto">
              <div className="tabBox">
                <ul className="tabBox-header">
                  <li>
                    <button type="button" className="active">
                      Chowmein
                    </button>
                  </li>
                  <li>
                    <button type="button">Noodle</button>
                  </li>
                  <li>
                    <button type="button">Biryani</button>
                  </li>
                </ul>
                <div className="tab-body">
                  <div className="item chow-mein">
                    <h3>Chow mein</h3>
                    <figure className="chow-mein-img"></figure>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste modi ratione aspernatur, praesentium, expedita mollitia nobis molestias, natus voluptate obcaecati tempora facilis soluta asperiores error debitis labore accusamus
                      laudantium id?
                    </p>
                    <ul className="ingredient">
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
