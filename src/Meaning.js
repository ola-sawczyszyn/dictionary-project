import React from "react";
import "./Meaning.css";
import Definition from "./Definition";
export default function Meaning(props) {
  let { meaning } = props;
  return (
    <div className="meaning">
      <h3 className="meaning__part-of-speach">{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => (
        <Definition definition={definition} key={index} />
      ))}
    </div>
  );
}
