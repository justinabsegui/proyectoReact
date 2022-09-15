import React, { Component } from "react";
import SerieCard from "../SeriesCard/SeriesCard";

class PopularSeries extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    
    componentDidMount( ){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1")
        .then(response =>response.json())
        .then(data => this.setState(
            {data: data.results}
        ))
        .catch(error => console.log('el error fue '+ error ))
    }


    render(){
        return(
            <React.Fragment> 
                 <button onClick={()=>this.traerMas()}> Traer más </button>
                <div>
                    <h2 className="TituloC">Popular Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unPopularSeries, idx )=> <SerieCard key={unPopularSeries + idx} datosPersonaje={unPopularSeries}  image={unPopularSeries.poster_path} title={unPopularSeries.title}/>)}
                </section>
            </React.Fragment>
        )

    }
}

 export default PopularSeries;
