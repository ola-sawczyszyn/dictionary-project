import React from "react";
import "./Photos.css";
export default function Photos(props) {
  let { photos } = props;
  return (
    <section>
      <div className="photos">
        {photos.map((photo) => (
          <a
            className="photo"
            key={photo.id}
            href={photo.src.original}
            rel="noreferrer"
            target="_blank"
          >
            <img src={photo.src.landscape} alt={photo.photographer} />
          </a>
        ))}
      </div>
    </section>
  );
}
