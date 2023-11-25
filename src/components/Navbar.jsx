import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold '>
      <Link to="/">
        <h1 className='text-2xl '>CryptoBazar</h1>
      </Link>
      <div className='hidden md:block '>
        <ThemeToggle/>
      </div>
      <div className='hidden md:block'>
        <Link to='/signin' className='p-4 hover:text-accent '>Sign In</Link>
        <Link to='/signup' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-2xl hover:shadow-lg '>Sign Up</Link>
      </div>
      {/* Menu icon */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
      {nav? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
      </div>
      {/* Mobile view */}
      <div className={nav ? ('fixed md:hidden left-0 top-20 flex flex-col items-center justify-center w-full h-[90%] bg-primary  z-10') : ("hidden")}>
        <ul className='w-full p-4 flex flex-col justify-center items-center '>
            <li className='border-b py-4 cursor-pointer'>
                <Link to='/'>Home</Link>
            </li>
            <li className='border-b py-4 cursor-pointer'>
                <Link to='/'>Account</Link>
            </li>
            <li className='py-4 cursor-pointer'>
           <ThemeToggle/>
            </li>
        </ul>
        <div className='flex flex-col w-full p-4 items-center justify-center '>
            <Link to ='/signin'>
            <button className='cursor-pointer w-full my-2 px-16 py-2 bg-primary text-primary border border-secondary rounded-2xl shadow-xl '>Sign In</button>
            </Link>
            <Link to ='/signup'>
            <button className='cursor-pointer w-full my-2 px-16 py-2 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
