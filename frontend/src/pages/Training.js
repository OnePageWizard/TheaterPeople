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

  const [isActiveChild, setIsActiveChild] = useState(false);
  const [isActiveTeen, setIsActiveTeen] = useState(false);
  const [isActiveAdult, setIsActiveAdult] = useState(false);
  
  const handleClick = (el) => {
    switch (el)
    {
      case 1:
        setIsActiveChild(current => !current);
        setIsActiveTeen(false)
        setIsActiveAdult(false)
        break;
      case 2:
        setIsActiveTeen(current => !current);
        setIsActiveChild(false)
        setIsActiveAdult(false)
        break;
      case 3:
        setIsActiveAdult(current => !current);
        setIsActiveChild(false)
        setIsActiveTeen(false)
        break;
    }
  };

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
          <button className='child' onClick={() => handleClick(1)}> Дети </button>
          <button className='teen' onClick={() => handleClick(2)}> Подростки </button>
          <button className='adult' onClick={() => handleClick(3)}> Взрослые </button>
        </div>
        <div className='training__content'>
          <div className='training__content__ages'  style={{overflow: isActiveChild ? 'visible' : 'hidden', opacity: isActiveChild ? '1' : '0', height: isActiveChild ? 'auto' : '0', transition: ' 1s'}}>
            <div className='training__content__title'>{strapiTraining.Section[0].Title}</div>
            <span className='training__content__text'>{strapiTraining.Section[0].Text}</span>
          </div>
          <div className='training__content__ages'  style={{overflow: isActiveTeen ? 'visible' : 'hidden', opacity: isActiveTeen ? '1' : '0', height: isActiveTeen ? 'auto' : '0', transition: 'all 1s'}}>
            <div className='training__content__title'>{strapiTraining.Section[1].Title}</div>
            <span className='training__content__text'>{strapiTraining.Section[1].Text}</span>
          </div>
          <div className='training__content__ages'  style={{overflow: isActiveAdult ? 'visible' : 'hidden', opacity: isActiveAdult ? '1' : '0', height: isActiveAdult ? 'auto' : '0', transition: 'all 1s'}}>
            <div className='training__content__title'>{strapiTraining.Section[2].Title}</div>
            <span className='training__content__text'>{strapiTraining.Section[2].Text}</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Training