import React, { Component } from "react";
import './moviecard.css'
// import {Link} from 'react-router-dom';

// didmount
// traer local chequear si el id esta 
// id true

class MovieCard extends Component {
    constructor(props) {
            super(props);   
            this.state = {
                valor: [],
                viewMore: false,
                fav: false,
            }//recibe por props la info que le pasa el padre (movies)
        }

        viewMore(){
            this.setState({
              viewMore: !this.state.viewMore
            })
        }

        componentDidMount() {
            let favoritos = [];
            let Storage = localStorage.getItem('favoritos')
    
            if (Storage !== null) {
                let favoritos = JSON.parse(Storage);
            }
    
            if (favoritos.includes(this.props.datosPelicula.id)) {
                this.setState({
                    fav: true
                })
            }
    
        }
    

    // constructor(props) {
    //     super(props);   
    //     this.state = {
    //         viewMore: false,
    //         text: 'Ver más',
    //     }
    // }

    // viewMore() {
    //     if (this.state.viewMore) {
    //         this.setState({
    //             viewMore: false,
    //             text: 'Ver más'
    //         })
    //     } else {
    //         this.setState({
    //             viewMore: true,
    //             text: 'Ver menos'
    //         })
    //     }
    // }
    // componentDidMount(){
    //     let favoritos = [];
    //     let recuperoStorage = localStorage.getItem('favoritos')

    //     if(recuperoStorage !== null){
    //         let favoritosToArray = JSON.parse(recuperoStorage);
    //         favoritos = favoritosToArray
    //     }

    //     if(favoritos.includes(this.props.results.id)){ //results.id???
    //         this.setState({
    //             favsMessage: 'Quitar de favoritos'
    //         })
    //     }

    //  }

    // agregarYQuitarDeFavoritos(id){
    //     //Tiene que agegar un id dentro de un Array y guardarlo en localstorage.
    //     // Si el id ya existe ofrecer al usuario la posibilidad de quitar el id del array de favoritos.
    //     let favoritos = [];
    //     let recuperoStorage = localStorage.getItem('favoritos')

    //     if(recuperoStorage !== null){
    //         let favoritosToArray = JSON.parse(recuperoStorage);
    //         favoritos = favoritosToArray
    //     }

    //     //Preguntemos si el id ya está en el array.
    //     if(favoritos.includes(id)){ //includes retorna un booleano.
    //         favoritos = favoritos.filter(unId => unId !== id);
    //         //mostar al usuario un nuevo texto: agregar a favoritos
    //         this.setState({
    //             favsMessage: 'Agregar a favoritos'
    //         })
    //     } else {
    //         favoritos.push(id);
    //         //mostar un texto diferente al usuario. Quitar de favs
    //         this.setState({
    //             favsMessage: 'Quitar de favoritos'
    //         })
    //     }


    //     let favoritosToString = JSON.stringify(favoritos);
    //     localStorage.setItem('favoritos', favoritosToString);

    //     console.log(localStorage);

    // }

    render() {
        // console.log(this.props);
        return (
            <article className='movie-card'>
            <p onClick={()=>this.agregarYQuitarDeFavoritos(this.props.datosPelicula.id)}>{this.state.favsMessage}</p>
               
                <h2 className='extra'>{this.props.datosPelicula.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                
                {/* <Link to={`/movies/id/${this.props.datosPelicula.id}`}>
                    <img src={this.props.datosPelicula.image} alt="" />
                </Link> */}

                <p className='extra'> Release date: {this.props.datosPelicula.release_date}</p>

                <section >
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> Overview: {this.props.datosPelicula.overview}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}> Rating: {this.props.datosPelicula.vote_average}</p>
                </section>
                
                <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
                <p className='delete' onClick={()=>this.props.borrar(this.props.datosPelicula.id)}>Borrar</p>
            </article>
        )
    }
};       

export default MovieCard;