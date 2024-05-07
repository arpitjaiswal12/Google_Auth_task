import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const domain_url =import.meta.env.VITE_APP_DOMAIN_URL;
console.log(domain_url);
const client_Id = import.meta.env.VITE_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain_url}
      clientId={client_Id}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
