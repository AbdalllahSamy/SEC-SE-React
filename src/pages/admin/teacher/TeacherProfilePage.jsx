import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

function TeacherProfilePage() {
  const { id } = useParams(); // Use useParams hook to get the id parameter from the URL
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        if (!auth || !auth.token) {
          throw new Error("Authentication token not found.");
        }
        
        const response = await axios.get(`/api/admin/teacher/${id}`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          },
          withCredentials: true
        });

        if (response.status === 200) {
          setTeacher(response.data);
        } else {
          throw new Error(`Failed to fetch teacher. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Failed to fetch teacher:', error);
        // Handle the error, such as displaying an error message to the user
      }
    };
    
    fetchTeacher();

    // Cleanup function
    return () => {
      setTeacher(null);
    };
  }, [id]); // Include id in the dependency array

  if (!teacher) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' bg-white border-success border w-75 p-3 rounded-5'>
      <h2>{`${teacher.firstName} ${teacher.lastName}`}</h2>
      <p className=' text-black-50' >Level: {teacher.level}</p>
      <p className=' text-black-50' >Bio: {teacher.bio}</p>
      <p className=' text-black-50' >Subject: {teacher.subjects}</p>
      <p className=' text-black-50' >Address: {teacher.address}</p>
      <p className=' text-black-50' >Email: {teacher.email}</p>
    </div>
  );
}

export default TeacherProfilePage;
