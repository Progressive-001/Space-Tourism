// import { useState } from "react";
import logo from  "/assets/shared/logo.svg";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  
  return (
    <div className="flex items-center w-full text-white">

      <div className="flex items-center max-w-[840px] absolute top-[55px] z-20">
        {/* Logo */}
        <NavLink  to="/">
          <img src={logo} alt="logo-icon" className="h-14 ml-[40px]" />
        </NavLink>

        <div className="h-0 border border-slate-600 min-w-[580px]  ml-[70px]" />
      </div>
      

      {/* Nav Links */}
      <ul 
        className="flex gap-[55px] bg-gray-900 p-[35px] pr-[70px] justify-end font-barlowRegular tracking-[2px] bg-white/10 backdrop-blur-lg header mt-[35px] z-10" 
        // onClick={handleClick}
      >
        <li>
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `nav-underline${isActive ? " active" : ""} font-barlow text-preset-8 leading-auto tracking-preset-2 font-thin`
            }
          >
            <span className="font-bold">00</span> HOME
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/destination" 
            className={({isActive}) =>
              `nav-underline${isActive ? " active" : ""} font-barlow text-preset-8 leading-auto tracking-preset-2 font-thin`
            }
          >
            <span className="font-bold">01</span> DESTINATION
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/crew" 
            className={({isActive}) => 
              `nav-underline${isActive ? " active" : ""} font-barlow text-preset-8 leading-auto tracking-preset-2 font-thin`
            }
          >
            <span className="font-bold">02</span> CREW
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/technology" 
            className={({isActive}) =>  
              `nav-underline${isActive ? " active" : ""} font-barlow text-preset-8 leading-auto tracking-preset-2 font-thin`
            }
          >
            <span className="font-bold">03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header