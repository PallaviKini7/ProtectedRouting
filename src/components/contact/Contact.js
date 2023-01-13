import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div>This is the contact information
      <p>To know more about this click below button</p>
      <NavLink to={'/cntct/homesub'}><button>Click Me</button></NavLink>
      <Outlet/>
      
    </div>
  )
}

export default Contact