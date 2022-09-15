import React from 'react';
import TopRatedSeries from '../../Component/Series/TopRatedSeries/TopRatedSeries';
import PopularSeries from "../../Component/Series/PopularSeries/PopularSeries"


function  Series (){
    return(
        <React.Fragment>
            <h2> Series </h2>
            <TopRatedSeries/>
            <PopularSeries/>
        </React.Fragment>
    )
}
export default Series;