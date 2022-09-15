import React, { Component } from "react";
import Filtro from "../Filtro/Filtro";
import MovieCard from "../Movies/MovieCard/MovieCard";
import SerieCard from "../Series/SeriesCard/SeriesCard";

class VerTodas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMovie: [],
            nextUrl: 1,
            dataSeries: [],
            backup: [],
            backupSeries: [],


        }
    }

    componentDidMount() {

        //Mejores Movies
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c")
            .then(response => response.json())
            .then(data => this.setState(

                {
                    dataMovie: data.results,
                    nextUrl: data.page + 1,
                    backup: data.results,
                }

            ))
            .catch(error => console.log('el error fue ' + error))




        //Mejores Series

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c ")
            .then(response => response.json())
            .then(data => this.setState(
                {
                    dataSeries: data.results,
                    backupSeries: data.results
                }
            ))
            .catch(error => console.log('el error fue ' + error))


    }
    traerMasMovies() {
        //Traer la siguiente página de personajes

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${this.state.nextUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                dataMovie: data.results.concat(this.state.dataMovie),
                nextUrl: data.page + 1
            }))
            .catch()
    }

    traerMasSeries() {
        //Traer la siguiente página de personajes

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=${this.state.nextUrl}`)
            .then(res => res.json())
            .then(data => this.setState({
                dataSeries: data.results.concat(this.state.dataSeries),
                nextUrl: data.page + 1
            }))
            .catch()
    }


    filtrarMovie(nombre) {
        let arrayFiltrado =
            this.state.backup.filter(Movie => Movie.title.toLowerCase().includes(nombre.toLowerCase()))

        this.setState({
            dataMovie: arrayFiltrado

        })

    }

    filtrarSeries(nombre) {
        let arrayFiltrado =
            this.state.backupSeries.filter(serie => serie.name.toLowerCase().includes(nombre.toLowerCase()))

        this.setState({
            dataSeries: arrayFiltrado

        })

    }

    render() {
        console.log(this.state.nextUrl);
        console.log(this.state.datos);
        return (

            <React.Fragment>
                <div>

                    <h2 className="TituloC">Movies</h2>
                    <h3 className="letrablanca">Filtrar Movies </h3>
                    <Filtro filtro={(nombre) => this.filtrarMovie(nombre)} />
                    <button className='button-54' onClick={() => this.traerMasMovies()}> Traer más Movies </button>
                </div>
                <section className='card-container'>
                    {this.state.dataMovie.map((Movies, idx) => <MovieCard key={Movies + idx} data={Movies} image={Movies.poster_path} title={Movies.title} descripcion={Movies.overview} />)}
                </section>




                <div>
                    <h2 className="TituloC">Series</h2>
                    <h3 className="letrablanca">Filtrar Series</h3>
                    <Filtro filtro={(nombre) => this.filtrarSeries(nombre)} />
                    <button className='button-54' onClick={() => this.traerMasSeries()}> Traer más Series </button>
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx) => <SerieCard key={unSeries + idx} data={unSeries} image={unSeries.poster_path} title={unSeries.name} descripcion={unSeries.overview} />)}
                </section>





            </React.Fragment>


        )
    }
}
export default VerTodas;