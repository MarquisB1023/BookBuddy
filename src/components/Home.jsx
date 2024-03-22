import React from "react";
import Navigations from "./Navigations";
import Account from "./Account";
import Login from "./Login";
import SingleBook from "./SingleBook";
import Books from "./Books";
import Register from "./Register";
import bookLogo from "../assets/books.png";

function Home() {
  return (
    <>
    
      <h1>
        <img id="logo-image" src={bookLogo} alt="Library App Logo" />
        Library App
      </h1>

      {/* <Account token={token} setFunction={setToken} />
      
      <Login token={token} setFunction={setToken} /> */}
      <Books />
    
    </>
  );
}

export default Home;
