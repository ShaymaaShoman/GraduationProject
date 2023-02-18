import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
  return (
    <div className='help-layout'>
      <h2 style={{textAlign:"center"}}> What I Can Help You</h2>
      <nav>
      <NavLink to="Help">help </NavLink>
      <NavLink to="Contact">Contact </NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HelpLayout;
