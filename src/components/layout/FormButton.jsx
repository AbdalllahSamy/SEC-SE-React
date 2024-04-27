import React, { useState } from 'react';

function FormButton(props) {
  const [formData, setFormData] = useState({
    // Define initial state for your form data
    // For example:
    name: '',
    email: '',
    img:'',
    // etc.
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    // You can access form data from the 'formData' state
    // For example:
    // console.log(formData);
  };

  return (
    <>
      <button type="button" className="my-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {props.title}
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close my-btn" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Add your input fields here */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                <label htmlFor="name" className="form-label">About</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.about} onChange={handleChange} />
                <label htmlFor="img" className="form-label">Img</label>
                <input type="file" className="form-control" id="img" name="img" value={formData.img} onChange={handleChange} />
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
