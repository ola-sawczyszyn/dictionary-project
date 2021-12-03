import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  let { result } = props;
  return (
    <div className="result">
      <section>
        <h2>{result.word}</h2>
        <Phonetics phonetics={result.phonetics} />
      </section>
      {result.meanings.map((meaning, index) => (
        <section key={index}>
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
