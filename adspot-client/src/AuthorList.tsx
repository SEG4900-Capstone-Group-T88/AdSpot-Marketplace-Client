import { useQuery } from "@apollo/client";
import { gql } from "../src/__generated__/gql";

function AuthorList() {
    const query = gql(`
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
  `);
    const { loading, error, data } = useQuery(query);

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data!.authors.map((author) => (
                <div key={author.id}>
                    <p>
                        <pre>
                            Author ID: {author.id} Author Name: {author.name}
                        </pre>
                    </p>
                    <ul>
                        {author.books.map((book) => (
                            <li>
                                <pre>
                                    Book ID: {book.id} Title: {book.title}
                                </pre>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default AuthorList;
