import React, { useState, useEffect } from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import Layout from "../components/Layout/Layout"
import useIsSsr from '../utils/isSsr'

import "./performancePage.scss"
import "swiper/scss"
import "swiper/scss/pagination"
import "swiper/scss/navigation"
import "../styles/sliderSwiper.scss"
import "./perfomanceMarkdown.scss"

const PerformancePage = ({ data }) => {

  const currentMonth = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ]

  const isSsr = useIsSsr();
  const [pageWidth, setPageWidth] = useState(isSsr ? null : window.innerWidth);
  const [countSlide, setCountSlide] = useState(null)

  if(!isSsr) {
      window.addEventListener('resize', () => {
      setPageWidth(window.innerWidth)
    })
  }

  useEffect(() => {
    if (data.strapiSpektakli.Media !== null) {
      if (data.strapiSpektakli.Media.length >= 8) {
        setCountSlide(4)
      }
      else if(data.strapiSpektakli.Media.length >= 6){
        setCountSlide(3)
      }
      else if(data.strapiSpektakli.Media.length >= 4) {
        setCountSlide(2)
      }
      else {
        setCountSlide(1)
      }
    }
  }, [pageWidth, data.strapiSpektakli.Media])

  return (
    <Layout>
      <div className="main-content">
        <div className="head-block">
          <div className="background-black"></div>
          <GatsbyImage
            className="head-block__image"
            image={getImage(data.strapiSpektakli.Cover?.localFile)}
            alt=""
          />
          <div className="head-block-name">
            <span className="name-age">
              «{data.strapiSpektakli.Title}» {data.strapiSpektakli.Age}
            </span>
            <span className="perfomance-about-briefly">
              {data.strapiSpektakli.ShortDesc}
            </span>
          </div>
        </div>

        <div className="bottom-block">
          <div className="block-text">
            <div className="left-block">
              <div className="block-premier">
                <span className="conf">ПРЕМЬЕРА СОСТОЯЛАСЬ</span>
                <span className="date">
                  {data.strapiSpektakli.Premiere.slice(8) < 9
                    ? data.strapiSpektakli.Premiere.slice(9)
                    : data.strapiSpektakli.Premiere.slice(8)}{" "}
                  {" " +
                    currentMonth[
                      data.strapiSpektakli.Premiere.slice("-", 7).slice(5) - 1
                    ] +
                    " " +
                    data.strapiSpektakli.Premiere.slice("-", 4) +
                    " года"}
                </span>
              </div>

              <div className="block-director">
                <span className="director-header">РЕЖИССЕР</span>
                <span className="director-name">
                  {data.strapiSpektakli.Director}
                </span>
              </div>
            </div>

            <div className="right-block">
              <span className="about-header">О СПЕКТАКЛЕ</span>
              <span className="about-perfomance">
                <div
                  className="about-perfomance__text"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.strapiSpektakli.Description.data.childMarkdownRemark
                        .html,
                  }}
                />
              </span>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={8}
            slidesPerView={countSlide}
            navigation = {pageWidth > 768}
            loop={true}
            pagination={{ clickable: true }}
          >
            {data.strapiSpektakli.Media.map(el => (
              <SwiperSlide>
                <GatsbyImage
                  className="swiper-card"
                  image={getImage(el?.localFile)}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($Title: String) {
    strapiSpektakli(Title: { eq: $Title }) {
      Title
      Premiere
      ShortDesc
      Description {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      Director
      Age
      Cover {
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              breakpoints: [750, 1000, 1366, 1920]
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
      Media {
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`

export default PerformancePage
