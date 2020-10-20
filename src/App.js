import React from "react";

import { gql, useQuery } from "@apollo/client";

function App() {
  const result = useQuery(gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `);

  if (result.loading || !result.data) {
    return <div>Loading</div>;
  }

  return <div>{result.data.rates.length}</div>;
}

export default App;
