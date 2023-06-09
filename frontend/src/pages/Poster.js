import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout/Layout"
import PosterCard from '../components/PosterCard/PosterCard'

import "./Poster.scss"

const Afisha = () => {
  const [posters, setPosters] = useState([])
  const [month,setMonth] = useState([]);

  useEffect(()=>{
    posters.forEach((obj)=>{
      if(month.indexOf(obj.month) === -1){
        setMonth([...month,obj.month])
      }
    })
  },[posters])

  return (
    <Layout HeadActive={true}>
      {month.map((el) =>
      <div className="poster__content">
          <div className="poster__month">
              <div className="poster__header">
                  <span className="poster__header__text">{el}</span>
              </div>
              <div className="poster__block">
                {posters.map((post)=>{if(post.month === el) return(<PosterCard month={post.month} time={post.time} title={post.title} about={post.about} age={post.age}/>)})}
              </div>
          </div>
        </div>)}
    </Layout>
  )
}

export default Afisha