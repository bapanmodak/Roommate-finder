import React from 'react';
import Banner from '../components/Banner';
import DownloadOurApp from '../components/DownloadOurApp';
import TeamCarousel from '../components/TeamMembers';
import RoommatesPost from '../components/RoommatesPost';
import { useLoaderData } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const roommates = useLoaderData()

    if (!roommates || roommates.length === 0) {
        return <Loader />;
    }

    return (
        <div>
            <Banner />
            <div className="bg-base-300">
                <h1 className='pt-4 md:pt-8 text-2xl md:text-4xl text-center font-bold text-primary'>
                    <Typewriter
                        words={["Our users post"]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <div className="w-10/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">


                    {
                        roommates.map(roommate => <RoommatesPost
                            key={roommate._id}
                            roommate={roommate}
                        >
                        </RoommatesPost>)
                    }
                </div>
            </div>
            <DownloadOurApp />
            <TeamCarousel />

        </div>
    );
};

export default Home;