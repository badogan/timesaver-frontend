import React from 'react'

const PresentNews = (props) => {

    const { news } = props

    return (
        <div className="news-container wrapper">
            {news.map((n, index) =>
                !!(n.urlToImage) ?
                    <div key={index} className="eachnews">
                        <img className="image" alt="" src={n.urlToImage}></img>
                        {/* <h5>{n.author}</h5> */}
                    </div>
                    : null
            )}
        </div>
    )
}

export default PresentNews;