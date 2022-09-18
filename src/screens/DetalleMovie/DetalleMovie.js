import React, { Component } from "react";


class DetalleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoPeli: []
        }
    }

    componentDidMount() {
        const id = URLSearchParams.get('id');
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US`)
            .then(res => res.json())
            .then(data => this.setState({
                infoPeli: data,
            }
            )
            )

            .catch(error => console.log(error))
    }


    render() {
        return (
            <section className='card-container'>

                <h2 className='titul'>{this.infoPeli.title}</h2>

                <img src={`https://image.tmdb.org/t/p/w342/${this.infoPeli.poster_path}`} alt="" />


                <p> {this.infoPeli.overview}</p>
                <p> IMDB Rating: {this.infoPeli.vote_average}</p>
                <p> Release date: {this.infoPeli.release_date}</p>
                <p className='boton' onClick={() => this.favs(this.props.id)}>{this.state.favsMessage}</p>

            </section>
        )
    }
};

export default DetalleMovie;