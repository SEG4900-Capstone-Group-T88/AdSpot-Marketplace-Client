import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";

const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_API_ENDPOINT,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-r8salmbev4uhqcym.us.auth0.com"
            clientId="H7PEZ5RNCSTyHaTri9uSHxxrLlH1rkdg"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Auth0Provider>
    </React.StrictMode>,
);
