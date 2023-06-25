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
          <div className="slider-wrapper-black">
            <GatsbyImage
              loading="eager"
              className="slider-post"
              image={getImage(elem.Cover?.localFile)}
              alt=""
            />
            <div className="slider__text">
              <div className="slider__header">{elem.Title}</div>
              <div className="slider__header-about">{elem.Subtitle}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
