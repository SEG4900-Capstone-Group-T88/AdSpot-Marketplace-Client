import { useMutation } from "@apollo/client";
import { gql } from "../src/__generated__/gql";
import bcrypt from "bcryptjs";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function AddAuthor() {
  let emailInputRef: HTMLInputElement | null;
  let passwordInputRef: HTMLInputElement | null;
/**
  const query = gql(`
    mutation AddAuthor($input: AddAuthorInput!) {
      addAuthor(input: $input) {
        author {
          email
          password
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
        status = (data.addAuthor.errors?.map((error: { code: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (<p>{error.code}: {error.message}</p>)))
        break;
    }
  }
  */

  return (
    <div>
      <form
        onSubmit={(e) => {
          /** 
          e.preventDefault();
          if ( emailInputRef !== null && passwordInputRef !== null) {
            addAuthor({
              variables: { input: { email: emailInputRef.value, password: passwordInputRef } },
            });
            emailInputRef.value = "";
            passwordInputRef.value = "";
          }
          */
         e.preventDefault();
         if (passwordInputRef !== null) {
          const hashedPassword = bcrypt.hashSync(passwordInputRef.value, 10);

          console.log(passwordInputRef.value);
          console.log(hashedPassword);
         }
         
        }}
      >
        <label>
          Email:
          <input
            type="email"
            ref={(node) => {
              emailInputRef = node;
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            ref={(node) => {
              passwordInputRef = node;
            }}
          />
        </label>
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
}

export default AddAuthor;
