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

    // agregarYSacarFavs(id) {
    //     //guardo ids en array dentro de localStorage
    //     console.log('Agregando y sacando favs')




        render(){
            // console.log(this.props);
            return (
                <article className='movie-card'>
            
                <h2 className= 'extra'>{this.props.datosPersonaje.title}</h2> 
                  
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                    <p className= 'extra'> Release date: {this.props.datosPersonaje.release_date}</p> 
                    <p className='more'>Ver más</p>
                    <section >
                        <p className= 'extra'> {this.props.datosPersonaje.overview}</p> 
                        <p className= 'extra'> Rating: {this.props.datosPersonaje.vote_average}</p> 

                    </section>
                </article>

            )
        }
    } 

export default MovieCard;