import * as React from "react"
import Layout from "../components/Layout/Layout"
import Carousel from "../components/Carousel/Carousel"
import { useStaticQuery, graphql } from "gatsby"
import NewsCard from "../components/NewsCard/NewsCard"

import "./index.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const { strapiHomepage } = useStaticQuery(graphql`
    {
      strapiHomepage {
        Slider {
          Title
          Subtitle
          Cover {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  breakpoints: [750, 1000, 1366, 1920]
                  aspectRatio: 1.7
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
        About {
          Title
          Text
        }
        News {
          Title
          Text
          Cover {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="block">
        <Carousel 
            elems = {strapiHomepage.Slider}
            settings = {{
              // https://react-slick.neostack.com/docs/api
              dots: true,
              infinite: true,
              autoplay: true,
              speed: 750,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              initialSlide: 0,
              navButtonsAlwaysVisible: false,
            }
            }
        />
        <div className="block__text-wrapper">
          <h1 className="block__header-about">{strapiHomepage.About.Title}</h1>
          <p className="block__text-about">{strapiHomepage.About.Text}</p>
          <div className="block__image-about">
            <GatsbyImage 
              className="block__image-about-img"
              image={getImage(strapiHomepage.News[0].Cover?.localFile)}
              alt=""
            />
            <GatsbyImage 
              className="block__image-about-img"
              image={getImage(strapiHomepage.News[1].Cover?.localFile)}
              alt=""
            />
          </div>
        </div>
        <div className="heading_news">
          <p>НОВОСТИ</p>
        </div>
        <div class="main_block-news">
          {strapiHomepage.News.map((post) => (
            <NewsCard NewsData={post}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage