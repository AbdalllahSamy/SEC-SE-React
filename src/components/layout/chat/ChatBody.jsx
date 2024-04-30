import React from 'react';
import images from "./../../../assets/images/images.png";
import { IoChatbox, IoSend } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

function ChatBody(props) {
  return (
    <>
      <div className="chat-box show-chat">
        <div className="client">
          <FaArrowLeft style={{ color: 'white', paddingRight: '5px', marginRight: '5px', cursor: 'pointer' }} onClick={props.onBackClick} />
          <img src={images} alt="" />
          <div className="client-info">
            <h4 className='mt-3'>{props.data.firstName + ' ' + props.data.lastName}</h4>
          </div>
        </div>
        <div className="chats">
          <div className="client-chat">Hi</div>
          <div className="my-chat">Hi</div>
          <div className="client-chat">How can I help you</div>
          <div className="my-chat">Send me all teachers</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder='Enter Message' />
          <button className='send-btn'>
            <IoSend />
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatBody;
