import React from 'react';
import { Link, useLoaderData } from 'react-router';
import BrowseListingDetails from './BrowseListingDetails';
import { Typewriter } from 'react-simple-typewriter';

const BrowseListing = () => {

    const allRoommates = useLoaderData()




    return (

        <div className="bg-gray-300 min-h-screen text-white">

            <p className='text-2xl md:text-4xl text-primary text-center pt-4 md:pt-6 font-bold'>
                <Typewriter
                    words={['See all post to our users']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 py-12'>
                {allRoommates.map(singleRoommate => <BrowseListingDetails singleRoommate={singleRoommate}></BrowseListingDetails>)}
            </div>
        </div>



    );
};

export default BrowseListing;