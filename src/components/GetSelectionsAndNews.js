import React, { useState,useEffect } from "react";
import API from '../APIsHelpers/API'

const GetSelectionsAndNews = (props) => {

    const {updateNews} = props

    const COUNTRY_SELECTIONS = ["gb", "us", "de", "nl", "fr","ru"];
    const CATEGORY_SELECTIONS = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

    const [countrySelected, setCountrySelected] = useState(COUNTRY_SELECTIONS[0]);
    const [categorySelected, setCategorySelected] = useState(CATEGORY_SELECTIONS[0])
    const [getNewsTriggered,setGetNewsTriggered] = useState(null)

    const updateCountrySelected = (event) => setCountrySelected(event.target.value)
    const updateCategorySelected = (event) => setCategorySelected(event.target.value)

    const fetchNews = () => {
        //TODO: Deal with multiple pages, etc here (by adding/managing states)
        //DONE - Pass results up only if all is fine
        setGetNewsTriggered(false)
        API.getNews(countrySelected,categorySelected).then(data=>{
            if (data.status==='ok' || data.status === 'OK') {
                updateNews(data.articles)
            }
        })
    }

    useEffect(() => {
        getNewsTriggered && fetchNews()
      }, [getNewsTriggered]);

    return (
        <div className="getselections-container wrapper">
            <label>Country:</label>
            <select onChange={updateCountrySelected}>
                {COUNTRY_SELECTIONS.map((selection, index) => <option key={index} value={selection}>{selection}</option>)}
            </select>
            <label>Category:</label>
            <select onChange={updateCategorySelected}>
                {CATEGORY_SELECTIONS.map((selection, index) => <option key={index} value={selection}>{selection}</option>)}
            </select>
            {/* <button onClick={fetchNews}>Get news</button> */}
            <button onClick={()=>setGetNewsTriggered(true)}>Get news</button>
        </div>
    );
};

export default GetSelectionsAndNews;
