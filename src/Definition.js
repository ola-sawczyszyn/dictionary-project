import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  let { definition } = props;
  return (
    <>
      <div className="meaning__definition">{definition.definition ?? ""}</div>
      <div className="meaning__example">{definition.example ?? ""}</div>
      <Synonyms synonyms={definition.synonyms} />
    </>
  );
}
