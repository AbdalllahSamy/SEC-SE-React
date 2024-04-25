import React from 'react'
import images from "./../../../assets/images/images.png";
import { useState } from 'react';
import { IoChatbox,IoSend } from "react-icons/io5";
function ChatBody() {
  // const [show, setShow] = useState(false);

    // const toggle = () => {
    //     setShow(!show); 
    // };
  return (
    <>
      <div className = "chat-box show-chat" >
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
    </>
  )
}

export default ChatBody

