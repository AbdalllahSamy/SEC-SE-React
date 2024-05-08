import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit } from "react-icons/md";

function FormUpdate({ id, type }) {
  const initialFormValues = type === "sec" ? {
    id: id,
    firstName: '',
    lastName: '',
    bio: '',
    country: '',
    address: '',
    email: '',
    password: '',
    role: 'SEC'
  } : {
    id: id,
    firstName: '',
    lastName: '',
    level: '',
    bio: '',
    subject: '', 
    address: '',
    email: '',
    password: '',
    role: 'TEACHER'
  };
  const [values, setValues] = useState(initialFormValues);
  const [showModal, setShowModal] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  
  useEffect(() => {
    if (updateSuccess) {
      console.log('Fetching updated data...');
      fetchData(); // Fetch updated data after successful update
    }
  }, [updateSuccess]);

  const fetchData = async () => {
    try {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      const response = await axios.get(`/api/admin/teacher/${id}`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        },
        withCredentials: true
      });
      const { data } = response;
      setValues(data);
      console.log('Updated data fetched:', data);
    } catch (error) {
      console.error('Failed to fetch teacher data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      let endpoint ='';
      if (type === "teacher") {
        endpoint = '/api/admin/teacher';
      } else if (type === "sec") {
        endpoint = '/api/admin/secretary';
      }
      const response = await axios.put(endpoint, values, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        },
        withCredentials: true
      });
      console.log('Update response:', response);
      if (response.status === 200) {
        setUpdateSuccess(true); // Trigger useEffect to fetch updated data
        setShowModal(false);
      }
    } catch (error) {
      console.error('Failed to update teacher:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <button type="button" className="my-btn btn" onClick={() => setShowModal(true)}> <MdEdit /> </button>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: '#00000085'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Modal title</h1>
                <button type="button" className="btn-close my-btn" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={values.firstName} onChange={e => setValues({ ...values, firstName: e.target.value })} />
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={values.lastName} onChange={e => setValues({ ...values, lastName: e.target.value })} />
                    <label htmlFor="bio" className="form-label">Bio</label>
                    <input type="text" className="form-control" id="bio" name="bio" value={values.bio} onChange={e => setValues({ ...values, bio: e.target.value })} />
                    {type === 'teacher' && (
                      <>
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" name="subject" value={values.subject} onChange={e => setValues({ ...values, subject: e.target.value })} />
                        <label htmlFor="level" className="form-label">Level</label>
                        <input type="text" className="form-control" id="level" name="level" value={values.level} onChange={e => setValues({ ...values, level: e.target.value })} />
                      </>
                    )}
                    {type === 'sec' && (
                      <>
                        <label htmlFor="country" className="form-label">Country</label>
                        <input type="text" className="form-control" id="country" name="country" value={values.country} onChange={e => setValues({ ...values, country: e.target.value })} />
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name="address" value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} />
                      </>
                    )}
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="my-btn bg-black" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn-primary my-btn" onClick={handleSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormUpdate;
