import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Account({ token }) {
  console.log("account", token);
  const [accounts, setAccounts] = useState(null);
  const [error, setError] = useState();
  async function downloadUser() {
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
  async function deleteReservations(resId) {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${resId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    downloadUser();
  }, []);

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
                {accounts.books.map((book) => {
                  return (
                    <div>
                      <li key={book.id}>{book.title}</li>

                      <button
                        onClick={async () => {
                          await deleteReservations(book.id);
                          downloadUser();
                        }}
                      >
                        Return Book
                      </button>
                    </div>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Account;
