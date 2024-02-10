import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const query = gql`
    query GetAuthors {
      authors(order: [{ id: ASC }]) {
        id
        name
        books {
          id
          title
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.authors.map(({ "id": authorId, "name": authorName, "books": authorBooks }) => (
    <div key={authorId}>
      <p>Author ID: {authorId}</p>
      <p>Author Name: {authorName}</p>
      <ul>
        {authorBooks.map(({ "id": bookId, "title": bookTitle }) => (
          <li key={bookId}>
            <pre>Book ID:{bookId}    Title: {bookTitle}</pre>
          </li>
        ))}
      </ul>
      <br />
    </div>
  ));
}

export default App;
