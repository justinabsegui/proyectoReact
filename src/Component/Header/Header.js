import React from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <React.Fragment>
            <section className="header">
            <h1>CineReact</h1>
                <Navbar />
            </section>
        </React.Fragment>
    )
}

export default Header;
