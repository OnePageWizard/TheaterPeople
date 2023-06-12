import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./RepertoireCard.scss"

const RepertoireCard = ({ img, title }) => {
  return (
    <div className="cardContent">
      <GatsbyImage
        className="cardContent__image"
        image={getImage(img?.localfile)}
        alt=""
      />
      <span className="cardContent__title">{title}</span>
    </div>
  )
}

export default RepertoireCard
