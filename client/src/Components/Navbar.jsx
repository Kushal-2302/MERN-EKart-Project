import React, { useContext } from 'react'
// import {logo} from '../assets/images/ekart-logo.png'
import { EkartApi } from '../API/ContextApi'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    let {handleSearchBar} = useContext(EkartApi)

    let location = useLocation()
    let path = location.pathname
    let pathBoolMain = path.startsWith(`/me-as-admin`)
    let pathBoolNested = path.startsWith(`/me-as-admin/addproducts`)
    return (
        <>
            <div className="navbar">
                <div className="logo">LOGO</div>
                {!pathBoolNested && 
                <div className="search">
                    <input 
                        type="text" 
                        placeholder='Search Items'
                        name='name'
                        onChange={handleSearchBar}
                    />
                </div>}
                {!pathBoolMain &&
                <div className="links">
                    <div className="login">🙍‍♂️</div>
                    <div className="cart">🛒</div>
                </div>}
            </div>
        </>
    )
}

export default Navbar
