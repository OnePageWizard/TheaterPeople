import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./NewsCard.scss";
import { useState } from 'react';
import { CSSTransition } from "react-transition-group"

const NewsCard = ({NewsData}) => {
  const [newsActive, setNewsActive] = useState(false);
  return (
      <div>
        <div className="news-card" onClick={() => setNewsActive(!newsActive)}>
          <GatsbyImage 
            className="image-news"
            image={getImage(NewsData.Cover?.localFile)}
            alt=""
          />
          <div className="block-text-news">
              <span className="news-header" id="Header">{NewsData.Title}</span>
              <span className="news-more">Читать подробнее...</span>
          </div>
        </div>
        <CSSTransition in={newsActive} timeout={700} classNames={"alert"} unmountOnExit>
          <div className="about-wrapper">
            <span className="about-news" id="ab-news">{NewsData.Text}</span>
          </div>
        </CSSTransition>
      </div>
  )
}

export default NewsCard;