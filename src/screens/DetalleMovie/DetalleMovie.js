import React, {Component} from "react";
import MovieCard from "../../Component/Movies/MovieCard/MovieCard";


class DetalleMovies extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:``
        }
    }

    detalle(id){   
        
        fetch(`https://api.themoviedb.org/3/find/${id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&external_source=imdb_id`)
        .then(response =>response.json())
        .then(peli => this.setState(
            {peli: peli.results}
        ))
        .catch(error => console.log('el error fue '+ error ))
    }

    render(){
        return(
            <React.Fragment> 
                <section className='card-container'>
                    {this.state.data.map((unMovies, idx )=> <MovieCard key={unMovies + idx} data={unMovies}  image={unMovies.poster_path} title={unMovies.title}/>)}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default DetalleMovies;