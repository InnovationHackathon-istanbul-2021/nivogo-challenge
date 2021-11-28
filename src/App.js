import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home/Home"
import CheckTheShoe from "./pages/checkTheShoe/CheckTheShoe"
import ScanBarcode from "./pages/scanBarcode/ScanBarcode"
import AccessDatabase from "./pages/accessDatabase/AccessDatabase"
import ScanningBarcode from "./pages/scanningBarcode/ScanningBarcode"

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-the-shoe" element={<CheckTheShoe />} />
          <Route path="/scan-barcode" element={<ScanBarcode />} />
          <Route path="/access-database" element={<AccessDatabase />} />
          <Route path="/scanning-barcode" element={<ScanningBarcode />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
