import React from "react";

export default function Movie({element, height, func}) {
  return (
    <div>
      <h3>{element.Title}</h3>
      <img src={element.Images[0]} alt={element.Poster} height="100" />
      <p>{element.Plot}</p>
      <button
        className="btn btn-success"
        onClick={() => func(element.Plot)}
      >
        Click Here
      </button>
    </div>
  );
}
