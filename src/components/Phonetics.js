import React from "react";

export default function Phonetics(props) {
  let { phonetics } = props;

  return (
    <div className="phonetics">
      {phonetics.map((phonetic, index) => (
        <div key={index}>
          <a href={phonetic.audio} target="_blank">
            Listen
          </a>
          <br />
          {phonetic.text}
        </div>
      ))}
    </div>
  );
}
