import React, {useState,useEffect} from 'react'
import GetSelectionsAndNews from '../components/GetSelectionsAndNews'
import PresentNews from '../components/PresentNews'

const PageNews = () => {

    const [news,setNews] = useState([])
    const updateNews = (news) => setNews(news)

    return(
        <React.Fragment>
            <GetSelectionsAndNews updateNews={updateNews}/>
            <PresentNews news={news}/>
        </React.Fragment>
    )
}

export default PageNews;