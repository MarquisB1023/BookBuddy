import { useState } from "react";

function Login({ token, setFunction }) {
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
      console.log(result);
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
