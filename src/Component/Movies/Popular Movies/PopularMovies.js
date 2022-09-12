import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";


<<<<<<< HEAD:src/Component/Movies/Latest Movies/LatestMovies.js
class LatestMovies extends Component {
    constructor(props) {
=======
class PopularMovies extends Component {
    constructor(props){
>>>>>>> 546bc843 (incoompleto):src/Component/Movies/Popular Movies/PopularMovies.js
        super(props);
        this.state = {
            data: []
        }
    }

<<<<<<< HEAD:src/Component/Movies/Latest Movies/LatestMovies.js
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/latest?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US")
            .then(response => response.json())
            .then(data => this.setState(
                { data: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    borrar(id) {
        let peliculasFiltradas = this.state.peliculas.filter(unLatestMovies => unLatestMovies.id !== id);
=======
    componentDidMount( ){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1")
        .then(response =>response.json())
        .then(data => this.setState(
            {data: data.results}
        ))
        .catch(error => console.log('el error fue '+ error ))
    }

    borrar(id){
        let peliculasFiltradas = this.state.peliculas.filter(unPopularMovies => unPopularMovies.id !== id);
>>>>>>> 546bc843 (incoompleto):src/Component/Movies/Popular Movies/PopularMovies.js
        this.setState({
            peliculas: peliculasFiltradas
        })
<<<<<<< HEAD:src/Component/Movies/Latest Movies/LatestMovies.js
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.traerMas()}> Traer más </button>

                {
                    this.state.data.length === 0 ?
                        <Loader />
                        :
                        <>
                            <div>
                                <h2 className="TituloC">Latest Movies</h2>
                            </div>
                            <section className='card-container'>
                                {this.state.peliculas.map((unLatestMovies, idx) => <MovieCard key={unLatestMovies + idx} peliculas={unLatestMovies} image={unLatestMovies.poster_path} title={unLatestMovies.title} />)}
                            </section>
                        </>
                }

=======
     }
 

    render(){
        return(
            <React.Fragment> 
                 <button onClick={()=>this.traerMas()}> Traer más </button>
                <div>
                    <h2 className="TituloC">Popular Movies</h2>
                </div>
                <section className='card-container'>
                    {this.state.peliculas.map((unPopularMovies, idx )=> <MovieCard key={unPopularMovies + idx} peliculas={unPopularMovies}  image={unPopularMovies.poster_path} title={unPopularMovies.title}/>)}
                </section>
>>>>>>> 546bc843 (incoompleto):src/Component/Movies/Popular Movies/PopularMovies.js
            </React.Fragment>
        )

    }
}

<<<<<<< HEAD:src/Component/Movies/Latest Movies/LatestMovies.js
export default LatestMovies;
=======
 export default PopularMovies;
>>>>>>> 546bc843 (incoompleto):src/Component/Movies/Popular Movies/PopularMovies.js
