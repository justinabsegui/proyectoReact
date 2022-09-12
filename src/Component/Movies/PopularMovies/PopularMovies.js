import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Loader/Loader";

class PopularMovies extends Component {
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
                    <h2 className="TituloC">Popular Movies</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unPopularMovies, idx )=> <MovieCard key={unPopularMovies + idx} datosPersonaje={unPopularMovies}  image={unPopularMovies.poster_path} title={unPopularMovies.title}/>)}
                </section>
            </React.Fragment>
        )

    }
}

 export default PopularMovies;
