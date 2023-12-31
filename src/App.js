import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Hotel from "./components/Pages/Hotel";
import List from "./components/Pages/List";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
