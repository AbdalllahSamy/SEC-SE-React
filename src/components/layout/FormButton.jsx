import React, { useState } from 'react';
import axios from 'axios';

function FormButton({ title, stl, onTeacherAdded }) {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    level: '',
    bio: '',
    subjects: '',
    address: '',
    email: '',
    password: ''
  }); 

  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      const response = await axios.post('/api/admin/teacher', values, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        },
        withCredentials: true
      });
      console.log(response);
      // If the teacher was successfully added, update the list
      if (response.status === 200) {
        onTeacherAdded(values); // Pass the new teacher data to the callback
        // Clear the form values
        setValues({
          firstName: '',
          lastName: '',
          level: '',
          bio: '',
          subjects: '',
          address: '',
          email: '',
          password: ''
        });
        // Close the modal
        setShowModal(false);
      }
    } catch (error) {
      console.error('Failed to add teacher:', error);
    }
  };

  return (
    <>
      <button type="button" className={stl} onClick={() => setShowModal(true)}>
        {title}
      </button>

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
                    <label htmlFor="name" className="form-label">firstName</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={e => setValues({ ...values, firstName: e.target.value })} />
                    <label htmlFor="name" className="form-label">lastName</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={e => setValues({ ...values, lastName: e.target.value })} />
                    <label htmlFor="name" className="form-label">Level</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={e => setValues({ ...values, level: e.target.value })} />
                    <label htmlFor="img" className="form-label">bio</label>
                    <input type="text" className="form-control" id="img" name="img" onChange={e => setValues({ ...values, bio: e.target.value })} />
                    <label htmlFor="img" className="form-label">subjects</label>
                    <input type="text" className="form-control" id="img" name="img" onChange={e => setValues({ ...values, subjects: e.target.value })} />
                    <label htmlFor="img" className="form-label">address</label>
                    <input type="text" className="form-control" id="img" name="img" onChange={e => setValues({ ...values, address: e.target.value })} />
                    <label htmlFor="img" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="img" name="img" onChange={e => setValues({ ...values, email: e.target.value })} />
                    <label htmlFor="img" className="form-label">Password</label>
                    <input type="text" className="form-control" id="img" name="img" onChange={e => setValues({ ...values, password: e.target.value })} />
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
