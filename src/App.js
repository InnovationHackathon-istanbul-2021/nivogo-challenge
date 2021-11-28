import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import CheckTheShoe from "./pages/checkTheShoe/CheckTheShoe";
import ScanBarcode from "./pages/scanBarcode/ScanBarcode";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-the-shoe" element={<CheckTheShoe />} />
          <Route path="/scan-barcode" element={<ScanBarcode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
