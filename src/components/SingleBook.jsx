import { useState, useEffect } from "react";

async function SingleBook({ token, setToken }) {
  const [singleBook, setSingleBook] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await handleClick();
    };
    fetchData();
  }, []);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/:bookId",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSingleBook(result.book);
      const token = result.token;
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleBookid() {
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/:bookId",
        {
          method: "PATCH",
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

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };
  async function Reservations() {
   
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/6",
        {
          method: "DELETE",
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
          <button onClick={handleBookid}>Update Availability</button>
          <td>
                <button onClick={() => handleBookClick(book.id)}>
                  View Info
                </button>

                <button onClick={() => Reservations(book.id)}>
                  Reserve Book
                </button>
                <button onClick={() => deleteReservations(book.id)}>
                  Delete Reservations
                </button>
              </td>
        </ul>
      )}
    </div>
  );
}

export default SingleBook;
