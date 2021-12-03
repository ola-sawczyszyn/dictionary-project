import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary(props) {
  let [query, setQuery] = useState(props.defaultKeyword || "");
  let [keyword, setKeyword] = useState(props.defaultKeyword || "");
  let [result, setResult] = useState(null);

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
    </div>
  );
}
