import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/scss';
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import './TrainingSlider.scss'
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
  const isActive = [isActiveChild, isActiveTeen, isActiveAdult];
  
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

  console.log('-----------> strapiTraining', strapiTraining);
  return (
    <Layout>
      <div className='training__wrapper'>
        <div className='training__image'>
          <GatsbyImage 
            className='image' 
            image={getImage(strapiTraining.Slide.Cover?.localFile)} 
            alt='#'>
          </GatsbyImage>
          <div className="training__text">
            <span className='title'>{strapiTraining.Slide.Title}</span>
            <span className='about'>{strapiTraining.Slide.Subtitle}</span>
          </div>
        </div>
        <div className='training__buttons'>
          <button className='child' onClick={() => handleClick(1)}> Дети </button>
          <button className='teen' onClick={() => handleClick(2)}> Подростки </button>
          <button className='adult' onClick={() => handleClick(3)}> Взрослые </button>
        </div>
        {strapiTraining.Section.map((el) => { 
          
          let index = null;   

          switch (el.Title[0])
          {
            case 'Д':
              index = 0;
              break;
            case 'П':
              index = 1;
              break;
            case 'В':
              index = 2;
              break;
          }
          
          let countSlide = null;

          if (el.Images !== null) {
            if (el.Images.length >= 8) {
              countSlide = 4;
            }
            else if(el.Images.length >= 6){
              countSlide = 3;
            }
            else if(el.Images.length >= 4) {
              countSlide = 2;
            }
            else {
              countSlide = 1;
            }
          }

          
          return(         
          <div className='training__content__ages'  style={{overflow: isActive[index] ? 'visible' : 'hidden', opacity: isActive[index] ? '1' : '0', height: isActive[index] ? '1000px' : '0', transition: 'all 1s'}}>
            <div className='training__content__title'>{el.Title}</div>
            <span className='training__content__text'>{el.Text}</span>
            {el.Images === null ? 
            (
            <></>
            ) : (
            <>
              <Swiper
                modules={[Pagination, Navigation ]}
                spaceBetween={8}
                slidesPerView={countSlide}
                navigation
                loop={true}
                pagination={{ clickable: true }}
              >
              {el.Images.map((img) => (
                <SwiperSlide>              
                  <GatsbyImage
                  className="swiper-card"
                  image={getImage(img?.localFile)}
                  alt=""
                />
                </SwiperSlide>
              ))}
              </Swiper>
            </>)}
          </div>)
        })}
      </div>
    </Layout>
  )
}

export default Training