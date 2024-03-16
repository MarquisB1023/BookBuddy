
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import Home from "./Home";

function Navigations() {
  return (
    <>
      <div id="container">
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/Account">Account</Link>
          <Link to="/Login">Account</Link>
          <Link to="/Register">Register</Link>
        </nav>

        <div id="main-section">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Navigations;
