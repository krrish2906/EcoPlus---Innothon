import { NavLink } from 'react-router';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { GoPlus } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className='w-full h-[4rem] bg-white text-black flex justify-between items-center border-b border-gray-400/50 px-8'>
            <div className='flex h-full items-center'>
                <div className='flex items-center gap-x-4'>
                    <NavLink to='/'>
                        {/* <img
                            src='/logo.svg'
                            alt='logo'
                            width={16}
                            height={16}
                            className='cursor-pointer'
                        /> */}
                    </NavLink>
                    <h1 className='font-bold text-xl cursor-pointer'>
                        <NavLink to='/'>EcoPlus</NavLink>
                    </h1>
                </div>
                <div className='pl-8'>
                    <ul className='flex gap-x-6 text-zinc-800'>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/explore">Explore</NavLink>
                        </li>
                        <li>
                            <NavLink to="/notifications">Notifications</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className='flex gap-x-4 items-center'>
                {/* GoPlus Icon */}
                <div
                    className='h-[40px] w-[40px] rounded-xl bg-[#E8EDF5] flex justify-center items-center cursor-pointer'
                    onClick={() => navigate('/postform')}
                >
                    <GoPlus className='size-5' />
                </div>

                {/* Profile Picture */}
                <div
                    className='h-[40px] w-[40px] rounded-full bg-gray-300 overflow-hidden cursor-pointer'
                    onClick={() => navigate('/user/profile')}
                >
                    <img
                        src={'/profile.jpg'} // 🔁 Replace with dynamic image if needed
                        alt='Profile'
                        className='h-full w-full object-cover'
                    />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
