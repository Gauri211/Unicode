import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth.js';

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <div>Welcome {auth.user}
        <br></br>
            Email: {auth.email}
            <br></br>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile;