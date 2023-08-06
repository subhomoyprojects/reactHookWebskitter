// import ApiHandel from "./ApiHandel";
import "./App.css";
import Details from "./Details";
import ParamHooks from "./ParamHooks";
// import ImageOnOff from "./ImageOnOff";
// import Components from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Components /> */}
      {/* <ImageOnOff /> */}
      {/* <ApiHandel /> */}
      {/* <ParamHooks /> */}
      <Router>
        <Routes>
          <Route path="/" element={<ParamHooks />} />
          <Route path="/hello1/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
