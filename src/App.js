// import ApiHandel from "./ApiHandel";
import Details from "./Details";
import ParamHooks from "./ParamHooks";
// import ImageOnOff from "./ImageOnOff";
// import Components from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TabBox from "./TabBox";
import Header from "./Header";
import Parent from "./Parent";
import Master from "./Siblings/Master";
import Subhomoy from "./Subhomoy";

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
          <Route path="/parent" element={<Parent />} />
          <Route path="/master" element={<Master />} />
          <Route path="/subhomoy" element={<Subhomoy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
