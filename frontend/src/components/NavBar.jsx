import { NavLink } from 'react-router'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { GoPlus } from "react-icons/go";

function NavBar() {
    return (
        <nav className='w-full h-[4rem] bg-white text-black flex justify-between items-center border-b border-gray-400/50 px-8'>
            <div className='flex h-full items-center'>
                <div className='flex items-center gap-x-4'>
                    <NavLink href='/'>
                        {/* <img
                            src='/logo.svg'
                            alt='logo'
                            width={16}
                            height={16}
                            className='cursor-pointer'
                        /> */}
                    </NavLink>
                    <h1 className='font-bold text-xl cursor-pointer'>
                        <NavLink href='/'>EcoPlus</NavLink>
                    </h1>
                </div>
                <div className='pl-8'>
                    <ul className='flex gap-x-6 text-zinc-800'>
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/explore">Explore</NavLink>
                        </li>
                        <li>
                            <NavLink href="/notifications">Notifications</NavLink>
                        </li>
                        <li>
                            <NavLink href="/messages">Messages</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-x-6'>
                <div className='flex items-center bg-[#E8EDF5] rounded-xl text-[#4A739C] gap-x-2 w-[160px] px-3'>
                    <IoSearchOutline className='size-5' />
                    <input type="text" name="" id="" placeholder='Search' className='placeholder-[#4A739C] w-3/5 outline-none' />
                </div>
                <div className='h-[40px] w-[40px] rounded-xl bg-[#E8EDF5] flex justify-center items-center'>
                    <GoPlus className='size-5' />
                </div>
            </div>
        </nav>
    );
}

export default NavBar
