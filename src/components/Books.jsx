/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog.
 Fetch the book data from the provided API. Users should be able to click on an individual book to
  navigate to the SingleBook component and view its details. */

import react, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const history = useHistory();

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
    history.push(`/books/${bookId}`);
  };
  return (
    <>
      <div className="Books">
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
      </div>
    </>
  );
}

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

export default Books;
