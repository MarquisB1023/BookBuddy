/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import  {useState} from 'react'

function  Account (){
    
    async function handleClick(event) {
        event.preventDefault();
     try {
        const resposne = await fetch(
            'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me',{
            method : "HEADER",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
            },
           
        });
        const result = await Response.json();
        console.log(result);

     }catch(error) {
        console.error(error);
     }
}
return(
    <>
   
    {error && <p>{error}</p>}
    <button onClick={handleClick}> <h2>My Account</h2></button>
    </>
)
}

export default Account