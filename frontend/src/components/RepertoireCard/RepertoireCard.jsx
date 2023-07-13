import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./RepertoireCard.scss"

const RepertoireCard = ({ card }) => {
  return (
    <Link
      to={`/repertoire/${card.Title}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="cardContent">
        <GatsbyImage
          loading="eager"
          className="cardContent__image"
          image={getImage(card.Cover?.localFile)}
          alt=""
        />
        {/* <img src={card.Cover.localfile} /> */}
        <span className="cardContent__title">{card.Title}</span>
      </div>
    </Link>
  )
}

export default RepertoireCard
