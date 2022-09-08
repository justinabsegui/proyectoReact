import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="main-nav">
            <ul>
                <li><Link to='/PopularMovies' className='links'> Popular Movies</Link> </li>
                <li>   <Link to='/LatestMovies' className='links'> Latest Movies </Link> </li>
                <li><Link to='/PopularSeries ' className='links'> Popular Series </Link> </li>
                <li><Link to='/LatestSeries ' className='links'> Latest Series </Link> </li>
                <li> <Link to='/movies' className='links'> Movies </Link> </li>
                <li>Username <img src="/img/user.jpg" alt="" /></li>
            </ul>
        </nav >
    )
}

export default Navbar