import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  let { result } = props;
  return (
    <div className="result">
      <h2>{result.word}</h2>
      <p>{result.phonetic}</p>
      {result.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </div>
  );
}
