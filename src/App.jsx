import { useState, useEffect } from "react";
import "./index.css";
import bookLogo from "./assets/books.png";
import Account from "./components/Account";
import Books from "./components/Books";
import Login from "./components/Login";
import Navigations from "./components/Navigations";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div id="navbar">
        <Navigations> </Navigations>
      </div>

      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Account />
      <Login />
      <SingleBook />
      <Books />

      <Register token={token} setFunction={setToken} />
    </>
  );
}

export default App;
