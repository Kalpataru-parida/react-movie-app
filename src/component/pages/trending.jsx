import React, { useState, useEffect } from "react";
import { getTrendingMovie } from "../../services/MovieTrending.service";
import Cards from "../../component/cards/cards";


const myComponentStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
}
function trending() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
    const fetchTrendingMovie = getTrendingMovie();
    fetchTrendingMovie.then((value) => {
      if (value?.data) {
        setContent(value?.data);
      }
    });
  }, []);
  return (
    <div>
      <div style={myComponentStyle}>
        {content &&
          content.map((ele) => (
            <Cards
              key={ele.id}
              id={ele.id}
              poster={ele.poster_path}
              title={ele.title || ele.name}
              date={ele.first_air_date || ele.release_date}
              media_type={ele.media_type}
              vote_average={ele.vote_average}
            />
          ))}
      </div>
    </div>
  );
}

export default trending;
