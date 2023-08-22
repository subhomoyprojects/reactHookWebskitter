import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ReducerApi.css";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    // case "SET_PRODUCTS":
    //   return action.payload;
    case "CLICK_GET_API":
      return action.payload;
    default:
      return state;
  }
};

export default function ReducerApi() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PRODUCTS", payload: data });
      });
  }, []);

  const buttonClickGetApi = async () => {
    try {
      let api = await fetch(`https://fakestoreapi.com/products`);
      let response = await api.json();
      dispatch({ type: "CLICK_GET_API", payload: response });
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="items-holder">
                <div className="items">
                  {Array.isArray(state) &&
                    state.slice(12, 15).map((item) => {
                      return (
                        <div className="item" key={item.id}>
                          <div className="card">
                            <figure className="card-img-top">
                              <img src={item.image} alt="" />
                            </figure>
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <h6 className="card-price">${item.price}</h6>
                              <p className="card-text">{item.description.slice(0, 100)}</p>
                              <Link to={`/product/${item.id}`} className="btn btn-primary">
                                View More
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <button type="button" className="btn btn-danger" onClick={buttonClickGetApi}>
                Get Api data
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
