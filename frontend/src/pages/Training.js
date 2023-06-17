import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"


import './Training.scss'

const Training = () => {
  const { strapiTraining } = useStaticQuery(graphql`
    {
      strapiTraining {
        Slide {
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
        Section {
          Title
          Text
          Images {
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
      <div className='training__wrapper'>
        <div className='training__image'>
          <GatsbyImage 
            className='image' 
            image={getImage(strapiTraining.Slide.Cover?.localFile)} 
            alt='#'>
          </GatsbyImage>
          <span className='title'>{strapiTraining.Slide.Title}</span>
          <span className='about'>{strapiTraining.Slide.Subtitle}</span>
        </div>
        <div className='training__buttons'>
          <button className='child'>Дети</button>
          <button className='teen'>Подростки</button>
          <button className='adult'>Взрослые</button>
        </div>
        {
          strapiTraining.Section.map((elem) => { 
            return(
              <div className='training__content__ages'>
                <div className='training__content__title'>{elem.Title}</div>
                <span className='training__content__text'>{elem.Text}</span>
              </div>
            )
          }
          )
        }
      </div>
    </Layout>
  )
}

export default Training