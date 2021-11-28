import React from "react";
import Meaning from "./Meaning";

export default function Definition(props) {
  let { definition } = props;
  return (
    <div className="definition">
      <h2>{definition.word}</h2>
      <p>{definition.phonetic}</p>
      {definition.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </div>
  );
}
