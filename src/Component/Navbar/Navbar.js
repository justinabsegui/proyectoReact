import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';

function Navbar() {

    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/aboutus'> About us </Link>
                </li>
                <li><Link to='/PopularMovies' className='links'> Popular Movies</Link> </li>
                <li> <Link to='/movies' className='links'> Movies </Link> </li>
                <Buscador/>
                <ul className="user">
                    <li>Nombre usuario <img src="/img/user.jpg" alt="" /></li>
                </ul>
            </ul>
            <div className='banner'>
                <img src="../images/Backkground\ Header.jpeg" alt="Banner" />
            </div>
        </nav >
    )
}

export default Navbar