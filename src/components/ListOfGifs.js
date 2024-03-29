import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  useEffect(function () {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, []);
  return gifs.map(({ id, title, url }) => (
    <Gif key={id} id={id} title={title} url={url} />
  ));
}
