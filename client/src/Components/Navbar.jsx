import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">LOGO</div>
                <div className="search">
                    <input type="text" placeholder='Search Items'/>
                </div>
                <div className="links">Links</div>
            </div>
        </>
    )
}

export default Navbar
