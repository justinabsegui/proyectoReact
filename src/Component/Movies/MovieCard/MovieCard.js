import React, { Component } from "react";
import './moviecard.css'
import { Link } from 'react-router-dom';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favsMessage: 'Add to favourites',
            viewMore: false,
            text: 'Show more',
        }
    }
    componentDidMount() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }

        if (favoritos.includes(this.props.datosPelicula.id)) {
            this.setState({
                favsMessage: 'Remove from favourites'
            })
        }

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
            })
        } else {
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

    viewMore() {
        if (this.state.viewMore) {
            this.setState({
                viewMore: false,
                text: 'Show more'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'Show less'
            })
        }
    }

    render() {
        // console.log(this.props);
        return (
            <article className='movie-card'>

                <h2 className='titul'>{this.props.datosPelicula.title}</h2>
                {/* ⚠️ Dejo Link solo en la foto del personaje. Si la aplico a toda la tarjeta anula el evento definido en Borrar porque Link reacciona primero que el evento onClcik. 👀 */}

                <Link to={`/peliculas/id/${this.props.datosPelicula.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />

                </Link>
                <section className="main-nav">
                <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
                <p className='boton' onClick={() => this.favs(this.props.datosPelicula.id)}>{this.state.favsMessage}</p>

                </section>
                
                {/* <p className='delete' onClick={() => this.props.borrar(this.props.datosPelicula.id)}>Borrar</p> */}
                <section >
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> Overview: {this.props.datosPelicula.overview}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> Rating: {this.props.datosPelicula.vote_average}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> Release date: {this.props.datosPelicula.release_date}</p>
                </section>
            </article>

        )
    }
};

export default MovieCard;