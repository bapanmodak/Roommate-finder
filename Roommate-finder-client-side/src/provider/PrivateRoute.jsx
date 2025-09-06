import React from 'react';
import Loader from '../components/Loader';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        return <Navigate to="/auth/signIn" />
    }

    return children;
};

export default PrivateRoute;

