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
  }, [bookId]);

  async function checkoutBook(bookId) {
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

  console.log("Single book is: ", singleBook);
  return (
    <div>
      {singleBook && (
        <ul>
          <li className ="booktitle">{singleBook.title}</li>
          <li className ="bookauthor">{singleBook.author}</li>
          <li className ="description">{singleBook.description}</li>
          <li>
            <img src={singleBook.coverimage} alt={singleBook.title} />
          </li>
          <li>{singleBook.available}</li>
          <button
            onClick={async () => {
              await checkoutBook(bookId);
            }}
          >
            Checkout
          </button>
        </ul>
      )}
    </div>
  );
}

export default SingleBook;
