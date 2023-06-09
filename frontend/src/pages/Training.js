import React from 'react'
import Layout from '../components/Layout/Layout'
import { GatsbyImage,get } from 'gatsby-plugin-image'

import './Training.scss'

const Training = () => {
  return (
    <Layout>
      <div className='training-wrapper'>
        <div className='training-wrapper__image'>
          <GatsbyImage className='image' image={"#"} alt='#'></GatsbyImage>
        </div>
        <div className='training-wrapper__buttons'>
          <button>Дети</button>
          <button>Подростки</button>
          <button>Взрослые</button>
        </div>
        <div className='training-wrapper__child'>
        </div>
        <div className='training-wrapper__teens'>
        </div>
        <div className='training-wrapper__adult'>
        </div>
      </div>
    </Layout>
  )
}

export default Training