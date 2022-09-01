import React, {Component} from "react";
import SerieCard from "../SerieCard/SerieCard";


class Serie extends Component {
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
                    <h2 className="TituloC">Serie</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unSerie, idx )=> <SerieCard key={Serie + idx} data={Serie}  image={Serie.poster_path} title={Serie.title}/>)}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default Serie;