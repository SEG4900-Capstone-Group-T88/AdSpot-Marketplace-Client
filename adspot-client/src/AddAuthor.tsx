import { useMutation } from "@apollo/client";
import { gql } from "../src/__generated__/gql";
import bcrypt from "bcryptjs";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function AddAuthor() {
  let emailInputRef: HTMLInputElement | null;
  let passwordInputRef: HTMLInputElement | null;

  const query = gql(`
    mutation AddUser($input: AddUserInput!) {
      addUser(input: $input) {
        user {
          email
          password
        }
      }
    }
  `);
  const [addUser, { data, loading }] = useMutation(query);

  if (loading) return "Creating user ...";

  


  return (
    <div>
      <form
        onSubmit={(e) => {
         e.preventDefault();
         if ( emailInputRef !== null && passwordInputRef !== null) {
          addUser({
            variables: { input: { email: emailInputRef.value, password: bcrypt.hashSync
              (passwordInputRef.value, 10) } },
          });
          emailInputRef.value = "";
          passwordInputRef.value = "";
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
