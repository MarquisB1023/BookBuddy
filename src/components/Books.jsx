
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const navigate  = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/users/books",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBooks();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };
  async function Reservations() {
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/reservations",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function deleteReservations() {
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/reservations/6",
        {
          ethod: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {/* <div className="Books">
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.description}</td>
          <td>
            <img src={book.coverimage} alt={book.title} />
          </td>
          <td>{book.available}</td>
          <td>
            <button onClick={() => (onClick = singleBook.id)}>View Info</button>
          </td>
        </tr>
      </div> */}
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
            // <Books
            //   key={book.id}
            //   title={book.title}
            //   author={book.author}
            //   description={book.description}
            //   coverimage={book.coverimage}
            //   available={book.available}
            // />
            <p>{book.title}</p>
          ))}
        </tbody>
      </table>
    </>
  );
}



export default Books;
