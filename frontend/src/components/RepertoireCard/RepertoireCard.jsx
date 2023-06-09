import React from "react"

import "./RepertoireCard.scss"

const RepertoireCard = props => {
  return (
    <div className="cardContent">
      <img className="cardContent__image" src={props.img} alt="#" />
      <span className="cardContent__title">{props.title}</span>
    </div>
  )
}

export default RepertoireCard
