import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/scss';
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import './Training.scss'
import "../styles/sliderSwiper.scss"


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
          Text {
            data {
              childMarkdownRemark {
                html
              }
            }
          }
          Video {
            Header
            URL
          }
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
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const isActive = [isActiveChild, isActiveTeen, isActiveAdult];
  
  window.addEventListener('resize', () => {
    setPageWidth(window.innerWidth)
  })
  
  const handleClick = (el) => {
    switch (el)
    {
      case 0:
        const container0 = document.getElementById('contentParent')
        const nowActive0 = document.getElementById(`${el}`)
        container0.insertBefore(nowActive0, container0.firstChild);

        setIsActiveTeen(false)
        setIsActiveAdult(false)
        setTimeout(() => {
          setIsActiveChild(current => !current);
        }, 10);
        break;
      case 1:
        const container1 = document.getElementById('contentParent')
        const nowActive1 = document.getElementById(`${el}`)
        container1.insertBefore(nowActive1, container1.firstChild);

        setIsActiveChild(false)
        setIsActiveAdult(false)
        setTimeout(() => {
          setIsActiveTeen(current => !current);
        }, 10);
        break;
      case 2:
        const container2 = document.getElementById('contentParent')
        const nowActive2 = document.getElementById(`${el}`)
        container2.insertBefore(nowActive2, container2.firstChild);

        setIsActiveChild(false)
        setIsActiveTeen(false)
        setTimeout(() => {
          setIsActiveAdult(current => !current);
        }, 10);
        break;
        default:
          break;
    }
  };



  return (
    <Layout>
      <div className='training__wrapper'>
        <div className='training__image'>
          <GatsbyImage
            loading="eager"
            className='image' 
            image={getImage(strapiTraining.Slide.Cover?.localFile)} 
            alt='#'>
          </GatsbyImage>
          <div class="block-name">
            <span className='block-name__title'>{strapiTraining.Slide.Title}</span>
            <span className='block-name__about'>{strapiTraining.Slide.Subtitle}</span>
          </div>
        </div>
        <div className='training__buttons'>
          <button className={ isActiveChild & pageWidth < 768 ? 'child active' : 'child'} onClick={() => handleClick(0)}>Дети</button>
          <button className={ isActiveTeen & pageWidth < 768 ? 'teen active' : 'teen'} onClick={() => handleClick(1)}>Подростки</button>
          <button className={ isActiveAdult & pageWidth < 768 ? 'adult active' : 'adult'} onClick={() => handleClick(2)}>Взрослые</button>
        </div>
        <div id='contentParent' className='training__content'>
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
              default:
                break;
            }
            
            let countSlide = null;

            if (el.Images !== null) {
              if (el.Images.length >= 8 & pageWidth > 1024) {
                countSlide = 4;
              }
              else if(el.Images.length >= 6 & pageWidth > 1024){
                countSlide = 3;
              }
              else if(el.Images.length >= 4 & pageWidth > 768) {
                countSlide = 2;
              }
              else {
                countSlide = 1;
              }
            }

            
            return(         
            <div id = {`${index}`} className={isActive[index] ? `training__content__${index} open` : `training__content__${index} close`}>
              <div className='training__content__title'>{el.Title}</div>
              <span className='training__content__text' dangerouslySetInnerHTML={{ __html: el.Text.data.childMarkdownRemark.html}}/>
              <div className='training__content__video'>
                {el.Video === null ? 
                (
                <></>
                ) : (
                <>
                  {el.Video.map((video) => (
                    <iframe
                    className='video'
                    src={`https://www.youtube.com/embed/${video.URL}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}
                    html,body{height:100%}
                    img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                    </style>
                    <a href=https://www.youtube.com/embed/${video.URL}?autoplay=1>
                    <img src=https://img.youtube.com/vi/${video.URL}/hqdefault.jpg alt='${video.Header}'>
                    <span>▶</span>
                    </a>`}
                    title={video.Header}>
                  </iframe>
                  ))}
                </>)}
              </div>
              {el.Images === null ? 
              (
              <></>
              ) : (
              <>
              <Swiper
              modules={[Pagination, Navigation ]}
              spaceBetween={8}
              slidesPerView={countSlide}
              navigation = {pageWidth > 768}
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
            </Swiper></>
              )
              }
            </div>)
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Training


                  
