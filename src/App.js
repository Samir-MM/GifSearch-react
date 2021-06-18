import React, { useState, useEffect } from "react";
import "./App.css";

const apiURL =
  "https://api.giphy.com/v1/gifs/search?api_key=FSfiPYLhPksvm9GGBX9lwjRq5FyfUzJS&q=hola&limit=10&offset=0&rating=g&lang=en";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        const gifs = data.map((image) => image.images.downsized_medium.url);
        setGifs(gifs);
      });
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
      </section>
    </div>
  );
}
/* FSfiPYLhPksvm9GGBX9lwjRq5FyfUzJS; */

export default App;
