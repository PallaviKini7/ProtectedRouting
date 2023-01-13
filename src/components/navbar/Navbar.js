import React from 'react'
import './Navbar.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Login from '../login/Login'
import Home from '../home/Home'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-comp'>
        <NavLink to={'/'} className='home'><div>HOME</div></NavLink>
        <NavLink to={'/login'} className='home'><div>LOGIN</div></NavLink>
        <NavLink to={'/abt'} className='home'><div>ABOUT US</div></NavLink>
        <NavLink to={'/cntct'} className='home'><div>CONTACT</div></NavLink>

      </div>
    </div>
  )
}

export default Navbar