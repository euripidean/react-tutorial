import React from "react";
import './footer.css'

function Footer(){
    const date = new Date()
    return(
        <footer className="footer">
            Jane Harrison, {`${date.toLocaleDateString("en-CA", {year: 'numeric'})}`}.
        </footer>
    )
}

export default Footer
