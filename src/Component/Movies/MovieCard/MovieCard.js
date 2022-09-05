import React, {Component} from "react";

class  MovieCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:""
        }
    }

    render(){
        return(
        <article className='character-card'>
            <h2>{this.props.title}</h2>  
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
            <p className='more'>Ver más</p>               
        </article>
           
        )
    }
} 

export default MovieCard;