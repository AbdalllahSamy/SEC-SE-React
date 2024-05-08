import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Class() {
  const { id } = useParams();
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        if (!auth || !auth.token) {
          throw new Error("Authentication token not found.");
        }
        
        const response = await axios.get('/api/show/class', {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          },
          withCredentials: true
        });

        if (response.status === 200) {
          setClasses(response.data);
        } else {
          throw new Error(`Failed to fetch classes. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Failed to fetch classes:', error);
        setError('Failed to fetch classes. Please try again later.');
      }
    };
    
    fetchClasses();

    // Cleanup function
    return () => {
      setClasses([]);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <div className="all-cards row p-5">
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {classes.map((classs, index) => (
          <div className="event-card" key={index}>
            <div className="event-name">
              <p className='fs-3 ms-3'></p>
            </div>
            <h2>{classs.name}</h2>
            <p className='mt-5 ms-2 text-black-50'>{classs.level}</p>
            <p className='mt-5 ms-2 text-black-50'>{classs.subjects}</p>
            <div className="hosters"></div>
            <div className='d-flex flex-column gap-2'></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Class;
