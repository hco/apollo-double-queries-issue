import React, { useState } from "react";
import SensorList from "./components/SensorList";
import ShowQueries from "./components/ShowQueries";

function App() {
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [showSensorList, setShowSensorList] = useState(false);
  return (
    <div>
      <ShowQueries />
      <hr />
      <button onClick={() => setOnlyFavorites(!onlyFavorites)}>
        Toggle favorites only view
      </button>
      <button onClick={() => setShowSensorList(!showSensorList)}>
        Show Sensor List
      </button>

      <hr />
      {showSensorList && <SensorList onlyFavorites={onlyFavorites} />}
    </div>
  );
}

export default App;
