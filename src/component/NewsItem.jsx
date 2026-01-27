import React, { Component } from 'react'
import testnewsimg from '../assets/images/testnews-img.jpg'
export class NewsItem extends Component {
  render() {
     let {title, description, imgUrl, newsUrl} = this.props;

    return (
      <div>
         <div className="card">
          <img src={!imgUrl ? testnewsimg:imgUrl} className='card-img-top' alt="cardimg"/>
           <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} className="btn btn-sm btn-primary card-link">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
