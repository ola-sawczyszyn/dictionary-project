import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
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
  );
}
