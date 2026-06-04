import React from 'react'
// import {logo} from '../assets/images/ekart-logo.png'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">LOGO</div>
                <div className="search">
                    <input type="text" placeholder='Search Items'/>
                </div>
                <div className="links">
                    <div className="login">🙍‍♂️</div>
                    <div className="cart">🛒</div>
                </div>
            </div>
        </>
    )
}

export default Navbar
