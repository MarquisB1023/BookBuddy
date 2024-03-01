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
  const [books, setBooks] = useState({});
  const [singleBook, setSingleBooks] = {};

  useEffect(() => {
    Books().then((books) => {
      setBooks(books);
    });
  }, []);

  useEffect(() => {
    SingleBook().then((singleBook) => {
      setSingleBooks(singleBook);
    });
  }, []);

  function handleClick(singleBook) {
    singleBook(), then(singleBook);
  }

  return (
    <>
      <div id="navbar">
        <Navigations> </Navigations>
      </div>

      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <singleBook singlebook={singleBook} />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>decription</th>
            <th>coverimage</th>
            <th>available</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Books
              key={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              coverimage={book.coverimage}
              available={book.available}
            />
          ))}
        </tbody>
      </table>

      <Register token={token} setFunction={setToken} />
    </>
  );
}

export default App;
{
  /* <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

<p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

<p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */
}
