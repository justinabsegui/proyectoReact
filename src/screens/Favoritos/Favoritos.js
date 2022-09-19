import React, { Component } from 'react';
import MovieCard from '../../Component/Movies/MovieCard/MovieCard';
import './Favoritos.css'

class Favoritos extends Component {
    constructor() {
        super();
        this.state = {
            movies: [], 
            favoritos: true,
        }
    }

    componentDidMount() {

        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            let movieFav = JSON.parse(recuperoStorage) //es un array de ids
            let pelis = [];

            //recorrer el array y pedirla al endpoint por los datos de cada personaje.
            movieFav.forEach((id) => {
                //pedir por cada id los datos de la movie
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1&include_adult=true`)
                    .then(res => res.json())
                    .then(data => {
                        pelis.push(data)

                        this.setState(
                            {
                                movies: pelis,
                            }
                        )

                    })
                .catch(error => console.log('el error fue '+ error ))
            });
            console.log(pelis)
        } 
    }

    borrar(id){
        const moviesFiltradas = this.state.movies.filter((datos) => datos.id !== id);
        this.setState({
         movies: moviesFiltradas

        })
      }
 
     render() {
         return (
             <React.Fragment>
                 <h2>My favorite movies</h2>
                 <section className='card-container'>
                     {
                         this.state.movies.map((dataMovie, idx) => <MovieCard key={dataMovie + idx} overview={dataMovie.overview}  release_date={dataMovie.release_date} vote_average={dataMovie.vote_average}  image={dataMovie.poster_path} title={dataMovie.title} id={dataMovie.id} borrar={(id)=>this.borrar(id)}/>)
                         
                     }
                 </section>
             </React.Fragment>
         )
     }
 
 }
 export default Favoritos;
