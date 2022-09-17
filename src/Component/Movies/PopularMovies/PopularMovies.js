import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";


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
    // traerMas(){
    //     //Traer la siguiente página de personajes
    //     fetch(this.state.nextUrl)
    //         .then( res => res.json())
    //         .then( data => this.setState({
    //             personajes: data.results.concat(this.state.personajes),
    //             nextUrl: data.info.next
    //         }))
    //         .catch()
    // }
    // borrar(id){
    //     let personajesFiltrados = this.state.personajes.filter(unPersonaje => unPersonaje.id !== id);
    //     this.setState({
    //      personajes: personajesFiltrados
    //     })
    //  }

    render(){
        return(
            <React.Fragment> 
                <div>
                    <h2 className="TituloC">Popular Movies</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unPopularMovies, idx )=> <MovieCard datosPelicula={unPopularMovies} id={unPopularMovies.id} key={unPopularMovies + idx} overview={unPopularMovies.overview}  release_date={unPopularMovies.release_date} vote_average={unPopularMovies.vote_average}  image={unPopularMovies.poster_path} title={unPopularMovies.title}/>)}
                </section>
            </React.Fragment>
        )

    }
}

 export default PopularMovies;
