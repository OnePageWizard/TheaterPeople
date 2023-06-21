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
          Text {
            data {
              childMarkdownRemark {
                html
              }
            }
          }
          Images {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.7
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
        News {
          Title
          Text {
            data {
              childMarkdownRemark {
                html
              }
            }
          }
          Cover {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.7
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
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
          <p className="block__text-about" dangerouslySetInnerHTML={{ __html: strapiHomepage.About.Text.data.childMarkdownRemark.html }}/>
          <div className="block__image-about">
            <GatsbyImage 
              className="block__image-about-img"
              image={getImage(strapiHomepage.About.Images[0]?.localFile)}
              alt=""
            />
            <GatsbyImage 
              className="block__image-about-img"
              image={getImage(strapiHomepage.About.Images[1]?.localFile)}
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