import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Portafolio</h1>
        <NavLink exact to="/" activeClassName="is-active">Home </NavLink>
        <NavLink to="/portafolio" activeClassName="is-active">Portafolio </NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact </NavLink>
    </header>
)

export default Header