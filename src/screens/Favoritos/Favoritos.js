import React, { Component } from 'react';
import MovieCard from '../../Component/Movies/MovieCard/MovieCard';
import './favoritos.css';

class Favoritos extends Component {
    constructor() {
        super();
        this.state = {
            movies: [], //Es array de objetos literales con cada movie
            favoritos: true,
        }
    }

    componentDidMount() {
        let favmov = []
        let recuperoStorage = localStorage.getItem('favmov')

        if (recuperoStorage !== null) {
            favmov = JSON.parse(recuperoStorage) //es un array de ids
            let favs = [];

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            favmov.forEach((id) => {
                //pedir por cada id los datos del personaje
                fetch(`https://api.themoviedb.org/3/search/movie/${id}api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1&include_adult=true`)
                    .then(res => res.json())
                    .then(unaMovie => favs.push(unaMovie))
                    .then(() => this.setState(
                            {
                                movies: favs,
                            }
                        ))

                        .catch(e => console.log('El error es' + e))
                    })
            }
    }
        render() {
            return (
                <React.Fragment>
                    <h2>My favourites movies</h2>
                    <section className='card-container'>
                        {
                            this.state.movies.map((unaMovie, idx) => <MovieCard key={unaMovie.title + idx} datosMovie={unaMovie} />)
                        }
                    </section>
                </React.Fragment>
            )
        }

    }
export default Favoritos;