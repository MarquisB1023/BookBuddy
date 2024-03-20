import { useState, useEffect } from "react";

async function SingleBook() {
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
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/1",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      setSingleBook(result.book);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleBookid() {
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/1",
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
        </ul>
      )}
    </div>
  );
}

export default SingleBook;
