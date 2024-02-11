import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

function AddAuthor() {
  let input;

  const [result, setResult] = useState(undefined);

  const query = gql`
    mutation AddAuthor($input: AddAuthorInput!) {
      addAuthor(input: $input) {
        author {
          id
          name
        }
        errors {
          code: __typename
          ... on Error {
            message
          }
        }
      }
    }
  `;
  const [addAuthor, { data, loading, error }] = useMutation(query);

  if (loading) return "Submitting ...";

  let status;
  switch (result?.status) {
    case "success":
      status = `Author ${result.name} with ID ${result.id} was successfully added.`;
      break;
    case "error":
      status = result.errors.map(({ code, message }) => (<p>{message}</p>));
      break;
    default:
      status = null;
      break;
  }

  return (
    <div>
      {status}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addAuthor({
            variables: { input: { name: input.value } },
            onCompleted: (data) => {
              const numErrors = data.addAuthor.errors?.length ?? 0;
              switch (numErrors) {
                case 0:
                  const id = data.addAuthor.author.id;
                  const name = data.addAuthor.author.name;
                  setResult({ status: "success", id: id, name: name });
                  break;
                default:
                  console.log(data.addAuthor.errors);
                  setResult({ status: "error", errors: data.addAuthor.errors });
                  break;
              }
            },
          });
          input.value = "";
        }}
      >
        <label>
          Author Name:
          <input
            type="text"
            ref={(node) => {
              input = node;
            }}
          />
        </label>
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
}

export default AddAuthor;
