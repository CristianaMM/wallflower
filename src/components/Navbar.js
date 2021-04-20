import React from 'react'
import titlelogo from '../assets/images/titlelogo.jpg'
import flowerlogo from '../assets/images/justflowerlogo.jpg'
import  {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navBarDiv text-center pt-3">
            <div className="container">
                <div className="row justify-content-center">
            <img className="flowerLogo col-12" src={flowerlogo} alt="wall flower logo"/>
            </div>
            <div className="row justify-content-center">
            <img className="titleLogo col-12" src={titlelogo} alt="wall flower logo"/>
            </div>
            <ul className="p-0">
                <li className="d-inline-block p-3"><NavLink to="/" exact>Home</NavLink></li>
                <li className="d-inline-block p-3"><NavLink to="/walls">Walls</NavLink></li>
                <li className="d-inline-block p-3"><NavLink to="/services">Services</NavLink></li>
                <li className="d-inline-block p-3"><NavLink to="/contact">Contact us</NavLink></li>
            </ul>
            </div>
        </div>
    )
}
