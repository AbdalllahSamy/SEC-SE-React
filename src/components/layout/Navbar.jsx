import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbox, IoSend } from "react-icons/io5";
import images from "./../../assets/images/images.png";
import ChatBody from './chat/ChatBody';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, setShow] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const profilePath = `${currentPath}/profile`;

    const handleLogout = (event) => {
        event.preventDefault(); 
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        console.log(auth.token);


        // Make a POST request to the logout endpoint
        axios.post('/logout', {
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            withCredentials: true
        })
            .then(response => {
                sessionStorage.removeItem('auth');
                navigate("/");
            })
            .catch(error => {
                console.error('Logout failed:', error);
                console.log(error);
            });

    };

    const toggleChat = () => {
        setShow(!show);
    };

    const toggleProfile = () => {
        setProfileVisible(!profileVisible);
    };

    return (
        <div className='header'>
            <div className="search-box">
                <form action="">
                    <input type="text" name='search' id='srch' placeholder='search' />
                    <button type="submit"><CiSearch /></button>
                </form>
            </div>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
            <div className="icons">
                <a href="" className='not-icon'><IoIosNotifications /></a>
                <span className='not-span'>0</span>
                <a href="#" className='chat-icon' onClick={toggleChat}><IoChatbox /></a>
                <span className='chat-span'>0</span>
                <img src={images} alt="" className='profile' onClick={toggleProfile} />
                <div className="profile-info" style={{ display: profileVisible ? 'block' : 'none' }}>
                    <div className="show-profile text-uppercase">
                    <Link to={profilePath}>Show Profile</Link>                       
                     <hr />
                    </div>
                    <div className="log-out text-light text-center text-uppercase ">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
            {show && <ChatBody />}
        </div>
    );
}

export default Navbar;
