import React, {Component} from "react";
import MovieCard from "../../Component/Movies/MovieCard/MovieCard";


class DetalleMovies extends Component {
    constructor(props){
        super(props);
        this.state ={
            infoPeli:''
        }
    }
    
        componentDidMount() {
            fetch(`https://api.themoviedb.org/3/find/${this.props.datosPelicula.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&external_source=imdb_id`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }
    
        render(){
            return(
                <section className='card-container'>
                        {this.state.infoPeli.map((peliresult, idx)=> <MovieCard key={peliresult.title + idx} datosPelicula={peliresult}  image={peliresult.poster_path} title={peliresult.title}/>)}
                </section>
            )
        }
    };

 export default DetalleMovies;