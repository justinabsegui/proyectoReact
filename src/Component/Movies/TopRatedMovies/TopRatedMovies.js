import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Loader/Loader";
import { Link } from 'react-router-dom';
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

    paginaSiguiente() {
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

    paginaAnterior() {
        //Traer la siguiente página de personajes
        if (this.state.nextUrl > 2){
            let previousUrl = (this.state.nextUrl - 2);
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${previousUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                data: data.results,
                nextUrl: data.page + 1,
                backup: data.results.concat(this.state.backup)
            }))
            .catch(error => console.log('el error fue ' + error))
    }}

    render() {
        return (
            <React.Fragment>
                {
                    this.state.data.length === 0 ?
                        <Loader />
                        :
                        <>
                            <div>
                            <h2><Link to='/TopRatedMovies' className='TituloC'> Top Rated Movies</Link></h2>
                            </div>
                            <section className='card-container'>
                                {this.state.data.slice(0, 4).map((unMovies, idx) => <MovieCard datosPelicula={unMovies} key={unMovies.title + idx} overview={unMovies.overview} id={unMovies.id} release_date={unMovies.release_date} vote_average={unMovies.vote_average} image={unMovies.poster_path} title={unMovies.title} />)}
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

export default TopRatedMovies;