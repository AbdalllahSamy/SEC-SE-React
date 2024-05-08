import React from 'react';
import { FaEye } from "react-icons/fa";
import FormDelete from './FormDelete';
import FormUpdate from './FormUpdate';
import { Link } from 'react-router-dom';

function EventCard(props) {
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
      <div className="card border-1 border-secondary border d-flex flex-column shadow-lg rounded-end-5 rounded-top-2  rounded-bottom-2 gap-3 justify-content-center align-items-center p-3" style={{ width: "16rem" }}>
        <div className="  card-body  w-100">
          <h5 className="card-title text-capitalize">{props.id}</h5>
          <p className="card-text fs-5 mb-0">{props.content}</p>
          <p className="card-text mb-0">{props.date}</p>
          <p className="card-text mb-0">{props.type}</p>
          <p className="card-text">{props.publish_id}</p>
          <div className='d-flex gap-2 justify-content-center'>
            {/* Pass the ID to FormUpdate */}
            <FormUpdate id={id} className='my-btn' type={props.type} />
            <FormDelete title="delete" id={id} type={props.type}/>
            {/* Use the determined profilePath */}
            <Link to={profilePath} className='btn bg-dark my-btn' ><FaEye /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
