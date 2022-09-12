import React, { Component } from "react";
import './moviecard.css'
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
                text: 'ver menos'
            })
        }
    }

    render() {
        // console.log(this.props);
        return (
            <React.Fragment>
                {
                    this.state.data.length === 0 ?
                        <Loader />
                        :
                        <>
                            <article className='movie-card'>
                                <h2>{this.props.name}</h2>
                                <h2>{this.props.datosPersonaje.title}</h2> {/* Nombre */}
                                <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
                                <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
                                <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                                <p className='more'>Ver más</p>
                                <section className='extra'>
                                    <p>Datos extra: {this.props.datosPersonaje.algooooooo}</p> {/* poner otra cosa que no sea el name  */}
                                </section>
                                <p className='delete' onClick={() => this.props.borrar(this.props.id)}>Borrar</p>
                            </article>
                        </>
                }
            </React.Fragment>
        )
    }
}

export default MovieCard;