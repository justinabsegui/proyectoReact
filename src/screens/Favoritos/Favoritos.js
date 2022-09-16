import React, { Component } from 'react';
import MovieCard from '../../Component/Movies/MovieCard/MovieCard';

class Favoritos extends Component {
    constructor() {
        super();
        this.state = {
            movies: [] //Es array de objetos literales con cada movie
        }
    }

    componentDidMount() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
        if (recuperoStorage !== null) {
            favoritos = JSON.parse(recuperoStorage) //es un array de ids
            let movies = [];

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            favoritos.forEach(unIdFavorito => {
                //pedir por cada id los datos del personaje
                let url = `/peliculas/id/${unIdFavorito}`//buscar el link de la api
                // let url = `/peliculas/id/${this.props.datosPelicula}`
                fetch(url)
                    .then(res => res.json())
                    .then(data => movies.push(data))
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
export default Favoritos