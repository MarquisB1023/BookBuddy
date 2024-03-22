import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="books-container">
        {books &&
          books.map((book) => {
            return (
              <div key={book.id} className="book-container">
                <p className="book-title">{book.title}</p>
                <img
                  className="book-cover"
                  src={book.coverimage}
                  alt={book.title}
                />
                <p className="book-author">{book.author}</p>
                <p>{book.available}</p>
                <button onClick={() => handleBookClick(book.id)}>
                  View Info
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Books;
