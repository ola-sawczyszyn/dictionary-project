import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos";
import Result from "./Result";

let pexelAxiosConfig = {
  headers: {
    Authorization: "563492ad6f9170000100000187af803c0963476d8745cf592833ee00",
  },
};

export default function Dictionary(props) {
  let [query, setQuery] = useState(props.defaultKeyword || "");
  let [keyword, setKeyword] = useState(props.defaultKeyword || "");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  useEffect(() => {
    if (!keyword) {
      setResult(null);
      return;
    }
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((response) => response.data)
      .then((results) => setResult(results[0]))

      .catch((error) => console.error(error));
  }, [keyword]);

  useEffect(() => {
    setPhotos(null);
    if (!result) {
      return;
    }
    let url = `https://api.pexels.com/v1/search?query=${result.word}&per_page=9`;
    axios
      .get(url, pexelAxiosConfig)
      .then((response) => response.data)
      .then((data) => setPhotos(data.photos));
  }, [result]);

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(query);
  }

  return (
    <div className="dictionary">
      <section>
        <h1> What are you looking for? </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="hint">For example: Sunset, Yoga, Dog</div>
        </form>
      </section>
      {result && <Result result={result} />}
      {photos && <Photos photos={photos} />}
    </div>
  );
}
