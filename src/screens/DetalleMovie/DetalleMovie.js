import React, {Component} from "react";
import MovieCard from "../../Component/Movies/MovieCard/MovieCard";


class DetalleMovies extends Component {
    constructor(props){
        super(props);
        this.state ={
            idPeli:``
        }
    }
    
        componentDidMount(id) {
            fetch(`https://api.themoviedb.org/3/find/${this.props.match.params.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&external_source=imdb_id`)
            .then(res => res.json())
            .then(peli => this.setState({
                idPeli: peli.results
            }))
            .catch(error => console.log(error))
        }
    
        render(){
            return(
                <section className='card-container'>
                        {this.state.idPeli.map((peliresult, idx)=> <MovieCard key={peliresult.title + idx} datosPelicula={peliresult}  image={peliresult.poster_path} title={peliresult.title}/>)}
                </section>
            )
        }
    };

 export default DetalleMovies;