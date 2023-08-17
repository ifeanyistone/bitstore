// import React from 'react'
import Home from "./Home"
import Collections from "./Collections"
import Men from "./Men"
import Women from "./Women"
import About from "./About"
import Contact from "./Contact"
import pix from "../assets/man.jpg"
import basket from "../assets/chart.jpg"
import vec from "../assets/vector.jpg"
import Button from "./Button";
import { NavLink } from "react-router-dom"




const Navbar = () => {
  
  return (
    <nav className="p-4 bg-blue-300 shadow md:flex md:items-center justify-between fixed top-0 w-full">
      <div className=" pl-20">
        <span className="pl-8 font-[Poppins] text-2xl font-bold text-gray-700 cursor-pointer " >
             <a href="/"> Bitstore</a>
        </span> 
      </div>

      <ul className="container text-gray-400 pl-8 md:flex md:items-center space-x-10"> 
        <li> 
          <NavLink to="collections">
             <a href="#" className=" hover:text-blue-900 duration-500"  >Collections</a>
          </NavLink>
        </li>
        <li> 
          <NavLink to="men">
             <a href="#" className=" hover:text-blue-900 duration-500"  >Men</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="women">
             <a href="#" className=" hover:text-blue-900 duration-500"  >Women</a>
          </NavLink>
        </li>
        <li> 
          <NavLink to="about">
             <a href="#" className=" hover:text-blue-900 duration-500"  >About</a>
          </NavLink>
        </li>
        <li> 
          <NavLink to="Contact">
             <a href="#" className=" hover:text-blue-900 duration-500"  >Contact</a>
          </NavLink>
        </li>
        
      </ul> 
      <div className="flex space-x-8 pr-20 cursor-pointer" > 

          {/* Profile section, which include cart  */}
        <div className="pt-3 "> 
            {/* <img src={vec} className="h-8 w-10"/> */}
            <Button name="Cart" />
        </div>
        <div><img src={pix} className="rounded-full h-12 w-24"/>
        </div>
      </div>
    </nav>
    
    )
}

export default Navbar