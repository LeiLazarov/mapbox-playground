import React from 'react';
import './App.css';
import { MapContextProvider } from "./context/mapContext";
import Map from "./components/Map";

function App() {
  return (
    <MapContextProvider>
      <div className="App">
        <Map />  
      </div>
    </MapContextProvider>
  );
}

export default App;
