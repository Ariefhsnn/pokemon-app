import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
