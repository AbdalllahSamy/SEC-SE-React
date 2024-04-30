import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

function SecsProfilePage() {
  const { id } = useParams(); // Use useParams hook to get the id parameter from the URL
  const [sec, setsec] = useState(null);

  useEffect(() => {
    const fetchsec = async () => {
      try {
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        if (!auth || !auth.token) {
          throw new Error("Authentication token not found.");
        }
        
        const response = await axios.get(`/api/admin/sec/${id}`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          },
          withCredentials: true
        });

        if (response.status === 200) {
          setsec(response.data);
        } else {
          throw new Error(`Failed to fetch sec. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Failed to fetch sec:', error);
        // Handle the error, such as displaying an error message to the user
      }
    };
    
    fetchsec();

    // Cleanup function
    return () => {
      setsec(null);
    };
  }, [id]); // Include id in the dependency array

  if (!sec) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' bg-white border-success border w-75 p-3 rounded-5'>
      <h2>{`${sec.firstName} ${sec.lastName}`}</h2>
      <p className=' text-black-50' >Level: {sec.level}</p>
      <p className=' text-black-50' >Bio: {sec.bio}</p>
      <p className=' text-black-50' >Address: {sec.address}</p>
      <p className=' text-black-50' >Email: {sec.email}</p>
    </div>
  );
}

export default SecsProfilePage;
