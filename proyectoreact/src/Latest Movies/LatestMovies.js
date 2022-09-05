import React, {Component} from "react";
import MovieCard from "../Component/MovieCard/MovieCard";


class LatestMovies extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }

    componentDidMount( ){
        fetch("https://api.themoviedb.org/3/movie/latest?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US")
        .then(response =>response.json())
        .then(data => this.setState(
            {data: data.results}
        ))
        .catch(error => console.log('el error fue '+ error ))
    }

    render(){
        return(
            <React.Fragment> 
                <div>
                    <h2 className="TituloC">Latest Movies</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unLatestMovies, idx )=> <MovieCard key={unLatestMovies + idx} data={unLatestMovies}  image={unLatestMovies.poster_path} title={unLatestMovies.title}/>)}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default LatestMovies;