import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./NewsCard.scss";
import { useState } from 'react';

const NewsCard = ({NewsData}) => {
  const [newsActive, setNewsActive] = useState(false);
  return (
      <div>
        <div className="news-card" onClick={() => setNewsActive(!newsActive)}>
          <GatsbyImage 
            loading="eager"
            className="image-news"
            image={getImage(NewsData.Cover?.localFile)}
            alt=""
          />
          <div className="block-text-news">
              <span className="news-header" id="Header">{NewsData.Title}</span>
              <span className="news-more">Читать подробнее...</span>
          </div>
        </div>
          <div className={newsActive ? "about-wrapper about-active" : "about-wrapper about-close"}>
            <span className="about-news" id="ab-news" dangerouslySetInnerHTML={{ __html: NewsData.Text.data.childMarkdownRemark.html }}/>
          </div>
      </div>
  )
}

export default NewsCard;