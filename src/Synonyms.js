import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  let { synonyms } = props;

  return (
    <ul className="synonyms">
      {synonyms.map((synonym, index) => (
        <li key={index}>{synonym}</li>
      ))}
    </ul>
  );
}
