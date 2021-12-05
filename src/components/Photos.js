import React from "react";

export default function Photos(props) {
  let { photos } = props;
  return (
    <section>
      <div className="photos">
        {photos.map((photo) => (
          <div className="photo" key={photo.id}>
            <a href={photo.src.original} ref="noreferrer">
              <img src={photo.src.landscape} alt={photo.photographer} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
