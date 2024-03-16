

import { useState } from "react";
import { Link } from "react-router-dom";


  


async function SingleBook(user, setUser) {
  useEffect(() => { 
const fetchData =  async() => {

};
fetchData();
  }, [id]);

  function handleClick(singleBook) {
    singleBook(), then(singleBook);
  }
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
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  async function Bookid() {
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/books/1",
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
    <ul open={singleBook.id}>
      <li>{singleBook.title}</li>
      <li>{singleBook.author}</li>
      <li>{singleBook.description}</li>
      <li>
        <img src={singleBook.coverimage} alt={singleBook.title} />
      </li>
      <li>{singleBook.available}</li>
    </ul>
  );
}


export default SingleBook;
