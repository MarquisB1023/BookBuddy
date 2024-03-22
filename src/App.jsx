import { useState } from "react";

import "./index.css";
import Home from "./components/Home";
import bookLogo from "./assets/books.png";
import Account from "./components/Account";
import Books from "./components/Books";
import Login from "./components/Login";
import Navigations from "./components/Navigations";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";
import { Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div id="navbar">
        <Navigations token={token} setToken={setToken} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route path="/Books" element={<Books />} />
        <Route
          path="/Books/:bookId"
          element={<SingleBook token={token} setToken={setToken} />}
        />
        <Route
          path="/Register"
          element={<Register token={token} setToken={setToken} />}
        />
        <Route
          path="/Account"
          element={<Account token={token} setToken={setToken} />}
        />
      </Routes>
    </>
  );
}

export default App;
