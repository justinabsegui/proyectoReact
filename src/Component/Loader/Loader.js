import React, {Component} from "react";
import './Loader.css';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gif_url: ''

        }
    }

    componentDidMount() {
        fetch("https://media.giphy.com/media/kZhvGXpT7bOsltxydL/giphy.gif")
            .then(json_txt => json_txt.json())
            .then(json_obj => {
                let url = json_obj.data.images.original.url; //h que sea original
                this.setState({
                    gif_url: url
                })
            })
            .catch(error => console.log('el error es' + error))
    }

    render() {
        return (
            <div>
                {
                    this.state.gif_url == ''
                        ? <h2>Cargando...</h2>
                        : <div>
                            <img alt='loading gif' src={this.state.gif_url} />
                        </div>
                }

            </div>
        )
    }
}

export default Loader;