import React, { useEffect, useState } from 'react';
import Card from '../../../components/layout/Card';
import Image from './../../../assets/images/elgayar.jpeg';
import Image2 from './../../../assets/images/WhatsApp Image 2024-04-28 at 01.02.05_8ccb2f23.jpg';
import Navbar from '../../../components/layout/Navbar';
import Buttonn from '../../../components/layout/Buttonn';
import FormButton from '../../../components/layout/FormButton';
import axios from 'axios';

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        const response = await axios.get('/api/admin/teacher', {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          },
          withCredentials: true
        });
        setTeachers(response.data);
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='container py-5'>
        <div className='d-flex justify-content-between py-3'>
          <div className=''>
            <h2 className='fw-bold fs-2'>Teachers</h2>
          </div>
          <div className=''>
            <FormButton title="add" stl="add-btn" />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row gap-3 row justify-content-around">
          {teachers.map((teacher, index) => (
            <Card
              key={index} // Assuming the index is unique, but ideally, you should use a unique identifier from your data
              img={Image} // Assuming you want to use the same image for all teachers
              name={`${teacher.firstName} ${teacher.lastName}`}
              level={teacher.level}
              bio={teacher.bio}
              subject={teacher.subjects}
              address={teacher.address}
              email = {teacher.email}
              password = {teacher.password}
              className="col-md-4 col-12"
            />
          ))}
        </div>
      </div>
    </>
  );
}
