import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <div className=""><Outlet /></div>
        </div>
    );
};

export default AuthLayout;