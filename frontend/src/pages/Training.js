import React from 'react'
import Layout from '../components/Layout/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


import './Training.scss'

const Training = () => {
  return (
    <Layout>
      <div className='training-wrapper'>
        <div className='training-wrapper__image'>
          <GatsbyImage className='image' image={"#"} alt='#'></GatsbyImage>
          <span className='title'>dfgdfgdfg dfgf</span>
          <span className='about'>dfgdfsfg dfhs gfh sdfdfdfsd</span>
        </div>
        <div className='training-wrapper__buttons'>
          <button>Дети</button>
          <button>Подростки</button>
          <button>Взрослые</button>
        </div>
        <div className='training-wrapper__ages'>
          <div className='title'>Дети</div>
          <span className='text'></span>
        </div>
        <div className='training-wrapper__ages'>
          <div className='title'>Подростки</div>
          <span className='text'></span>
        </div>
        <div className='training-wrapper__ages'>
          <div className='title'>Взрослые</div>
          <span className='text'></span>
        </div>
      </div>
    </Layout>
  )
}

export default Training