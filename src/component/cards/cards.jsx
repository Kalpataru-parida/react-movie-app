import { Badge } from '@mui/material'
import React from 'react'
import {img_500} from "../../config";
import "./cards.css"

function cards(  {id,
    poster,
    title,
    date,
    media_type,
    vote_average},) {
  return (
    <div className='cards'>
       <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_500}/${poster}`:<></>}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  )
}

export default cards
