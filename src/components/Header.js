/* This header will be used for multiple pages
of our site*/
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className = "header">
            <Link to = '/'>ECommerce</Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/sell">Sell</Link>
                <Link to="/orders">Orders</Link>
            </div>
        </div>
    )
}

//Exporting the header for other files to use this component.
export default Header