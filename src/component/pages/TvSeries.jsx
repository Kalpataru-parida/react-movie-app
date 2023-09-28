import React, { useState, useEffect } from "react";
import { getTvSeries } from "../../services/GetTvSeries.service";
import Cards from "../../component/cards/cards";
import Genres from "../genres/genresTvSeries";
const myComponentStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

function TvSeries() {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectGenres, setSelectGenres] = useState([]);
  useEffect(() => {
    const fetchTvSeries = getTvSeries();
    fetchTvSeries.then((value) => {
      if (value?.data) {
        setContent(value?.data);
      }
    });
  }, []);
  return (
    <div>
      <Genres
        selectGenres={selectGenres}
        setSelectGenres={setSelectGenres}
        genres={genres}
        setGenres={setGenres}
      />
      <div style={myComponentStyle}>
        {content &&
          content.map((ele) => (
            <Cards
              key={ele.id}
              id={ele.id}
              poster={ele.poster_path}
              title={ele.title || ele.name}
              date={ele.first_air_date || ele.release_date}
              media_type="Tv Series"
              vote_average={ele.vote_average}
            />
          ))}
      </div>
    </div>
  );
}

export default TvSeries;


