import "./App.css";
import AddUser from "./AddUser";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    if (isAuthenticated) {
        console.log(user);
        getAccessTokenSilently().then((token) => {
            console.log(token);
            fetch("https://dev-r8salmbev4uhqcym.us.auth0.com/api/v2/users", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((response) => console.log(response));
        });
    }

    return (
        <div>
            <LoginButton />
            <AddUser />
        </div>
    );
}

export default App;
