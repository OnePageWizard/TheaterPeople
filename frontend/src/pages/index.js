import * as React from "react"
import Layout from "../components/Layout/Layout"
import Carousel from "../components/Carousel/Carousel"

import "./index.scss"

const IndexPage = () => {
  const { allStrapiMainSlide, strapiMainpage } = useStaticQuery(graphql`
    query {
      allStrapiMainSlide {
        nodes {
          id
          Header
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData
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
  
  return (
    <Layout>
      <div className="block">
        <Carousel 
            elems = {allStrapiMainSlide.nodes}
            settings = {{
              // https://react-slick.neostack.com/docs/api
              dots: true,
              lazyLoad: true,
              infinite: true,
              autoplay: false,
              speed: 500,
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
      </div>
    </Layout>
  )
}

export default IndexPage