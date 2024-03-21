import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SingleBook from "./SingleBook";

function Books({ token }) {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data.books);
        setBooks(data.books);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBooks();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Cover Image</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>
                <img src={book.coverimage} alt={book.title} />
              </td>
              <td>{book.available}</td>
              <button onClick={() => handleBookClick(book.id)}>
                View Info
              </button>
              <Routes>
                <Route
                  path="./books/bookId"
                  element={<SingleBook token={token} />}
                />
              </Routes>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Books;
