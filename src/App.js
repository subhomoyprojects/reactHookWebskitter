// import ApiHandel from "./ApiHandel";
import "./App.css";
import Details from "./Details";
import ParamHooks from "./ParamHooks";
// import ImageOnOff from "./ImageOnOff";
// import Components from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TabBox from "./TabBox";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      {/* <Components /> */}
      {/* <ImageOnOff /> */}
      {/* <ApiHandel /> */}
      {/* <ParamHooks /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/param" element={<ParamHooks />} />
          <Route path="/hello1/:id" element={<Details />} />
          <Route path="/" element={<TabBox />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
