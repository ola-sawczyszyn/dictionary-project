import axios from "axios";
import React, { useState } from "react";
import Definition from "./Definition";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!keyword) {
      return;
    }
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((response) => response.data)
      .then((definitions) => setDefinition(definitions[0]))
      .catch((error) => console.error(error));
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col form-group">
                <input
                  className="form-control"
                  type="search"
                  value={keyword}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <button className="btn btn-primary" type="submit">
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {definition && (
        <div className="row">
          <Definition definition={definition} />
        </div>
      )}
    </div>
  );
}
