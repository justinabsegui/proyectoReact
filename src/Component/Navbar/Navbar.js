import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {

        }
    };

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li><Link to='/PopularMovies' className='links'> Popular Movies</Link> </li>
                    
                    <li> <Link to='/topratedmovies' className='links'> Top Rated Movies </Link> </li>
                   
                    <li> <Link to='/favoritos' className='links'> Favorites </Link> </li>

                    <Buscador/>
                </ul>
                <div className='banner'>
                    <img src="/images/banner.jpeg" alt="Banner" />
                </div>
            </nav >
        )
    }
}

export default Navbar