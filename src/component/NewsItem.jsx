import React, { Component } from 'react'
import testnewsimg from '../assets/images/testnews-img.jpg'
export class NewsItem extends Component {
  render() {
     let {title, description, imgUrl, newsUrl, DatePost, newssource} = this.props;

    return (
      <div>
         <div className="card">
          <img src={!imgUrl ? testnewsimg:imgUrl} className='card-img-top' alt="cardimg" style={{height: "200px"}}/>
           <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>

                <p className='card-text d-flex justify-content-between' style={{fontSize: '14px'}}>
                  <span>Posted Date : {new Date(DatePost).toLocaleDateString("en-GB", {timeZone: "UTC"}).replaceAll("/", "-")}</span>
                  <span>News Source : {newssource}</span>
                </p>

                <div className='text-center mt-4'>
                  <a href={newsUrl} className="btn btn-sm btn-primary card-link">Read More</a>
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
