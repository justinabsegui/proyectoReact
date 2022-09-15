import React, { Component } from "react";
import './moviecard.css'

// didmount
// traer local chequear si el id esta 
// id true

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMore: false,
            text: 'Ver más',
        }
    }
    viewMore() {
        if (this.state.viewMore) {
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'Ver menos'
            })
        }
    }
    // favoritos() {
    //     if (this.state.favoritos) {
    //         this.setState({
    //             favoritos: false,
    //             text2: 'Agregar a favoritos'
    //         })
    //     } else {
    //         this.setState({
    //             favoritos: true,
    //             text2: 'Quitar de favoritos'
    //         })
    //     }
    // }

    // agregarYSacarFavs(id) {
    //     //guardo ids en array dentro de localStorage
    //     console.log('Agregando y sacando favs')

    render() {
        // console.log(this.props);
        return (
            <article className='movie-card'>

                <h2 className='extra'>{this.props.datosPelicula.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                <p className='extra'> Release date: {this.props.datosPelicula.release_date}</p>

                <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
                <p className='more' onClick={() => this.favoritos()}>{this.state.text2}</p>

                <section >
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> {this.props.datosPelicula.overview}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> Rating: {this.props.datosPelicula.vote_average}</p>
                </section>
            </article>
        )
    }
};       

export default MovieCard;