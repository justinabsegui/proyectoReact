import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from 'react-router-dom';
import Loader from "../../Loader/Loader";
import './PopularMovies.css';

class PopularMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            nextUrl: 1,
            backup: [],
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1")
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

    paginaSiguiente() {
        //Traer la siguiente página de personajes

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${this.state.nextUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                data: data.results,
                nextUrl: data.page + 1,
                backup: data.results.concat(this.state.backup)
            }))
            .catch(error => console.log('el error fue ' + error))
    }


    paginaAnterior() {
        //Traer la siguiente página de personajes
        if (this.state.nextUrl > 2) {
            let previousUrl = (this.state.nextUrl - 2);
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${previousUrl}`)
                .then(res => res.json())
                .then(data => this.setState({
                    data: data.results,
                    nextUrl: data.page + 1,
                    backup: data.results.concat(this.state.backup)
                }))
                .catch(error => console.log('el error fue ' + error))
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.data.length === 0 ?
                        <Loader />
                        :
                        <>
                            <div>
                            <h2><Link to='/PopularMovies' className='TituloC'> Popular Movies</Link></h2>
                            </div>
                            <section className='card-container'>
                                {this.state.data.slice(0, 4).map((unPopularMovies, idx) => <MovieCard datosPelicula={unPopularMovies} id={unPopularMovies.id} key={unPopularMovies + idx} overview={unPopularMovies.overview} release_date={unPopularMovies.release_date} vote_average={unPopularMovies.vote_average} image={unPopularMovies.poster_path} title={unPopularMovies.title} />)}
                            </section>
                            <div className='contenedor-botones-paginas'>
                                <button className='boton1' onClick={() => this.paginaAnterior()}> Previous page </button>
                                <button className='boton1' onClick={() => this.paginaSiguiente()}> Next page </button>
                            </div>
                        </>
                }
            </React.Fragment>
        )

    }
}

export default PopularMovies;
