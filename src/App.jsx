import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFOund";
// import Home from "./pages/Restaurants/Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
