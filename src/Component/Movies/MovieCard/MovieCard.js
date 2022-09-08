import React, {Component} from "react";

class  MovieCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            // value:""
        }
    }

    render(){
         // console.log(this.props);
        return(
        <article className='movie-card'>
            <h2>{this.props.name}</h2>  
            <h2>{this.props.datosPersonaje.name}</h2> {/* Nombre */}
                <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
                <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
            <p className='more'>Ver más</p>    
            <section className='extra'>
                    <p>Datos extra: {this.props.datosPersonaje.algooooooo}</p> {/* poner otra cosa que no sea el name  */}
                </section>          
                <p className='delete' onClick={()=>this.props.borrar(this.props.id)}>Borrar</p> 
        </article>
           
        )
    }
} 

export default MovieCard;