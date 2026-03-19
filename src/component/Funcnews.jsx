import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const Funcnews = (props) =>  {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage]= useState(1);
  const [totalResults, setTotalResults] = useState(0);



 const newsUpdate = async () => {
   props.setProgress(30)
  let apiurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`
    setLoading(true);
    let data = await fetch(apiurl);
    props.setProgress(60)
    let parsedData = await data.json() 
    props.setProgress(80)
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
 }


  useEffect(() =>{
      newsUpdate();
  }, [])

  const fetchMoreData = async () => {
    props.setProgress(30)
    let apiurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pagesize}`
    let data = await fetch(apiurl);
    props.setProgress(60)
    let parsedData = await data.json() 
    props.setProgress(80)
    console.log(parsedData)

    // If no more articles are returned, stop the scroll
      if (!parsedData.articles || parsedData.articles.length === 0) {
          setTotalResults(articles.length);
          return;
      }

      setPage(page + 1);
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);

    
     props.setProgress(100)
  }



    return (
      <div>
           <div className='mt-3'>
                <h3 className='text-center mb-5'>Top News</h3>
                  {loading && <Spinner />}
                  
                   <InfiniteScroll
                      dataLength={articles.length}
                      next={fetchMoreData}
                      hasMore={articles.length !== totalResults}
                      loader={<Spinner />}
                    >
                    <div className='container'>
                        <div className='row'>
                          {
                            articles.map((element)=>{
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
      
            </div>

           
      </div>
    )
  
}

Funcnews.defaultProps = {
    country: 'us',
    pagesize: 10,
    category: 'health'
  }

Funcnews.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

export default Funcnews
