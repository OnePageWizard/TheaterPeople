import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout/Layout"
import PosterCard from '../components/PosterCard/PosterCard'
import { useStaticQuery, graphql } from 'gatsby'

import "./Poster.scss"

const Afisha = () => {
  const currentMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
  const strapiPosters = useStaticQuery(graphql `
    query MyQuery {
      allStrapiAfisha {
        nodes {
          Afisha {
            Card {
              Age
              Date
              Desc
              Time
              Title
            }
            Header
          }
        }
      }
    }
  `)
  
  const [posters, setPosters] = useState([])
  const [month,setMonth] = useState([]);
  console.log(strapiPosters)
  console.log(strapiPosters.allStrapiAfisha.nodes[0].Afisha[0].Card[0].Date.slice("-", 5));
  useEffect(()=>{
    posters.forEach((obj)=>{
      if(month.indexOf(obj.month) === -1){
        setMonth([...month,obj.month])
      }
    })
  },[posters])

  return (
    <Layout HeadActive={true}>
      {strapiPosters.allStrapiAfisha.nodes[0].Afisha.map((el) =>
      <div className="poster__content">
          <div className="poster__month">
              <div className="poster__header">
                  <span className="poster__header__text">{el.Header}</span>
              </div>
              <div className="poster__block">
                {el.Card.map((post)=><PosterCard month={post.Date.slice(8) > 9 ? post.Date.slice(8) + " " + currentMonth[post.Date.slice(6).slice("-", 1) - 1] : post.Date.slice(9) + " " + currentMonth[post.Date.slice(6).slice("-", 1) - 1]} time={post.Time.slice(":", 5)} title={post.Title} about={post.Desc} age={post.Age}/>)}
              </div>
          </div>
        </div>)}
    </Layout>
  )
}

export default Afisha