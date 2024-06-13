import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Loading from "./components/loading/Loading";
import { CircularProgress } from "@mui/material";

function App() {
  return (
    <div className="app">
      <div className="loading">
        <CircularProgress color="success" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Loading />
    </div>
  );
}

export default App;
