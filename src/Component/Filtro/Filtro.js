import React, { Component } from 'react';
import './filtro.css'

class Filtro extends Component {
    constructor(props){
        super(props)
        this.state={
            valor: ''
        }
    }

    evitarRefresh(event){
        event.preventDefault()
    }

    guardarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => this.props.filtro(this.state.valor))
    }

  render() {
    return (
      <form onSubmit={(e) => this.evitarRefresh(e)}>
        <input className='adentro' type={'text'} onChange={(e)=> this.guardarCambios(e)} value={this.state.valor} placeholder ='Buscador' />
      </form>
    )
  }
}

export default Filtro