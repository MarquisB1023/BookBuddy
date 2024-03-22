import { useState } from "react";
import { Navigate } from "react-router-dom";

function Account({ token }) {
  const [accounts, setAccounts] = useState(null);
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
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setAccounts(result);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {!token && <Navigate to="/" replace={true} />}
      {error && <p>{error}</p>}
      {accounts && (
        <div>
          <ul>
            <li>First Name: {accounts.firstname}</li>
            <li>Last Name: {accounts.lastname}</li>
            <li>Email: {accounts.email}</li>
            <li>
              Books:
              <ul>
                {accounts.books.map((book) => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </li>
          </ul>
          <button onClick={handleClick}>My Account</button>
        </div>
      )}
    </>
  );
}

export default Account;
