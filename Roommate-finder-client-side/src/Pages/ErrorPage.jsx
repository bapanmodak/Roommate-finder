import React from 'react';
import errorPage from '../assets/error-page.avif';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-400 via-lime-400 to-green-400 flex items-center justify-center'>
            <div className="text-center space-y-2">
                <img src={errorPage} alt="" className='w-md rounded-2xl' />
                <p className="text-2xl font-bold mt-4">Oops! Page not found.</p>
                <p className="font-semibold">
                    Looks like the page you're looking for doesn't exist.
                </p>
                <Link to="/" className='btn btn-primary'>Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;