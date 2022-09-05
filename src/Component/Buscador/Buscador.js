import React, {Component} from "react";

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
    }

    guardarCambios(e) {
        this.setState({ valor: e.target.value });
    };

    render() {
        return (
            <form onSubmit={(e) => this.prevenirRecarga(e)}>
               <input type='text' onChange={(e) => this.guardarCambios(e)} value= {this.state.valor} />
                <input type='submit' onClick={(e) => this.prevenirRecarga(e)} />
            </form>
        )
    }
};

export default Buscador