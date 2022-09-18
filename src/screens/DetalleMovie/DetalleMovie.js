import React, { Component } from "react";
import './detalleMovie.css'


class DetalleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoPeli: [],
            id: props.match.params.id,
            favsMessage: 'Add to favourites',
        }
    }

    componentDidMount() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        if (favoritos.includes(this.state.id)) {
            this.setState({
                favsMessage: 'Remove from favourites'
            },()=>  console.log(favoritos) )
        }

    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US`)
        .then(res => res.json())
            .then(data => this.setState({
                infoPeli: data,
            } 
            )
            )

            .catch(error => console.log(error))
    }

    favs(id) {
        //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
        // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        //Preguntemos si el id ya está en el array.
        if (favoritos.includes(id)) { //includes retorna un booleano.
            favoritos = favoritos.filter(unId => unId !== id);
            //mostar al usuario un nuevo texto: agregar a favoritos
            this.setState({
                favsMessage: 'Add to favourites'

            }, ) 
        } else {
            id = Number(id);
            favoritos.push(id);
            //mostar un texto diferente al usuario. Quitar de favs
            this.setState({
                favsMessage: 'Remove from favourites'
            })
        }

        let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);
    }

    render() {
        return (
            <section className='detalle-peli'>
                <div className='detalle-peli-izq'>
                    <h2 className='titulo-detalle-pelo'>{this.state.infoPeli.title}</h2>

                    <img src={`https://image.tmdb.org/t/p/w342/${this.state.infoPeli.poster_path}`} className='img-detalle-peli' alt="" />
                </div>
                <div className='detalle-peli-der'>
                    <p className='info-detalle-peli'> {this.state.infoPeli.overview}</p>
                    <p className='info-detalle-peli'> IMDB Rating: {this.state.infoPeli.vote_average}</p>
                    <p className='info-detalle-peli'> Release date: {this.state.infoPeli.release_date}</p>
                    <p className='boton' onClick={() => this.favs(this.state.id)}>{this.state.favsMessage}</p>
                </div>
            </section>
        )
    }
};

export default DetalleMovie;