import React, {Component} from "react";


class DetalleMovie extends Component {
    constructor(props){
        super(props);
        this.state ={
            infoPeli:''
        }
    }
    
        componentDidMount() {
            let pelis=''
            fetch(`https://api.themoviedb.org/3/find/${this.props.id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&external_source=imdb_id`)
            .then(res => res.json())
            .then(data => {
                pelis.push(data)

                this.setState(
                    {
                        infoPeli: pelis.movie_results,
                    }
                )

            })

            .catch(error => console.log(error))
        }
    
        render(){
            return(
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