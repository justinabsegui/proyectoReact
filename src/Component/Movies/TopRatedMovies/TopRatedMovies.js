import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Loader/Loader";


class TopRatedMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
            .then(response => response.json())
            .then(data => this.setState(
                { data: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
    }
    // borrar(id){
    //     let personajesFiltrados = this.state.personajes.filter(unPersonaje => unPersonaje.id !== id);
    //     this.setState({
    //      personajes: personajesFiltrados
    //     })
    //  }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.data.length === 0 ?
                        <Loader />
                        :
                        <>
                            <div>
                                <h2 className="TituloC">Top Rated Movies</h2>
                            </div>
                            <section className='card-container'>
                                {this.state.data.map((unMovies, idx) => <MovieCard key={unMovies.title + idx} overview={unMovies.overview}  release_date={unMovies.release_date} vote_average={unMovies.vote_average}  image={unMovies.poster_path} title={unMovies.title} />)}
                            </section>
                        </>
                }
            </React.Fragment>
        )

    }
}

export default TopRatedMovies;