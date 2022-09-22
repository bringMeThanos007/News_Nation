import React from 'react'




export default function NewsItem(props) {

  let {title , desc,src, url} = props;
  return (
    <div>
        <div className="card" >
          <img src={src}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={url} target="_blank" className="btn btn-sm btn-success">Read More</a>
          </div>
        </div>
      </div>
  )
}

