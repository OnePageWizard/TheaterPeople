import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import "./performancePage.scss";
import 'swiper/scss';
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./performanceSlider.scss";

const performancePage = ({ data }) => {
  const currentMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
  
  return (
    <Layout>
      <div class="main-content">
          <div class="head-block">
              <GatsbyImage
                className="head-block__image"
                image={getImage(data.strapiSpektakli.Cover?.localFile)}
                alt=""
              />
              <div class="head-block-name">
                  <span class="name-age">«{data.strapiSpektakli.Title}» {data.strapiSpektakli.Age}</span>
                  <span class="perfomance-about-briefly">{data.strapiSpektakli.ShortDesc}</span>
              </div>
          </div>

          <div class="bottom-block">
              <div class="block-text">
                  <div class="left-block">
                      <div class="block-premier">
                          <span class="conf">ПРЕМЬЕРА СОСТОЯЛАСЬ</span>
                          <span class="date">{data.strapiSpektakli.Premiere.slice(8) < 9 ? data.strapiSpektakli.Premiere.slice(9) : data.strapiSpektakli.Premiere.slice(8)} {" " + currentMonth[data.strapiSpektakli.Premiere.slice("-", 7).slice(5)-1] + " " + data.strapiSpektakli.Premiere.slice("-", 4) + " года"}</span>
                      </div>

                      <div class="block-director">
                          <span class="director-header">РЕЖИССЕР</span>
                          <span class="director-name">{data.strapiSpektakli.Director}</span>
                      </div>
                  </div>

                  <div class="right-block">
                      <span class="about-header">О СПЕКТАКЛЕ</span>
                      <span class="about-perfomance">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data.strapiSpektakli.Description.data.childMarkdownRemark.html,
                            }}
                          />
                      </span>
                  </div>
              </div>
              <Swiper
                modules={[Pagination, Navigation ]}
                spaceBetween={8}
                slidesPerView={4}
                navigation
                loop={true}
                pagination={{ clickable: true }}
              >
              {data.strapiSpektakli.Media.map((el) => (
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
      Media{
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

export default performancePage
