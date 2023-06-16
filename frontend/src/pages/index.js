import * as React from "react"
import Layout from "../components/Layout/Layout"
import Carousel from "../components/Carousel/Carousel"
import { useStaticQuery, graphql } from "gatsby"
import NewsCard from "../components/NewsCard/NewsCard"

import "./index.scss"

const IndexPage = () => {
  const { allStrapiNew, allStrapiMainSlide, strapiMainpage } = useStaticQuery(graphql`
    {
      allStrapiNew {
        nodes {
          Header
          Text {
            data {
              Text
            }
          }
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      allStrapiMainSlide {
        nodes {
          id
          Header
          Image {
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
          Description
        }
      }
      strapiMainpage {
        Header
        Text {
          data {
            Text
          }
        }
      }
    }
  `)
  console.log(allStrapiNew);
  return (
    <Layout>
      <div className="block">
        <Carousel 
            elems = {allStrapiMainSlide.nodes}
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
          <h1 className="block__header-about">{strapiMainpage.Header}</h1>
          <p className="block__text-about">{strapiMainpage.Text.data.Text}</p>
        </div>
        <div class="heading_news">
          НОВОСТИ
        </div>
        <div class="main_block-news">
          {allStrapiNew.nodes.map((post) => (
            <NewsCard NewsData={post}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage