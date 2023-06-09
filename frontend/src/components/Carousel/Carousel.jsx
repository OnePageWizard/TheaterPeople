import React from "react"
import Slider from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./Carousel.scss"
import "./Carousel-theme.scss"

const Carousel = ({ elems, settings }) => {
  return (
    <div>
      <Slider {...settings}>
        {elems.map(elem => (
          <div>
            <GatsbyImage
              className="slider-post"
              image={getImage(elem.Image?.localFile)}
              alt=""
            />
            {/* <img src={getImage(elem.Image?.localFile)} /> */}
            <div className="slider__text">
              <div className="slider__header">{elem.Header}</div>
              <div className="slider__header-about">{elem.Description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
