import { ApolloConsumer, useApolloClient } from "@apollo/client";
import React, { useEffect, useState } from "react";

const ShowQueries = () => {
  const client = useApolloClient();
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    setInterval(() => {
      setQueries(Array.from(client.queryManager.queries));
    }, 1000);
  }, []);
  console.log(queries);
  return (
    <div>
      {queries.map(([index, query]) => (
        <pre key={index} style={{ border: "1px solid grey" }}>
          {query.document.loc.source.body}
        </pre>
      ))}
    </div>
  );
};

export default ShowQueries;
