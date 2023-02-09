import React from "react";
import './footer.css'

function Footer(){
    const date = new Date()
    return(
        <footer className="footer">
            Jane Harrison, {`${date.toLocaleDateString("en-CA", {year: 'numeric'})}`}.
            <p>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#info">More Information</a>
                </p>
        </footer>
    )
}

export default Footer
