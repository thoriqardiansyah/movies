import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Details from "./pages/Details";
import TvDetails from "./components/TvDetails";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover/movie/:id" element={<Details />} />
          <Route path="/discover/tv/:id" element={<TvDetails />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
