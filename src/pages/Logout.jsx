import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { logout } from '../services/authService';

export default function Logout() {
    const { userLogoutHandler } = useAuthContext();
    useEffect(() => {
        logout();
        userLogoutHandler();
    }, [userLogoutHandler]);

    return <Navigate to='/login' />;
}