import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-width">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
