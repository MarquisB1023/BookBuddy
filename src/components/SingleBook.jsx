/* TODO - add your code to create a functional React component that renders details for a single book. 
Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import {useState} from 'react'
import {link } from 'react-router-dom'

function SingleBook ({ }) {


    async function handleSubmit(event) {
        event.preventDefault();
     try {
        const response = await fetch(
            'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/1',{

            headers: {
                'Content-Type': 'application/json',
            },
           
        });
        const result = await response.json();
        console.log(result);

     }catch(error) {
        console.error(error);
     }
}

     return (
   <>

   </>
     )


    
};

async function Bookid () {
    try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/books/1', {
            method: "PATCH",
            body: JSON.stringify({
              available: false,
            })
           
        });
        const result = await response.json();
        console.log(result);

     }catch(error) {
        console.error(error);
     
     
}

     return (
   <>

   </>
     )

};

 Bookid ();
export default SingleBook