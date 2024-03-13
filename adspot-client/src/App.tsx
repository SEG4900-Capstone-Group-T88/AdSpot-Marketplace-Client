import "./App.css";
import AddUser from "./AddUser";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    /* fetch("https://dev-r8salmbev4uhqcym.us.auth0.com/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_id: "NtOLaZSiHePpbYDe3GFOtPzKVVRlcUJq",
            client_secret:
                "naaz2BUFKCfhXKde6sg-k0nTfdB2n-OgeHHSXAXyvb8WNz8mbc1w7AFVd37TonRS",
            audience: "https://adspot/api",
            grant_type: "client_credentials",
        }),
    }).then((response) => {
        response.json().then((data) => console.log(data));
    }); */

    if (isAuthenticated) {
        console.log(user);
        getAccessTokenSilently().then((token) => {
            console.log(token);
        });
    }

    return (
        <div>
            {isAuthenticated && <h1>Authenticated</h1>}
            <LoginButton />
            <AddUser />
        </div>
    );
}

export default App;
