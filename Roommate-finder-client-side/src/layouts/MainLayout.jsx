import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {

    const [theme, setTheme] = useState("light");

    return (
        <div data-theme={theme} className="min-h-screen transition-all duration-300">


            <Header theme={theme} setTheme={setTheme} className='max-w-7xl mx-auto' />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default MainLayout;