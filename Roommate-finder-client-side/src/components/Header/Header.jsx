import React, { use, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiMenu2Line } from 'react-icons/ri';
import { MdRestaurantMenu } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import "./header.css"

const Header = ({ theme, setTheme }) => {

    const { user, LogOut, setUser, setLoading } = use(AuthContext)

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

    const handleLogOut = () => {
        setLoading(true);
        LogOut()
            .then(() => {
                setUser(null);
                toast("Log out successfully");
                setTimeout(() => {
                    navigate("/");
                }, 200);
            })
            .catch(error => toast(error))
            .finally(() => setLoading(false));
    };


    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const links = <>
        <li><NavLink to="/" className="hover:text-secondary">Home</NavLink></li>
        <li><NavLink to="/findRoommate" className="hover:text-secondary">Post Find Roommate</NavLink></li>
        <li><NavLink to="/browseListing" className="hover:text-secondary">Browse Listing</NavLink></li>
        <li><NavLink to="/myListing" className="hover:text-secondary">My Listing</NavLink></li>
        <li><NavLink to="/dashboard" className="hover:text-secondary">Dashboard</NavLink></li>
    </>

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='header sticky top-0 z-50 bg-base-300 bg-opacity-95 backdrop-blur-sm shadow-md'>
            <div className='max-w-10/12 mx-auto flex justify-between items-center p-4'>
                {/* Logo */}
                <div className="hidden lg:flex gap-2 items-center">
                    <img src={logo} alt="Logo" className='w-[40px]' />
                    <div>
                        <h2 className='text-2xl font-bold text-white'>ROOMMATE</h2>
                        <p className='uppercase text-xs font-semibold text-gray-300'>
                            Find your Roommate
                        </p>
                    </div>
                </div>

                <div onClick={() => handleToggleMenu(isOpen)} className='lg:hidden '>

                    {
                        isOpen ? <MdRestaurantMenu size={24} /> : <RiMenu2Line size={24} />
                    }
                    {
                        isOpen && <div className="">
                            <nav className="relative ">
                                <ul className="absolute top-6  bg-gray-400 p-4  *:mb-2 w-[160px] rounded-2xl ">
                                    {links}
                                </ul>
                            </nav>
                        </div>
                    }

                </div>
                {/* <RiMenu2Line size={24} /> */}


                {/* Navbar Links */}
                <nav>
                    <ul className="space-x-6 text-white text-sm font-medium hidden lg:flex">
                        {links}
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="space-x-4  flex">
                    <div className="">
                        <button onClick={toggleTheme} className="px-2 py-1 text-base-100 text-xs rounded bg-primary md:btn md:btn-sm md:btn-primary">
                            {theme === "light" ? " Dark" : " Light"}
                        </button>
                    </div>
                    {
                        user ?
                            <div className="flex items-center gap-3">

                                <Tooltip
                                    anchorSelect="#hello"
                                    content={user.displayName}
                                />
                                <div className="">
                                    {
                                        <img
                                            id='hello'
                                            className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full' src={user.photoURL ? user.photoURL : <FaRegUserCircle />}

                                        />


                                    }
                                </div>
                                <button onClick={handleLogOut} className='text-xs text-secondary py-1 px-2 md:py-1.5 md:px-6 md:text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>LogOut</button>
                            </div>
                            :
                            <div className='space-x-4'>
                                <Link to={"/auth/signIn"} className='text-secondary py-1.5 px-6 text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>
                                    Sign In
                                </Link>
                                <Link to={"/auth/register"} className='text-secondary py-1.5 px-6 text-sm rounded-2xl border border-secondary hover:bg-secondary hover:text-white transition'>
                                    Signup
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
