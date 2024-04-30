import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormUpdate({ id }) {
  const [formData, setFormData] = useState({
    id: id,
    firstName: '',
    lastName: '',
    level: '',
    bio: '',
    subjects: '',
    address: '',
    email: '',
    password: ''
  });
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
      setFormData(data);
      console.log('Updated data fetched:', data);
    } catch (error) {
      console.error('Failed to fetch teacher data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      const response = await axios.put(`/api/admin/teacher`, formData, {
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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <button type="button" className="my-btn" onClick={() => setShowModal(true)}>
        Update
      </button>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: '#00000085'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Update Teacher</h1>
                <button type="button" className="btn-close my-btn" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <label htmlFor="level" className="form-label">Level</label>
                    <input type="text" className="form-control" id="level" name="level" value={formData.level} onChange={handleChange} />
                    <label htmlFor="bio" className="form-label">Bio</label>
                    <input type="text" className="form-control" id="bio" name="bio" value={formData.bio} onChange={handleChange} />
                    <label htmlFor="subjects" className="form-label">Subjects</label>
                    <input type="text" className="form-control" id="subjects" name="subjects" value={formData.subjects} onChange={handleChange} />
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
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
