import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbox,IoSend } from "react-icons/io5";
import images from "./../../assets/images/images.png";

function Navbar() {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show); 
    };

    return (
        <div className='header'>
            <div className="search-box">
                <form action="">
                    <input type="text" name='search' id='srch' placeholder='search'/>
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
                <a href="#" className='chat-icon' onClick={toggle}><IoChatbox /></a>
                <span className='chat-span'>0</span>
                <img src={images} alt="" className='profile'/>
            </div>

            
            <div className={`chat-box ${show ? 'show-chat' : ''}`}>
                <div className="client">
                    <img src={images} alt="" />
                    <div className="client-info">
                        <h2>Admin</h2>
                        <p>online</p>
                    </div>
                </div>
                <div className="chats">
                    <div className="client-chat">Hi</div>
                    <div className="my-chat">Hi</div>
                    <div className="client-chat">How can I help you</div>
                    <div className="my-chat">Send me all teachers</div>
                </div>
                <div className="chat-input">
                    <input type="text" placeholder='Enter Message'/>
                    <button className='send-btn'>
                        <IoSend />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
