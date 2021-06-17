import React, { useState } from "react";
import "./App.css";



function App() {
  const { gifs, setGifs } = useState([]);
  return (
    <div className="App">
      <section className="App-content">
        <img src={gifs} alt="" />
      </section>
    </div>
  ); 
}
/* FSfiPYLhPksvm9GGBX9lwjRq5FyfUzJS; */

export default App;
