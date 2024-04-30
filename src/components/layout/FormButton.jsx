import { Password } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';

function FormButton(props) {
  const [values, setValues] = useState({
    // Define initial state for your form data
    // For example:
    firstName: '',
    lastName:'',
    level:'',
    bio: '',
    subject:'',
    address:'',
    email:'',
    password:''
    // etc.
  });

  

  const handleSubmit = (event) => {
    event.preventDefault();
      if (props.title=='add') {
      const fetchData = async () => {
        try {
          const auth = JSON.parse(sessionStorage.getItem("auth"));
          const response = await axios.post('/api/admin/teacher', values,{
            headers: {
              'Authorization': `Bearer ${auth.token}`
            },
            withCredentials: true
          });
          console.log(response);;
        } catch (error) {
          console.error('Failed to fetch teachers:', error);
        }
      };

      fetchData();
      }else if(props.title=='Update'){

      }

      


  };

  return (
    <>
      <button type="button" className={props.stl} data-bs-toggle="modal" data-bs-target="#exampleModal">
        {props.title}
      </button>

      <div onSubmit={handleSubmit} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close my-btn" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Add your input fields here */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">firstName</label>
                <input type="text" className="form-control" id="name" name="name"  onChange={e=> setValues({...values, firstName: e.target.value })} />
                <label htmlFor="name" className="form-label">lastName</label>
                <input type="text" className="form-control" id="name" name="name"  onChange={e=> setValues({...values, lastName: e.target.value })} />
                <label htmlFor="name" className="form-label">Level</label>
                <input type="text" className="form-control" id="name" name="name"  onChange={e=> setValues({...values, level: e.target.value })} />
                <label htmlFor="img" className="form-label">bio</label>
                <input type="text" className="form-control" id="img" name="img"  onChange={e=> setValues({...values, bio: e.target.value })} />
                <label htmlFor="img" className="form-label">subject</label>
                <input type="text" className="form-control" id="img" name="img"  onChange={e=> setValues({...values, subject: e.target.value })} />
                <label htmlFor="img" className="form-label">address</label>
                <input type="text" className="form-control" id="img" name="img"  onChange={e=> setValues({...values, address: e.target.value })} />
                <label htmlFor="img" className="form-label">UserName</label>
                <input type="text" className="form-control" id="img" name="img"  onChange={e=> setValues({...values, email: e.target.value })} />
                <label htmlFor="img" className="form-label">Password</label>
                <input type="text" className="form-control" id="img" name="img"  onChange={e=> setValues({...values, password: e.target.value })} />
              </div>
              {/* Add more input fields as needed */}
            </div>
            <div className="modal-footer">
              <button type="button" className=" my-btn bg-black" data-bs-dismiss="modal">Close</button>
              <button type="button" className=" btn-primary my-btn" onClick={handleSubmit}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormButton;
