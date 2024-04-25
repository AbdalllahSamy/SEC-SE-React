import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbox, IoSend } from "react-icons/io5";
import images from "./../../assets/images/images.png";
import ChatBody from './chat/ChatBody';
import axios from 'axios';
function Navbar() {
    const [show, setShow] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Get the token from localStorage or wherever it's stored
        const auth = JSON.parse(localStorage.getItem('auth'));
        console.log(auth.token);
    
        // Set up Axios request configuration
        const config = {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          }
        };
    
        // Make a POST request to the logout endpoint
        axios.post('http://localhost:3001/logout', null, {
    headers: {
        'Authorization': `Bearer ${auth.token}`
    }
})
.then(response => {
    console.log('Logout successful');
    localStorage.removeItem('auth');
    console.log(1);
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
                        <a href=''>Show Profile</a>
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
