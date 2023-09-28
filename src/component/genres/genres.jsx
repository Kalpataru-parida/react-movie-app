import React, { useEffect } from "react";
import { getGenresMovie } from "../../services/Genres.service";
import Chip from "@mui/material/Chip";
function genres({ genres, setGenres, selectGenres, setSelectGenres }) {
  
  const handleClick = (genre) =>{
    setSelectGenres([...selectGenres,genre]);
    setGenres(genres.filter((e) => e.id !== genre.id))
  }
  const handleDelete = (genre) =>{
    setSelectGenres(selectGenres.filter((e) => e.id !== genre.id))
    setGenres([...genres,genre]);
  }
  useEffect(() => {
    const fetchGenresMovie = getGenresMovie();
    fetchGenresMovie.then((value) => {
      if (value?.data) {
        const genresId = value?.data.map((e)=>{
          return e.id;
        })
        console.log("genresId ::",genresId);
        setGenres(value?.data);
      }
    });
  }, []);
  return(
  <>
    <div style={{ padding: "5px 0" }}>
    {selectGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          variant="outlined"
          clickable
          onDelete={()=> handleDelete(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          onClick={() => handleClick(genre)}
        />
      ))}
    </div>
  </>
)}

export default genres;
