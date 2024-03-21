import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import Home from "./Home";

function Navigations({ token, setToken }) {
  return (
    <>
      <div id="container">
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/Account">Account</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </nav>

        <div id="main-section">
          <Routes>
            <Route path="/Home/*" element={<Home />} />
            <Route path="/Account" element={<Account token={token} />} />
            <Route
              path="/Login"
              element={<Login token={token} setFunction={setToken} />}
            />
            <Route
              path="/Register"
              element={<Register token={token} setFunction={setToken} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Navigations;
