import React, { use, useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaLifeRing, FaMobileAlt, FaPaw, FaUser } from 'react-icons/fa';
import { FaIndianRupeeSign, FaPerson } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const RoommateDetails = () => {
    const roommateDetails = useLoaderData()

    const { user } = use(AuthContext)
    console.log(user);

    console.log(roommateDetails);

    const { title, description, availability, location, roomType, lifestyle, contactInfo, rentAmount, userEmail, userName, _id } = roommateDetails;


    const [countLikes, setCountLikes] = useState(roommateDetails.likeCount || 0);


    const handleLike = () => {

        const currentUserEmail = user?.email;

        if (currentUserEmail === userEmail) {
            toast("You cannot like your own post!");
            return;
        }

        fetch(`https://roommate-server-side-nu.vercel.app/roommates/${_id}/like`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: currentUserEmail })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setCountLikes(prev => prev + 1);
                }
            });
    };

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center ">
            <ToastContainer />
            <div className="text-black bg-white w-2xl p-12 rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-2 items-center">
                        <button onClick={handleLike} className={``}>
                            <BiLike size={24} />
                        </button>
                        <p className=' font-semibold'>{countLikes} people interest</p>
                    </div>
                    <div className="">
                        {countLikes > 0 && (
                            <p className="mb-6 md:mb-0 flex items-center gap-2 font-semibold">
                                <FaMobileAlt className='text-primary' /> {contactInfo}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl text-center font-bold text-primary">{title}</h1>
                    <p className='bg-green-200 py-1 px-3 rounded-2xl'>{availability}</p>
                </div>
                <hr className='my-8 border-gray-300' />

                <div className="md:flex justify-between ">
                    <div className="*:flex *:items-center *:gap-2 space-y-4 text-xl">
                        <p className=""> <IoLocation className='text-primary' /> {location}</p>
                        <p className=""> <FaPerson className='text-primary' /> {roomType}</p>
                        <p className=""> <FaPaw className='text-primary' /> {lifestyle}</p>

                    </div>
                    <div className="*:flex *:items-center *:gap-2 space-y-4 text-xl">
                        <p className=""> <FaIndianRupeeSign className='text-primary' /> {rentAmount}</p>
                        <p className=""> <FaUser className='text-primary' /> {userName}</p>
                        <p className=""> <MdEmail className='text-primary' /> {userEmail}</p>

                    </div>
                </div>
                <div className=" ">
                    <p className="flex items-center gap-2 mt-4 text-xl"> <TbFileDescription size={24} className='text-primary' /> {description}</p>
                </div>

            </div>
        </div>
    );
};

export default RoommateDetails;