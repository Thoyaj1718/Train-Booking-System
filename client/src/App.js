import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Trains from "./components/Trains/Trains";
import Login from "./components/User/Login";
import Logout from "./components/User/Logout";
import { useDispatch } from "react-redux";
import { check } from "./actions/user";
import Profile from "./components/Profile/Profile";
import Signup from "./components/User/Signup";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import Booking from "./components/Trains/Booking";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check());
  }, [dispatch]);

  return (
    <Router basename="/Train-Booking-System">
      <Navbar />
      <Routes>
        <Route path="/" element={<Trains />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking/:trainId" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;