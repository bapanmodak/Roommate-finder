import React from 'react';
import { Link } from 'react-router';

const RoommatesPost = ({ roommate }) => {


    const { title, description, availability, location, _id } = roommate

    return (
        <div className='bg-gray-700 py-6 px-12 rounded-2xl  transition-transform hover:scale-105 hover:shadow-xl'>
            <ul className="card list-disc ">
                <li>
                    <h1 className='font-bold text-primary'>{title}</h1>
                </li>
                <li>
                    <p className=""><small>
                        <span className='text-primary font-semibold'>Availability:</span> {availability}</small>
                    </p>
                </li>
                <li className="">
                    <p>
                        <small><span className="text-primary font-semibold">location:</span> {location}</small>
                    </p>
                </li>
                <li className="">
                    <p className="">
                        <small><span className="text-primary font-semibold">Description:</span> {description}</small>
                    </p>
                </li>

            </ul>
            <Link to={`/roommate/${_id}`}>
                <button className='text-secondary py-1 cursor-pointer rounded mt-4 w-full text-xs font-bold mx-auto block bg-primary '>Read more</button></Link>
        </div>
    );
};

export default RoommatesPost;