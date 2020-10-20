import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client2 = new ApolloClient({
  uri: "https://fakeql.com/graphql/a4be664b7c9ef465851a26484b329e73",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

window["client2"] = client2;

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client2}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
