import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const UpdateRoommatePost = () => {

    const roommatePostData = useLoaderData()
    const { title, location, roomType, lifestyle, availability, description, rentAmount, userEmail, userName, contactInfo, _id } = roommatePostData


    const handleUpdateData = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatePost = Object.fromEntries(formData.entries())

        fetch(`https://roommate-server-side-nu.vercel.app/allRoommates/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatePost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='min-h-screen'>
            <form onSubmit={handleUpdateData} className="w-10/12 mx-auto  my-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 text-black">
                    {/* title */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Title</legend>
                        <input defaultValue={title} type="text" className="input" name='title' placeholder="Type here" />
                    </fieldset>
                    {/* location */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Location</legend>
                        <input type="text" defaultValue={location} className="input" name='location' placeholder="Type here" />
                    </fieldset>
                    {/* Rent Amount */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Rent Amount</legend>
                        <input type="text" defaultValue={rentAmount} className="input" name='rentAmount' placeholder="Type here" />
                    </fieldset>
                    {/* select */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Room Type</legend>
                        <select className="select" defaultValue={roomType} name='roomType'>
                            <option disabled selected>Pick a browser</option>
                            <option value="single">Single</option>
                            <option value="Shared">Shared</option>
                        </select>
                    </fieldset>
                    {/* select */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Lifestyle Preferences</legend>
                        <select defaultValue={lifestyle} className="select" name='lifestyle'>
                            <option disabled selected>Pick a browser</option>
                            <option value="Pets">Pets</option>
                            <option value="Smoking">Smoking</option>
                            <option value="Night Owl">Night Owl</option>
                        </select>
                    </fieldset>
                    {/* select */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Availability </legend>
                        <select defaultValue={availability} className="select" name='availability'>
                            <option disabled selected>Pick a browser</option>
                            <option value={"available"}>available</option>
                            <option value={"not available"}>not available</option>
                        </select>
                    </fieldset>
                    {/* Description */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Description</legend>
                        <input defaultValue={description} type="text" className="input" name='description' placeholder="Type here" />
                    </fieldset>
                    {/* Contact Info  */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">Contact Info </legend>
                        <input defaultValue={contactInfo} type="text" className="input" name='contactInfo' placeholder="Type here" />
                    </fieldset>
                    {/* User Email */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">User Email</legend>
                        <input value={userEmail} type="text" className="input" name='userEmail' placeholder="Type here" />
                    </fieldset>
                    {/* User Name */}
                    <fieldset className="fieldset w-10/12 mx-auto">
                        <legend className="fieldset-legend">User Name</legend>
                        <input value={userName} type="text" className="input" name='userName' placeholder="Type here" />
                    </fieldset>
                </div>

                <button className='btn btn-primary  block mt-4 w-2/12 ml-10'>Post</button>
            </form>
        </div>
    );
};

export default UpdateRoommatePost;