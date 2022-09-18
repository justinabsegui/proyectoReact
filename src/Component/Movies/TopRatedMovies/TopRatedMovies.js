import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Loader/Loader";
import Filtro from "../../Filtro/Filtro";
import './TopRatedMovies.css';


class TopRatedMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            nextUrl: 1,
            backup: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
            .then(response => response.json())
            .then(data => this.setState(
                {
                    data: data.results,
                    nextUrl: data.page + 1,
                    backup: data.results,
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    traerMasMovies() {
        //Traer la siguiente página de personajes

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${this.state.nextUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                data: data.results,
                nextUrl: data.page + 1,
                backup: data.results.concat(this.state.backup)
            }))
            .catch(error => console.log('el error fue ' + error))
    }

    filtrarMovie(nombre) {
        let arrayFiltrado =
            this.state.backup.filter(Movie => Movie.title.toLowerCase().includes(nombre.toLowerCase()))

        this.setState({
            data: arrayFiltrado

        })}

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
                                <h3 className="letrablanca">Filter movies by title: </h3>
                                <Filtro filtro={(nombre) => this.filtrarMovie(nombre)} />
                                <button className='boton2' onClick={() => this.traerMasMovies()}> Traer más Movies </button>
                            </div>
                            <section className='card-container'>
                                {this.state.data.map((unMovies, idx) => <MovieCard datosPelicula={unMovies} key={unMovies.title + idx} overview={unMovies.overview} id={unMovies.id} release_date={unMovies.release_date} vote_average={unMovies.vote_average} image={unMovies.poster_path} title={unMovies.title} />)}
                            </section>
                        </>
                }
            </React.Fragment>
        )

    }
}

export default TopRatedMovies;