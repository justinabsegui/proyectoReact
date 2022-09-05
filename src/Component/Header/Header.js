import React from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <header>
            <form action="/results" method="GET" class="search-form">
                <input type="text" id="search" name="search" placeholder="Buscar películas y series" class="search-form_input"> </input>
                    <button type="submit" class="search-form_button"></button>
            </form>
            <Navbar />

        </header>
    )
}

export default Header;