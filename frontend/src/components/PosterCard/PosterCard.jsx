import React from "react"
import { Link } from "gatsby" 
// import { GatsbyImage } from "gatsby-plugin-image"

import "./PosterCard.scss"


const PosterCard = props => {
  return (
    <div className="poster__wrapper">
      <div className="poster__dates">
        <div className="poster__date">
          <span>{props.month}</span>
          <span>{props.time}</span>
        </div>
        <div className="poster__age-in-date"><span>{props.age}</span></div>
      </div>
      <div className="poster__image">
        {/* <GatsbyImage
          loading="eager"
          className="poster__image-content"
          image={getImage(props.img?.localFile)}
          alt=""
        /> */}
      </div>
      <div className="poster__name">
        <span className="poster__name__title">{props.title}</span>
        <Link to={`/performance/${props.title}`}>
          <span className="poster__name__about">Подробнее о спектакле...</span>
        </Link>
      </div>
      <div className="poster__age-booking">
        <div className="poster__age-booking__age">
          <span>{props.age}</span>
        </div>
        <div className="poster__age-booking__booking">
          <span>Забронировать место</span>
        </div>
      </div>
    </div>
  )
}

export default PosterCard
