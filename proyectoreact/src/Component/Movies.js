import React, { Component } from 'react';
//importar css

class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: [], //aparecer peliculas
            nextUrl: ''
        }
    }

    componentDidMount() {
        //BUscamos datos
        fetch('https://api.themoviedb.org/3/movie/550?api_key=ff0d15573865ddc49a8a0b0024148010')
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results,
                nextUrl: data.info.next
            }))
            .catch()
    }

    traerMas() {
        //Traer la siguiente página de movies
        fetch(this.state.nextUrl)
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results.concat(this.state.movies),
                nextUrl: data.info.next
            }))
            .catch()
    }
   
}

export default Movies;