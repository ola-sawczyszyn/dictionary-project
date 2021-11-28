import React from "react";
import "./Meaning.css";
export default function Meaning(props) {
  let { meaning } = props;
  return (
    <div className="meaning">
      <h3 className="meaning__part-of-speach">{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => (
        <React.Fragment key={index}>
          <div className="meaning__definition">
            {definition.definition ?? ""}
          </div>
          <div className="meaning__example">{definition.example ?? ""}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
