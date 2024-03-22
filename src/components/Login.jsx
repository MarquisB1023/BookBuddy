import { useState } from "react";

function Login({setToken}) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify({
            email: Email,
            password: Password,
          }),
        }
      );
      const result = await response.json();
      
      const token = result.token;
      setToken(token)

    } catch (error) {
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
            name="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <h2>Password</h2>
        {error && <p>{error}</p>}
        <label>
          Password:{""}
          <input
             type ="password"
            name="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
