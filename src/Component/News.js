import React, {  useEffect, useState } from 'react'
import NewsItem from '../Component/NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';




export default function News(props) {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const updateNews = async () => {
      props.setProgress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
      // this is for spinners
      setloading(true);
      let data = await fetch(url);
      props.setProgress(25);
      let parseData = await data.json();
      props.setProgress(60);
      setarticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setloading(false);
      props.setProgress(100);

    }
    useEffect(() => {
      updateNews();
    }, [])
    // previous click button
    const handlePrevClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page-1}`;
      // this is for spinners
      setloading(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setarticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setloading(false);
      setPage( page - 1);
    }

    // next click button
    const handleNextClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
      // this is for spinners
      setloading(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setarticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setloading(false);
      setPage(page+1);
    }

    return (
      <div className='container'>
        {/* checking condition for spinners  */}
        {loading && <Spinner />}
        <h1 className='text-center'>Top Headlines</h1>
        <div className="row">
          {/* fetching api data */}
          {!loading && articles.map((e) => {
            {/* returning the fetched data */ }
            return (
              <div className="col-md-4 mb-3 " key={e.url}>
                <NewsItem title={e.title ? e.title.slice(0, 40) : ""} desc={e.description ? e.description.slice(0, 100) : ""}
                  src={e.urlToImage ? e.urlToImage : "https://i.guim.co.uk/img/media/dddefeddf45d04950134aaa9f77eb6fb2aca007b/0_293_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b6cc9c5ee356aeff809260fe2db0c168"}
                  url={e.url} />
              </div>
            )
          })}
        </div>
        {/* diabled next and previous button for infinite scroll */}
        <div className="container d-flex justify-content-between">
          <button disabled={ page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr;
            Previous</button>
          <button type="button" disabled={ page > Math.ceil(totalResults /  page)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }





News.defaultProps = {
  country: 'in',
     page: 6,
      category: "general"
}

News.propTypes = {
  country: PropTypes.string,
   page: PropTypes.number,
  category: PropTypes.string,
}
