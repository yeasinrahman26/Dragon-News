import React from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'

const NavBar = () => {
    return (
      <div className="flex justify-between my-6">
        <div></div>
        <div className="space-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <div>
            <img src={userIcon} alt="" />
          </div>
          <NavLink to={'/auth/login'} className="btn btn-neutral">Login</NavLink>
        </div>
      </div>
    );
};

export default NavBar;