import React from "react"
import Slider from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./Carousel.scss"
import "./Carousel-theme.scss"

const Carousel = ({ elems, settings }) => {
  return (
    <div>
      <Slider {...settings}>
        {
          elems.map((elem) => (
            <div>
                <GatsbyImage
                  className="slider-post"
                  image={getImage(elem.Image?.localFile)}
                  alt=""
                />
                {/* <img src={getImage(elem.Image?.localFile)} /> */}
              <div className="slider-header">{elem.Header}</div>
              <div className="slider-header">{elem.Description}</div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Carousel