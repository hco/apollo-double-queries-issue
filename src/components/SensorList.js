import React from "react";

import { gql, useQuery } from "@apollo/client";

const SensorQuery = gql`
  query SensorList($onlyFavorites: Boolean) {
    sensors(where: { favorite_eq: $onlyFavorites }) {
      id
      serial
      favorite
    }
  }
`;

function SensorList({ onlyFavorites }) {
  const result = useQuery(SensorQuery, {
    variables: { onlyFavorites: onlyFavorites ? true : undefined },
  });

  console.log(result.data);

  if (result.loading || !result.data) {
    return <div>Loading</div>;
  }

  return (
    <>
      {result.data.sensors.map((sensor) => (
        <div key={sensor.id}>
          {sensor.id}: {sensor.favorite ? "Favorite" : "Not a favorite"}
        </div>
      ))}
    </>
  );
}

export default SensorList;
