import React, { useState } from "react";
import SensorList from "./components/SensorList";
import ShowQueries from "./components/ShowQueries";

function App() {
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  return (
    <div>
      <ShowQueries />
      <hr />
      <button onClick={() => setOnlyFavorites(!onlyFavorites)}>
        Toggle favorites only view
      </button>
      <hr />
      <SensorList onlyFavorites={onlyFavorites} />
    </div>
  );
}

export default App;
