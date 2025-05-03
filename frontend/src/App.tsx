import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Booking from "./pages/UserBooking";
import Login from "./pages/Login";
import Manage from "./pages/UserManage";
import "./styles/tailwind.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/manage" element={<Manage />} />
    </Routes>
  </Router>
);

export default App;
