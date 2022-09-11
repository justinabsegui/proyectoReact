import React, {Component} from "react";
import './buscador.css'
class Buscador extends Component {
    constructor() {
        super();
        this.state = {
            valor: ''
        };
    };

    prevenirRecarga(e) {
        e.preventDefault();
          // queres traer la info
        this.props.buscar();
    }

    guardarCambios(e) {
        this.setState({ valor: e.target.value });
    };

    render() {
        return (
            <form onSubmit={(e) => this.prevenirRecarga(e)}>
               <input className='adentro'type='text' placeholder='¡Busca aqui!'onChange={(e) => this.guardarCambios(e)} value= {this.state.valor} />
                <input className='boton'type='submit' onClick={(e) => this.prevenirRecarga(e)} />
            </form>
        )
    }
};

export default Buscador