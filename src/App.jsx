import { useState } from "react";
import "./App.css";
import { movies } from "./movies";
import Movie from "./Movie";

function App() {
  const [moviesList, setMovieList] = useState(movies);
  const printPlot = (str) => {
    console.log(str);
  };
  return (
    <>
      {moviesList.map((element, index) => {
        return (
          <Movie key={index} element={element} height="100" func={printPlot} />
        );
      })}
    </>
  );
}

export default App;
