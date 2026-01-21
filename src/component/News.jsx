import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

constructor(){
    super()
    this.state = {
      articles : [],
      loading: false
    }

    //console.log(this.state.articles)
  }


  async componentDidMount(){
    let apiurl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8c4228a643924643975258edd5ec59b2'
    let data = await fetch(apiurl);
    let parsedData = await data.json() 
   // console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div>
           <div className='container mt-4'>
                       <p>Top News</p>
           
                       <div className='row'>
                         {
                           this.state.articles.map((element)=>{
                             //console.log(element)
           
                             return <div className='col-md-4' key={element.url}>
                                <NewsItem 
                                 title={element.title.slice(0,120)} 
                                 description={element.description} 
                                 imgurl={element.urlToImage} 
                                 newsUrl={element.url}
                                />
                           </div>
                           })
                         }
                       </div>
           
                          
           
                   </div>

           
      </div>
    )
  }
}

export default News
