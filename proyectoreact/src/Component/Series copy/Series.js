import React, {Component} from "react";
import SerieCard from "../Series/SerieCard/SerieCard";


class PopularSerie extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }

    componentDidMount( ){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c") //cambiar api
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
                    <h2 className="TituloC">Popular Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unPopularSerie, idx )=> <SerieCard key={PopularSerie + idx} data={PopularSerie}  image={PopularSerie.poster_path} title={PopularSerie.title}/>)}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default PopularSerie;