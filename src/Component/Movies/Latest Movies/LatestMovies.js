import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";


class LatestMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/latest?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US")
            .then(response => response.json())
            .then(data => this.setState(
                { data: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    borrar(id) {
        let peliculasFiltradas = this.state.peliculas.filter(unLatestMovies => unLatestMovies.id !== id);
        this.setState({
            peliculas: peliculasFiltradas
        })
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.traerMas()}> Traer más </button>

                {
                    this.state.data.length === 0 ?
                        <Loader />
                        :
                        <>
                            <div>
                                <h2 className="TituloC">Latest Movies</h2>
                            </div>
                            <section className='card-container'>
                                {this.state.peliculas.map((unLatestMovies, idx) => <MovieCard key={unLatestMovies + idx} peliculas={unLatestMovies} image={unLatestMovies.poster_path} title={unLatestMovies.title} />)}
                            </section>
                        </>
                }

            </React.Fragment>
        )

    }
}

export default LatestMovies;