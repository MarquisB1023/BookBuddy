/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog.
 Fetch the book data from the provided API. Users should be able to click on an individual book to
  navigate to the SingleBook component and view its details. */

import {useState} from 'react'
import {link } from 'react-router-dom'

const [Email, setEmail] = useState("");

async function Books(books,setBooks) {


     try {
        const resposne = await fetch(
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/users/books`,{
           
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        const result = await Response.json();
        console.log(result);

     }catch(error) {
        console.error(error);
     }
}

     return (
   <>
 <div className="Books">

{searchedBooks && Books.map(Books=> <img src ={Books.imageURL} alt=""/>)}

</div>
   </>
     )


    


export default Books