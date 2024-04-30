import React from 'react';
import FormDelete from './FormDelete';
import FormUpdate from './FormUpdate';
import { Link } from 'react-router-dom';

function Card(props) {
  const { id, type } = props; // Destructure id and type from props

  let profilePath = ''; // Initialize profilePath variable

  // Determine profile path based on type
  if (type === 'teacher') {
    profilePath = `/dashboard-admin/teachers/${id}`;
  } else if (type === 'sec') {
    profilePath = `/dashboard-admin/secs/${id}`;
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{props.name}</h5>
          <p className="card-text fs-5 mb-0">{props.level}</p>
          <p className="card-text mb-0">{props.bio}</p>
          <p className="card-text mb-0">{props.subject}</p>
          <p className="card-text">{props.address}</p>
          <div className='d-flex gap-2 justify-content-center'>
            {/* Pass the ID to FormUpdate */}
            <FormUpdate id={id} className='my-btn' />
            <FormDelete title="delete" id={id}/>
            {/* Use the determined profilePath */}
            <Link to={profilePath} className='btn btn-success' >visit</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
