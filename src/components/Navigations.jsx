/* TODO - add your code to create a functional React component that renders a navigation bar for 
the different views in your single page application. You may consider conditionally rendering some options - f
or example 'Login' should be available if someone has not logged in yet. */

import {useState} from 'react'
import {link } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'

function Navigations (){
return(
 
    <>
    <div id ="container">
        <Login></Login>
        <Register></Register>
        <Account></Account>
    </div>
    </>
)
}

export default Navigations