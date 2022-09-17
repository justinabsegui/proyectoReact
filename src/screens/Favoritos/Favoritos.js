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

        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let movieFav = JSON.parse(recuperoStorage) //es un array de ids
            let pelis = [];

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            movieFav.forEach((id) => {
                //pedir por cada id los datos de la movie
                fetch(`https://api.themoviedb.org/3/movie/${id}api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1&include_adult=true`)
                .then(res => res.json())
                .then(data => {
                    pelis.push(data)

                    this.setState(
                        {
                            movies: pelis,
                        }
                    )

                })
                .catch(e => console.log(e))
        });
        console.log(pelis)
    }
}
        render() {
            return (
                <React.Fragment>
                    <h2>My favourites movies</h2>
                    <section className='card-container'>
                        {
                            this.state.movies.map((dataMovie, idx) => <MovieCard key={dataMovie + idx} datosMovie={dataMovie} />)
                        }
                    </section>
                </React.Fragment>
            )
        }

    }
export default Favoritos;