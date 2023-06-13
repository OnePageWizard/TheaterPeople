import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import './Training.scss'

const Training = () => {
  const [image, setImage] = useState([])
  return (
    <Layout>
      <div className='training__wrapper'>
        <div className='training__image'>
          <GatsbyImage className='image' image={"#"} alt='#'></GatsbyImage>
          <span className='title'>dfgdfgdfg dfgf</span>
          <span className='about'>dfgdfsfg dfhs gfh sdfdfdfsd</span>
        </div>
        <div className='training__buttons'>
          <button className='child'>Дети</button>
          <button className='teen'>Подростки</button>
          <button className='adult'>Взрослые</button>
        </div>
        <div className='training__content'>
          <div className='training__content__ages'>
            <div className='training__content__title'>Дети</div>
            <span className='training__content__text'>Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.</span>
          </div>
          <div className='training__content__ages'>
            <div className='training__content__title'>Подростки</div>
            <span className='training__content__text'>Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.</span>
            <div className='training__content__image'>
                {image.map((img) => { return(<GatsbyImage image={img.src} alt='#' className={'training__content__image__' + image.indexOf(img)}/>)})}
              <div className='training__content__image__7'/>
            </div>
          </div>
          <div className='training__content__ages'>
            <div className='training__content__title'>Взрослые</div>
            <span className='training__content__text'>Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.</span>
            <div className='training__content__image'> </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Training