// FormButton.js
import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import axios from 'axios';

function FormButton({ type, title, stl, onTeacherAdded, onSecAdded, onEventAdded }) {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    level: '',
    bio: '',
    subject: '',
    country: '',
    address: '',
    email: '',
    password: '',
    role: ''
  };

  if (type === 'teacher') {
    initialFormValues.role = 'TEACHER';
  } else if (type === 'sec') {
    initialFormValues.role = 'SEC';
  } else if (type === 'event') {
    initialFormValues.role = 'EVENT';
    initialFormValues.date = '';
    initialFormValues.content = '';
    initialFormValues.type = '';
    initialFormValues.publisherId = '';
  }

  const [values, setValues] = useState(initialFormValues);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      let endpoint = '';

      if (type === "teacher") {
        endpoint = '/api/admin/teacher';
      } else if (type === "sec") {
        endpoint = '/api/admin/secretary';
      } else if (type === "event") {
        endpoint = '/api/admin/event';
      }
      

      const response = await axios.post(endpoint, values, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        },
        withCredentials: true
      });

      if (response.status === 200) {
        if (type === 'teacher') {
          onTeacherAdded(values);
        } else if (type === 'sec') {
          onSecAdded(values);
        } else if (type === 'event') {
          onEventAdded(values);
        }
        setValues(initialFormValues);
        setShowModal(false);
      }
    } catch (error) {
      console.error(`Failed to add ${type === "teacher" ? 'teacher' : (type === 'sec' ? 'sec' : 'event')}:`, error);
    }
  };

  return (
    <>
      <button type="button" className={stl} onClick={() => setShowModal(true)}>
        {/* {title} */}
        <IoIosAdd className='fs-2' />

      </button>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: '#00000085' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Modal title</h1>
                <button type="button" className="btn-close my-btn" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    {type !== 'event' && (
                      <>
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={values.firstName} onChange={e => setValues({ ...values, firstName: e.target.value })} />
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={values.lastName} onChange={e => setValues({ ...values, lastName: e.target.value })} />
                        <label htmlFor="bio" className="form-label">Bio</label>
                        <input type="text" className="form-control" id="bio" name="bio" value={values.bio} onChange={e => setValues({ ...values, bio: e.target.value })} />
                        {type === 'teacher' && (
                          <>
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" name="subject" value={values.subjects} onChange={e => setValues({ ...values, subjects: e.target.value })} />
                            <label htmlFor="level" className="form-label">Level</label>
                            <input type="text" className="form-control" id="level" name="level" value={values.level} onChange={e => setValues({ ...values, level: e.target.value })} />
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" className="form-control" id="country" name="country" value={values.country} onChange={e => setValues({ ...values, country: e.target.value })} />
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} />
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
                      </>
                    )}
                    {type === 'event' && (
                      <>
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="text" className="form-control" id="date" name="date" value={values.date} onChange={e => setValues({ ...values, date: e.target.value })} />
                        <label htmlFor="content" className="form-label">Content</label>
                        <input type="text" className="form-control" id="content" name="content" value={values.content} onChange={e => setValues({ ...values, content: e.target.value })} />
                        <label htmlFor="type" className="form-label">Type</label>
                        <input type="text" className="form-control" id="type" name="type" value={values.type} onChange={e => setValues({ ...values, type: e.target.value })} />
                        <label htmlFor="publisherId" className="form-label">Publisher ID</label>
                        <input type="text" className="form-control" id="publisherId" name="publisherId" value={values.publisherId} onChange={e => setValues({ ...values, publisherId: e.target.value })} />
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

export default FormButton;
