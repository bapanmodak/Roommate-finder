// components/Banner.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="relative h-[500px]">
            {/* Carousel (Background Images) */}
            <Carousel
                showArrows={false}
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000}
                showIndicators={false}
                swipeable={false}
                className="h-full"
            >
                <div>
                    <img
                        src="https://wallpapers.com/images/hd/luxury-house-apartment-7ijna4uncds48n0h.jpg"
                        alt="Slide 1"
                        className="object-cover h-[500px] w-full"
                    />
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                        alt="Slide 2"
                        className="object-cover h-[500px] w-full"
                    />
                </div>
                <div>
                    <img
                        src="https://wallpapers.com/images/featured/modern-house-hrkcz1vqchy99mkc.jpg"
                        alt="Slide 3"
                        className="object-cover h-[500px] w-full"
                    />
                </div>
            </Carousel>

            {/* Fixed Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
                <h1 className="text-4xl text-center md:text-5xl font-bold mb-8">
                    Find to your best Roommate
                </h1>
                <div className="text-white text-xs">
                    <div className="p-2 md:p-4 backdrop-blur-xs border border-b-0 bg-white/30 rounded-t-lg w-[100px]  md:w-[150px] text-center mx-auto">
                        <div className="md:text-xl font-semibold text-white text-xs">Roommate</div>
                    </div>

                    <div className="p-4 backdrop-blur-sm border bg-white/30 md:w-[700px] lg:w-[1000px] items-center flex justify-between rounded-2xl ">
                        <div className="text-white ">
                            <label className="block mb-1">Keyword</label>
                            <input
                                type="text"
                                placeholder="Looking for?"
                                className="w-full rounded-lg bg-transparent text-white placeholder-white placeholder:font-bold border-none focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="text-white">
                            <label className="block mb-1">Room Type</label>
                            <select className=" *:text-black font-bold">
                                <option value="">Sheared</option>
                                <option value="">Single</option>
                            </select>
                        </div>
                        <div className="text-white hidden md:block">
                            <label className="block mb-1">Lifestyle</label>
                            <select className="font-bold *:text-black">
                                <option disabled value="">Pets</option>
                                <option value="">Smoking</option>
                                <option value="">Night Owl</option>
                            </select>
                        </div>
                        <div className="">
                            <button className="py-2 px-4 bg-primary rounded ml-12 md:ml-0 font-bold md:btn md:btn-primary">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
