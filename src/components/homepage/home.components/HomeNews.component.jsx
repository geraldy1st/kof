import React, { Component } from 'react';
import NewsFeed from '../../../data/newsfeed.json';
import './homeNews.styles.css';

class HomeNews extends Component {
  render() {
    return (
      <div>
        {NewsFeed.map((newsDetails) => {
          return (
            <div key={newsDetails.id} className="home-news">
              <div className="news1">
                <img src={newsDetails.img} alt="" />
              </div>
              <div className="news2">
                <h4 className="news-title">{newsDetails.title}</h4>
                <p className="news-text">{newsDetails.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomeNews;
