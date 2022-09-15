import React, {Component} from "react";
import SerieCard from "../SeriesCard/SeriesCard";
import Loader from "../../Loader/Loader";


class TopRatedSeries extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
        .then(response =>response.json())
        .then(data => this.setState(
            {data: data.results}
        ))
        .catch(error => console.log('el error fue '+ error ))
    }

    render(){
        return(
            <React.Fragment> 
                {
                    this.state.data.length === 0 ?
                    <Loader />
                    :
                    <>
                        <div>
                            <h2 className="TituloC">Top Rated Series</h2>
                        </div>
                        <section className='card-container'>
                            {this.state.data.map((unSeries, idx )=> <SerieCard key={unSeries.title + idx} datosPersonaje={unSeries}  image={unSeries.poster_path} title={unSeries.title}/>)}
                        </section>
                    </>
                }
            </React.Fragment>
        )
            
    }
    }

 export default TopRatedSeries;