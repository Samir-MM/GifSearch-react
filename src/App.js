import React, { useState, useEffect } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: "Drwho" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <Gif id={singleGif.id} title={singleGif.title} url={singleGif.url} />
        ))}
      </section>
    </div>
  );
}

export default App;
