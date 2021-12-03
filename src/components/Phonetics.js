import React from "react";
import "./Phonetics.css";
export default function Phonetics(props) {
  let { phonetics } = props;

  return (
    <div className="phonetics">
      {phonetics.map((phonetic, index) => (
        <div className="phonetic" key={index}>
          <a href={phonetic.audio} rel="noreferrer" target="_blank">
            Listen
          </a>
          <div className="text">{phonetic.text}</div>
        </div>
      ))}
    </div>
  );
}
