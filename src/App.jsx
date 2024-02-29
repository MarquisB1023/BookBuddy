import { useState } from 'react'
import{useState,useEffect} from "react"
import bookLogo from './assets/books.png'
import Account from './components/Account'
import Books from './components/Books'
import Login from './components/Login'
import Navigations from './components/Navigations'
import Register from './components/Register'
import SingleBook from './components/SingleBook'


function App() {
  const [token, setToken] = useState(null)

  useEffect(( )=> {
getBooks().then((Books) => console.log(Books));
  async function getBooks() {
    const Books = await getBooks();
      console.log(Books)
  }
    Books();
  })

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      
      <Register token={token} setFunction ={setToken}/>
      
    </>
  )
}

export default App
{
  
  /* <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

<p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

<p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */}