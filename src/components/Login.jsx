/* TODO - add your code to create a functional React component that renders a login form */

import {useState} from 'react'
import {link } from 'react-router-dom'

const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");
const [error, setError] = useState(null);

function Login ({token , setFunction }) {


    async function handleSubmit(event) {
        event.preventDefault();
     try {
        const response = await fetch(
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/users/login`,{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringyify({
                email: 'ssmith@xample.com',
                password: 'sam345',
                Authorization: `Bearer ${token}`,
            })
        });
        const result = await response.json();
        console.log(result);

     }catch(error) {
        console.error(error);
     }
}

     return (
   <>
    <form onSubmit={handleSubmit}>
        <h2>Email</h2>
        {error && <p>{error}</p>}
        <label>
            Email:
            <input 
            email="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </label>

        <h2>Password</h2>
        {error && <p>{error}</p>}
        <label>
            Password:{""}
            <input 
            passwordl="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <button type="submit">Login</button>
    </form>
   </>
     )


    
};

export default Login