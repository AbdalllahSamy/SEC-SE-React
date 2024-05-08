// TeachersPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../components/layout/Navbar';
import FormButton from '../../../components/layout/FormButton';
import Card from '../../../components/layout/Card';
import Image from './../../../assets/images/elgayar.jpeg'
import FormUpdate from '../../../components/layout/FormUpdate';
import { Link } from 'react-router-dom';
export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleTeacherAdded = (newTeacher) => {
    setTeachers([...teachers, newTeacher]); // Add the new teacher to the list
  };

  return (
    <>
      <Navbar />
      <div className='container py-5'>
        <div className='d-flex justify-content-between py-3'>
          <div className=''>
            <h2 className='fw-bold fs-2'>Teachers</h2>
          </div>
          <div className=''>
            <FormButton stl="add-btn" type="teacher" onTeacherAdded={handleTeacherAdded} />
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row gap-3 row justify-content-around">
          {teachers.map((teacher, index) => (
            <Card
              key={teacher.id}
              id={teacher.id}
              img = {Image}
              name={`${teacher.firstName} ${teacher.lastName}`}
              level={teacher.level}
              bio={teacher.bio}
              subject={teacher.subjects}
              address={teacher.address}
              email={teacher.email}
              password={teacher.password}
              type='teacher'
              className="col-md-4 col-12"
              />
           
          ))}
        </div>
      </div>
    </>
  );
}
