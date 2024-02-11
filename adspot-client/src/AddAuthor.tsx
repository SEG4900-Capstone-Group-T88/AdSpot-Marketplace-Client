import { useMutation } from "@apollo/client";
import { gql } from "../src/__generated__/gql";

function AddAuthor() {
  let input: HTMLInputElement | null;

  const query = gql(`
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
  `);
  const [addAuthor, { data, loading }] = useMutation(query);

  if (loading) return "Submitting ...";

  let status = null;
  if (data) {
    const numErrors = data.addAuthor.errors?.length ?? 0;
    switch (numErrors) {
      case 0:
        const id = data.addAuthor.author!.id;
        const name = data.addAuthor.author!.name;
        status = (<p>Successfully added author {name} with ID {id}.</p>);
        break;
      default:
        status = (data.addAuthor.errors?.map((error) => (<p>{error.code}: {error.message}</p>)))
        break;
    }
  }

  return (
    <div>
      {status}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input !== null) {
            addAuthor({
              variables: { input: { name: input.value } },
            });
            input.value = "";
          }
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
