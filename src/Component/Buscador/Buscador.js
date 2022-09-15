import React, {Component} from "react";
import './buscador.css'
import {Link} from 'react-router-dom'


class Buscador extends Component {
    constructor() {
        super();
        this.state = {
            valor: ''
        };
    };

    prevenirRecarga(e) {
        e.preventDefault();
    }

    guardarCambios(e) {
        this.setState({ valor: e.target.value });
    };

    render() {
        return (
            <form onSubmit={(e) => this.prevenirRecarga(e)}>
               <input className='adentro'type='text' placeholder='¡Busca aqui!' onChange={(e) => this.guardarCambios(e)} value= {this.state.valor} />
                <Link to={`/search-results/${this.state.valor}`} className='boton'>Buscar</Link>
            </form>
        )
    }
};

export default Buscador