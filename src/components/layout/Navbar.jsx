import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbox, IoSend } from "react-icons/io5";
import images from "./../../assets/images/images.png";
import ChatBody from './chat/ChatBody';
import PersonsChat from './chat/PersonsChat';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navbar() {
    const [show, setShow] = useState(false);
    const [showChatBody, setShowChatBody] = useState(false);
    const [personeData, setPersoneData] = useState([]);
    const [profileVisible, setProfileVisible] = useState(false);
    const navigate = useNavigate();
    const authRole = JSON.parse(sessionStorage.getItem("auth")).role;
    let profilePath = '';
    if (authRole === "ADMIN") {
        profilePath = `/dashboard-admin/profile`;
    }else if(authRole === 'SEC'){
        profilePath = `/dashboard-sec/profile`
    }else if(authRole === 'TEACHER'){
        profilePath =`dashboard-teacher/profile`
    }else if(authRole === 'USER'){
        profilePath =`dashboard-user/profile`
    }


    const handleLogout = (event) => {
        event.preventDefault(); 
        const auth = JSON.parse(sessionStorage.getItem("auth"));


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
    const handlePersonChatClick = (data) => {
        setPersoneData(data);
        setShowChatBody(true);
    };
    const handleChatBodyBackClick = () => {
        setShowChatBody(false);
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
            {
                show && (showChatBody ? <ChatBody onBackClick={handleChatBodyBackClick} data={personeData} /> : <PersonsChat onPersonChatClick={handlePersonChatClick} />) 
            }
        </div>
    );
}

export default Navbar;
