import { Component } from "react";
import MovieCard from "../../Component/Movies/MovieCard/MovieCard";

class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            resultado: []
        }
    };

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1&include_adult=true&query=${this.props.match.params.title}`)
        .then(res => res.json())
        .then(pelis => this.setState({
            resultado: pelis.results
        }))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <section className='card-container'>
                    {this.state.resultado.map((peliresult, idx)=> <MovieCard key={peliresult.title + idx} datosPersonaje={peliresult}  image={peliresult.poster_path} title={peliresult.title}/>)}
            </section>
        )
    }
};

export default SearchResults;