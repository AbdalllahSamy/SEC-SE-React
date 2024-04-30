import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatBody from './ChatBody';
import images from './../../../assets/images/images.png';

function PersonsChat({ onPersonChatClick }) {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    if (auth.role === "ADMIN") {
      axios.get('/api/admin/secretary', {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        },
        withCredentials: true
      })
        .then(response => {
          setChat(response.data);
        })
        .catch(error => {
          console.error('Failed to fetch chat data:', error);
        });
    }
  }, []);

  return (
    <>
      <div className="chat-box show-chat">
        <div className="persons-header">
          <p className='name text-dark text-center text-capitalize fw-bold fs-4'>chats</p>
        </div>
        {chat.map((person, index) => (
          <div key={index} className="persons-chat d-flex mb-2 align-items-center gap-2" onClick={() => onPersonChatClick(person)}>
            <img src={images} alt="" className='profile' />
            <h5 className='text-dark'>{person.firstName + ' ' + person.lastName}</h5>
          </div>
        ))}
      </div>
    </>
  )
}

export default PersonsChat;
