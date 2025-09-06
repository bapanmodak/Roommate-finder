import React, { use } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';

const FindRoommate = () => {

    const { user } = use(AuthContext)
    const { email, displayName } = user || {}


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const newRoommate = Object.fromEntries(formData.entries())
        form.reset()

        // send the server

        fetch("https://roommate-server-side-nu.vercel.app/roommates", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newRoommate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your details has been posted",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // form.reset()
                }
            })
    }



    return (
        <div className='bg-green-200 min-h-screen'>

            <p className='text-2xl md:text-4xl text-primary text-center pt-4 md:pt-6 font-bold'>
                <Typewriter
                    words={['Create a post to find Roommates']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>

            <form onSubmit={handleSubmit} className="w-10/12 mx-auto  py-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 text-black">
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Title</legend>
                        <input required type="text" className="input" name='title' placeholder="Type here" />
                    </fieldset>
                    {/* location */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Location</legend>
                        <input required type="text" className="input" name='location' placeholder="Type here" />
                    </fieldset>
                    {/* Rent Amount */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Rent Amount</legend>
                        <input required type="text" className="input" name='rentAmount' placeholder="Type here" />
                    </fieldset>
                    {/* select */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Room Type</legend>
                        <select className="select" name='roomType'>
                            <option disabled selected>Pick a browser</option>
                            <option>Single</option>
                            <option>Shared</option>
                        </select>
                    </fieldset>
                    {/* select */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Lifestyle Preferences</legend>
                        <select className="select" name='lifestyle'>
                            <option disabled selected>Pick a browser</option>
                            <option>Pets</option>
                            <option>Smoking</option>
                            <option>Night Owl</option>
                        </select>
                    </fieldset>
                    {/* select */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Availability </legend>
                        <select required className="select" name='availability'>
                            <option disabled selected>Pick a browser</option>
                            <option value={"available"}>available</option>
                            <option value={"not available"}>not available</option>
                        </select>
                    </fieldset>
                    {/* Description */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend required className="fieldset-legend">Description</legend>
                        <input required type="text" className="input" name='description' placeholder="Type here" />
                    </fieldset>
                    {/* Contact Info  */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Contact Info </legend>
                        <input required type="text" className="input" name='contactInfo' placeholder="Type here" />
                    </fieldset>
                    {/* User Email */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">User Email</legend>
                        <input required type="text" value={email} className="input" name='userEmail' placeholder="Type here" />
                    </fieldset>
                    {/* User Name */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">User Name</legend>
                        <input required type="text" value={displayName} className="input" name='userName' placeholder="Type here" />
                    </fieldset>
                </div>

                <button className='btn btn-primary  block mt-4 w-2/12 ml-10'>Post</button>
            </form>


        </div>
    );
};

export default FindRoommate;