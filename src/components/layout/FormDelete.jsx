import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";

import axios from 'axios';

function FormDelete({ id, onDelete, type }) {
  const [showModal, setShowModal] = useState(false);
  
  const handleDelete = async () => {
    try {
      const auth = JSON.parse(sessionStorage.getItem("auth"));
      let endpoint = ``;
      if (type == "teacher") {
        endpoint = `/api/admin/teacher/${id}`;
      } else if (type == "sec") {
        endpoint = `/api/admin/secretary/${id}`;
      }
      await axios.delete(endpoint, {
        headers: {
          'Authorization': `Bearer ${auth.token}`
        },
        withCredentials: true
      });
      onDelete(id); // Notify parent component that the card has been deleted
      setShowModal(false); // Hide the modal after successful deletion
    } catch (error) {
      console.error('Failed to delete teacher:', error);
    }
  };

  return (
    <>
      <button type="button" className="my-btn info bg-danger btn" onClick={() => setShowModal(true)}>
      <MdDelete />
      </button>

      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: '#00000085'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Delete Confirmation</h1>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={() => { handleDelete(); setShowModal(false); }}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormDelete;
