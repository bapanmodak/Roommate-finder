import React from 'react';
import logo from '../../assets/logo.png';
import { IoCall, IoLocation } from 'react-icons/io5';
import { RiMessage2Fill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';


const Footer = () => {
    return (
        <div className="bg-base-300 text-white">
            <div className=" max-w-10/12 mx-auto py-12 border-b">
                <div className='bg-primary hidden md:flex justify-between p-8 rounded-2xl '>
                    <div className="flex gap-4 items-center ">
                        <div className=" border p-2 rounded-full">
                            <div className="bg-base-100 text-primary p-2 rounded-full">
                                <IoLocation className='text-2xl' />
                            </div>
                        </div>
                        <div className="">
                            <p className='text-xs'>Address</p>
                            <h5 className='font-bold'>Dhaka, Bangladesh</h5>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className=" border p-2 rounded-full">
                            <div className="bg-base-100 text-primary p-2 rounded-full">
                                <IoCall className='text-2xl' />
                            </div>
                        </div>
                        <div className="">
                            <p>Send Email</p>
                            <h5>bapan2317@gmail.com</h5>
                        </div>

                    </div>

                    <div className="flex gap-4 items-center">
                        <div className=" border p-2 rounded-full">
                            <div className="bg-base-100 text-primary p-2 rounded-full">
                                <IoLocation className='text-2xl' />
                            </div>
                        </div>
                        <div className="">
                            <p>Call Emergency</p>
                            <h5 className="">+88 0123 654 99</h5>
                        </div>
                    </div>

                </div>
                <div className="flex md:gap-8 justify-between flex-col md:flex-row mt-12">
                    <div className='md:w-md flex flex-col '>
                        <div className="flex  gap-2 items-center">
                            <img src={logo} alt="Logo" className='w-[40px]' />
                            <div>
                                <h2 className='text-2xl font-bold'>ROOMMATE</h2>
                                <p className='uppercase text-xs font-semibold text-gray-300'>
                                    Find your Roommate
                                </p>
                            </div>
                        </div>

                        <div className="w-[300px]">
                            <p className='text-xs my-6 leading-6'>
                                ROOMMATE makes finding the right roommate simple and stress-free. Browse verified listings, match by lifestyle, and move in with confidence — whether you're new in town or just need to share rent.
                            </p>
                        </div>

                        <div className="flex md:flex-col gap-6 w-[300px]">
                            <p>Follow on</p>
                            <ul className='flex gap-4  *:hover:text-primary'>
                                <li><Link> <FaFacebookF /> </Link></li>
                                <li><Link> <BsInstagram /> </Link></li>
                                <li><Link> <FaTwitter /> </Link></li>
                                <li><Link> <FaLinkedinIn /> </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between mt-8 md:mt-0">
                        <div className="">
                            <p className='mb-6'>Quick Links</p>
                            <nav className="space-x-6 text-xs font-medium flex flex-col space-y-4 *:flex *:items-center *:gap-1">
                                <NavLink to="/" className="hover:text-secondary"><MdKeyboardDoubleArrowRight className='text-primary ' />Home</NavLink>
                                <NavLink to="/findRoommate" className="hover:text-secondary"><MdKeyboardDoubleArrowRight className='text-primary ' />Find Roommate</NavLink>
                                <NavLink to="/browseListing" className="hover:text-secondary"><MdKeyboardDoubleArrowRight className='text-primary ' />Browse Listing</NavLink>
                                <NavLink to="/myListing" className="hover:text-secondary"><MdKeyboardDoubleArrowRight className='text-primary ' />My Listing</NavLink>
                            </nav>
                        </div>
                        <div className="md:hidden">
                            <p className='mb-6'>Discoverd</p>

                            <nav className="space-x-6 text-xs font-medium  md:hidden flex-col space-y-4 *:flex *:items-center *:gap-1  *:hover:text-secondary">
                                <Link><MdKeyboardDoubleArrowRight className='text-primary ' />About</Link>
                                <Link><MdKeyboardDoubleArrowRight className='text-primary ' />Gallery</Link>
                                <Link><MdKeyboardDoubleArrowRight className='text-primary ' />Our Time</Link>
                                <Link><MdKeyboardDoubleArrowRight className='text-primary ' />Contact</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <p className='mb-6'>Discoverd</p>

                        <nav className="space-x-6 text-xs font-medium hidden md:flex flex-col space-y-4 *:flex *:items-center *:gap-1  *:hover:text-secondary">
                            <Link><MdKeyboardDoubleArrowRight className='text-primary ' />About</Link>
                            <Link><MdKeyboardDoubleArrowRight className='text-primary ' />Gallery</Link>
                            <Link><MdKeyboardDoubleArrowRight className='text-primary ' />Our Time</Link>
                            <Link><MdKeyboardDoubleArrowRight className='text-primary ' />Contact</Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-10/12 mx-auto flex justify-between text-xs py-4">
                <p>
                    © 2024 2025 Roommate. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;