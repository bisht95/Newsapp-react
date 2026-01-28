import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

constructor(){
    super()
    this.state = {
      articles : [],
      loading: false,
      page:1
    }

    //console.log(this.state.articles)
  }


  async componentDidMount(){
    let apiurl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c4228a643924643975258edd5ec59b2&page=1&pageSize=16'
    let data = await fetch(apiurl);
    let parsedData = await data.json() 
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }


  hendlePrevClick = async () =>{
    //console.log('prev')
    let apiurl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c4228a643924643975258edd5ec59b2&page=${this.state.page - 1}&pageSize:16`
    let data = await fetch(apiurl);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      page : this.state.page - 1,
      articles:parsedData.articles
    })
  }



  hendleNextClick = async () =>{
    //console.log('next')

    if(this.state.page +1 > Math.ceil(this.state.totalResults/16)){
      //console.log('next')
    }

    else{
        let apiurl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c4228a643924643975258edd5ec59b2&page=${this.state.page + 1}&pageSize=16`;
        let data = await fetch(apiurl);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        })
    }

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
      
                        return <div className='col-md-4 mb-3' key={element.url}>
                          <NewsItem 
                            title={element.title} 
                            description={element.description} 
                            imgUrl={element.urlToImage} 
                            newsUrl={element.url}
                          />
                      </div>
                      })
                    }
                  </div>
      
                  <div className='my-4 d-flex justify-content-between'>
                      <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.hendlePrevClick}>Previous</button>
                      <button className='btn btn-dark' onClick={this.hendleNextClick}>Next</button>
                  </div>
           
            </div>

           
      </div>
    )
  }
}

export default News
