import React from 'react';
import { Fade } from 'react-awesome-reveal';
// import CEO from '../assets/CEO.jpg';
// import GM from '../assets/GM.jpg';

const team = [
    {
        name: "Bapan Modak",
        role: "CEO of Find Roommates",
        image: "https://i.ibb.co/7JqJQKSk/CEO.jpg"
    },
    {
        name: "Tanvir Hossain",
        role: "General Manager",
        image: "https://i.ibb.co/Lz6ZyvGQ/GM.jpg"
    },
    {
        name: "Sadia Jahan",
        role: "Client Handler ",
        image: "https://i.ibb.co/6JbjhN8J/AS.jpg"
    }
];

const TeamMembers = () => {
    return (
        <div className="bg-secondary py-12 text-white">
            <div className="max-w-10/12 mx-auto px-4 text-center">
                <Fade cascade damping={0.2} direction="up">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Meet Our Team</h2>
                    <p className="mb-10 text-lg text-gray-200">Passionate, skilled, and dedicated to building something impactful.</p>
                </Fade>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Fade cascade damping={0.2} direction="up">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-white text-black rounded-lg shadow-lg p-6  lg:py-12">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold mb-4 ">{member.name}</h3>
                                <p className="text-sm text-gray-600 font-semibold">{member.role}</p>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
