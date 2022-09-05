import React, {Component} from "react";
import SerieCard from "../SerieCard/SerieCard";


class LatestSerie extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }

    componentDidMount( ){
        fetch("https://api.themoviedb.org/3/tv/latest?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US") //cambiar api
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
                    <h2 className="TituloC">Latest Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.data.map((unLatestSerie, idx )=> <SerieCard key={unLatestSerie + idx} data={unLatestSerie}  image={unLatestSerie.poster_path} title={unLatestSerie.title}/>)}
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default LatestSerie;