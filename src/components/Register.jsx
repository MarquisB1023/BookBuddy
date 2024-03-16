

import {useState} from 'react'
import {Link } from 'react-router-dom'

const [FirstName, setFirstName] = useState("");
const [LastName, setLastName] = useState("");
const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");
const [error, setError] = useState(null);

function Register (token , setFunction){
    async function handleSubmit(event) {
        event.preventDefault();
     try {
        const resposne = await fetch(
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/users/register`,{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringyify({
                firstname: 'Sam',
                lasttname: 'smith',
                email: 'ssmith@xample.com',
                password: 'sam345',
                Authorization: `Bearer ${token}`,
            })
        });
        const result = await Response.json();
        console.log(result);

     }catch(error) {
        console.error(error);
     }
}

     return (
   <>
    <form onSubmit={handleSubmit}>
    <h2>First Name</h2>
        {error && <p>{error}</p>}
        <label>
            First:
            <input 
            firstname="FirstName"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </label>

        <h2>Last Name</h2>
        {error && <p>{error}</p>}
        <label>
            Last:
            <input 
            lastname="LastName"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </label>

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
            password="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <button type="submit">Resgister</button>
    </form>
   </>
     )

}

export default Register