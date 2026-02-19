import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

static defaultProps = {
    country: 'us',
    pagesize: 10,
    category: 'health'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

constructor(){
    super()
    this.state = {
      articles : [],
      loading: true,
      page:1,
      totalResults:0
    }

    //console.log(this.state.articles)
  }

 async newsUpdate() {
  let apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(apiurl);
    let parsedData = await data.json() 
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading: false
    })
 }

  async componentDidMount(){
    this.newsUpdate();
  }

  fetchMoreData = async () => {
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
    let data = await fetch(apiurl);
    let parsedData = await data.json() 
    console.log(parsedData)

    // If no more articles are returned, stop the scroll
      if (!parsedData.articles || parsedData.articles.length === 0) {
          this.setState({ totalResults: this.state.articles.length });
          return;
      }

    this.setState({
      page : this.state.page + 1,
      articles:  this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
    })
  }


  hendlePrevClick = async () =>{
    //console.log('prev')
    // let apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c4228a643924643975258edd5ec59b2&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
    // this.setState({loading:true})
    // let data = await fetch(apiurl);
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   page : this.state.page - 1,
    //   articles:parsedData.articles,
    //   loading:false
    // })

    await this.setState({
      page : this.state.page - 1,
    })
    this.newsUpdate();

  }



  hendleNextClick = async () =>{
    //console.log('next')
    // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
    //   //console.log('next')
    //     let apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c4228a643924643975258edd5ec59b2&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(apiurl);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //       page: this.state.page + 1,
    //       articles: parsedData.articles,
    //       loading:false
    //     })
    // }

    await this.setState({
      page : this.state.page + 1,
    })
    this.newsUpdate();

  }


  render() {

    let {newstitlename} = this.props

    return (
      <div>
           <div className='mt-3'>
                <h3 className='text-center mb-5'>Top News {newstitlename}</h3>
                  {this.state.loading && <Spinner />}
                  
                   <InfiniteScroll
                      dataLength={this.state.articles.length}
                      next={this.fetchMoreData}
                      hasMore={this.state.articles.length !== this.state.totalResults}
                      loader={<Spinner />}
                    >
                    <div className='container'>
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
                                  DatePost={element.publishedAt}
                                  newssource={element.source.name}
                                />
                            </div>
                            })
                          }
                        </div>
                  </div>


                  </InfiniteScroll>
      
                  {/* <div className='my-4 d-flex justify-content-between'>
                      <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.hendlePrevClick}>Previous</button>
                      <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} className='btn btn-dark' onClick={this.hendleNextClick}>Next</button>
                  </div> */}
           
            </div>

           
      </div>
    )
  }
}

export default News
