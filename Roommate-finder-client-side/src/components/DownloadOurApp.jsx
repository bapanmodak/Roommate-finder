
import React from 'react';
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { Link } from 'react-router';
import downloadApp from '../assets/downloadApp.png';

const DownloadOurApp = () => {
    return (
        <div className='bg-base-300 max-w-11/12 lg:max-w-10/12 mx-auto flex items-center justify-between px-12  rounded-3xl my-14 py-6'>
            <div className="lg:py-12">
                <h1 className="text-xl md:text-2xl font-semibold mb-8 md:leading-12 text-white">
                    Download Our Mobile App <br /> <span className='text-secondary'>20% Off</span>
                </h1>

                <div className="md:flex gap-4 space-y-4 md:space-y-0">

                    <div className="px-4 rounded-2xl border-secondary md:px-6 border md:rounded-4xl flex gap-2 items-center py-1 cursor-pointer">
                        <div className="">
                            <FaApple className='text-2xl text-white' />
                        </div>
                        <div className="">
                            <p className='text-xs text-white'><small>Get in on</small></p>
                            <p className='font-bold text-sm text-white'>Apps store</p>
                        </div>
                    </div>
                    <div className="px-4 rounded-2xl border-secondary md:px-6 border md:rounded-4xl flex gap-2 items-center py-1 cursor-pointer bg-primary text-white">
                        <div className="">
                            <IoLogoGooglePlaystore className='text-2xl' />

                        </div>
                        <div className="">
                            <p className='text-xs'><small>Get in on</small></p>
                            <p className='font-bold'>Google Play</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="w-md hidden md:w-[250px] md:block">
                <img src={downloadApp} alt="" className='' />
            </div>
        </div>
    );
};

export default DownloadOurApp;