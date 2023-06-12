import React from 'react'
import Layout from '../components/Layout/Layout'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import RepertoireCard from '../components/RepertoireCard/RepertoireCard'

import "./Repertoire.scss"

const Repertoire = () => {
  const { allStrapiSpektakli } = useStaticQuery(graphql`
    {
      allStrapiSpektakli {
        nodes {
          Title
          Cover {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  breakpoints: [750, 1000, 1366, 1920]
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout HeadActive={true}>
      <div className='reportoire__wrapper'>
        {allStrapiSpektakli.nodes.map((obj) => <RepertoireCard img={obj.Cover} title={obj.Title}/>)}
      </div>
    </Layout>
  )
}

export default Repertoire