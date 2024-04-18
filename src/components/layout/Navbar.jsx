import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import images from "./../../assets/images/images.png"
function Navbar() {
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
                <a href="" className='not-icon'><IoIosNotifications /></a>
                <span className='not-span'>0</span>
                <a href="" className='chat-icon'><IoChatbox /></a>
                <span className='chat-span'>0</span>
                <img src={images} alt="" className='profile'/>
    </div>
  )
}

export default Navbar
