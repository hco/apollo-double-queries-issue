import React from "react";

import { gql, useMutation, useQuery } from "@apollo/client";

const SensorQuery = gql`
  query SensorList($onlyFavorites: Boolean) {
    sensors(where: { favorite_eq: $onlyFavorites }) {
      id
      serial
      favorite
    }
  }
`;

const setFavoriteMutation = gql`
  mutation SetFavorite($id: ID!, $favorite: Boolean!) {
    updateSensor(id: $id, input: { favorite: $favorite }) {
      id
      favorite
    }
  }
`;

function SensorList({ onlyFavorites }) {
  const result = useQuery(SensorQuery, {
    variables: { onlyFavorites: onlyFavorites ? true : undefined },
  });

  const [setFavorite] = useMutation(setFavoriteMutation, {
    refetchQueries: ["SensorList"],
  });

  if (result.loading && !result.data) {
    return <div>Loading</div>;
  }

  return (
    <>
      {result.data.sensors.map((sensor) => (
        <div key={sensor.serial}>
          <button
            onClick={() => {
              setFavorite({
                variables: { id: sensor.id, favorite: !sensor.favorite },
              });
            }}
          >
            Toggle
          </button>
          {sensor.id}:{sensor.favorite ? "Favorite" : "Not a favorite"}{" "}
        </div>
      ))}
    </>
  );
}

export default SensorList;
