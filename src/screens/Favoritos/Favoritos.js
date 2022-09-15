import React, { Component } from 'react';
import MovieCard from '../../Component/Movies/MovieCard/MovieCard';


class Favoritos extends Component {
    constructor() {
        super();
        this.state={
            personajes: []
        }
    }

    componentDidMount(){
     
    }

    render(){
        return(
            <section>
                {
                    this.state.personajes.map(
                       //aca va algo que comentooo
                    )
                }
            </section>
        )
    }


}
export default Favoritos