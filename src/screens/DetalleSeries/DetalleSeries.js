import React, {Component} from "react";
import DetalleSeries from '../DetalleSeries/DetalleSeries.js'


class DetalleSeries extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }

    componentDidMount( ){
        fetch("https://api.themoviedb.org/3/find/{external_id}?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&external_source=imdb_id")
        // cambiar la api
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
                    <h2 className="TituloC"> Detalle series</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unMovies, idx )=> <MovieCard key={unMovies + idx} data={unMovies}  image={unMovies.poster_path} title={unMovies.title}/>)}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default DetalleSeries;