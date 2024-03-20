import { useState } from "react";
import { Navigate } from "react-router-dom";

function Account({ token }) {
  const [error, setError] = useState();
  async function handleClick(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ${token}",
          },
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
      {!token && <Navigate to="/" replace={true} />}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>
        {" "}
        <h2>My Account</h2>
      </button>
    </>
  );
}

export default Account;
