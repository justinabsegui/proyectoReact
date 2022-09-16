import React, { Component } from 'react';
import MovieCard from '../../Component/Movies/MovieCard/MovieCard';

class Favoritos extends Component {
    constructor() {
        super();
        this.state = {
            movies: [], //Es array de objetos literales con cada movie
            favoritos: true,
        }
    }

    componentDidMount() {

        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            let favmov = JSON.parse(recuperoStorage) //es un array de ids
            let movies = [];

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            favmov.forEach(unIdFavorito => {
                //pedir por cada id los datos del personaje
                fetch(`https://api.themoviedb.org/3/search/movie/${unIdFavorito}api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1&include_adult=true`)
                    .then(res => res.json())
                    .then(data => movies.push(data),
                        this.setState(
                            {
                                movies: movies,
                            }
                        )

                    )

                    .catch(e => console.log(e))
            })

            console.log(movies);
        }


    }

    render() {
        return (
            <React.Fragment>
                <h2>My favourites movies</h2>
                <section className='card-container'>
                    {
                        this.state.movies.map((unaMovie, idx) => <MovieCard key={unaMovie.name + idx} datosMovie={unaMovie} />)
                    }
                </section>
            </React.Fragment>
        )
    }

}
export default Favoritos;