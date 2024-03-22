import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleBook({ token, setToken }) {
  console.log("Loaded!");
  const params = useParams();
  const bookId = params.bookId;

  const [singleBook, setSingleBook] = useState(null);

  useEffect(() => {
    async function fetchSingleBook() {
      console.log("downloading book");
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`
        );
        console.log(response);
        const result = await response.json();
        console.log("download: ", result);
        setSingleBook(result.book);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSingleBook();
  }, []);

  async function checkoutBook() {
    try {
      
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            
          },
          body: JSON.stringify({
            available: false,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  //   async function Reservations() {
  //     try {
  //       const response = await fetch(
  //         "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       const result = await response.json();
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   async function deleteReservations() {
  //     try {
  //       const response = await fetch(
  //         "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/6",
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const result = await response.json();
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  console.log("Single book is: ", singleBook);
  return (
    <div>
      {singleBook && (
        <ul>
          <li>{singleBook.title}</li>
          <li>{singleBook.author}</li>
          <li>{singleBook.description}</li>
          <li>
            <img src={singleBook.coverimage} alt={singleBook.title} />
          </li>
          <li>{singleBook.available}</li>
          <button onClick={checkoutBook}>Checkout</button>
        </ul>
      )}
    </div>
  );
}

export default SingleBook;
