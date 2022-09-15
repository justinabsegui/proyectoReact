import React, { Component } from "react";
import './seriecard.css'
class SerieCard extends Component {
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

        render(){
            // console.log(this.props);
            return (
                <article className='serie-card'>
                
                    <h2 className= 'extra'>{this.props.name}</h2>
                    <h2 className= 'extra'>{this.props.datosPersonaje.title}</h2> {/* Nombre */}
                    <p className= 'extra'>{this.props.datosPersonaje.status}</p> {/* Estado */}
                    <p className= 'extra'>{this.props.datosPersonaje.species}</p> {/* Especie */}
                  
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                    <p className='more'>Ver más</p>
                    <section >
                        <p className= 'extra'>Datos extra: {this.props.datosPersonaje.algo}</p> {/* poner otra cosa que no sea el name  */}
                    </section>
                    <p className='extra' onClick={() => this.props.borrar(this.props.id)}>Borrar</p>
                </article>

            )
        }
    } 

export default SerieCard;