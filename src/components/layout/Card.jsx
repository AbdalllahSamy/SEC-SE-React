import React from 'react';
import Buttonn from './Buttonn';
import FormButton from './FormButton';
import FormDelete from './FormDelete';
import FormUpdate from './FormUpdate';
function Card(props) {
  return (
    <>
   
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{props.name}</h5>
          <p className="card-text fs-5 mb-0">{props.level}</p>
          <p className="card-text mb-0">{props.bio}</p>
          <p className="card-text mb-0">{props.subject}</p>
          <p className="card-text">{props.address}</p>
          <div className='d-flex gap-2 justify-content-center'>
          <FormUpdate/>
          <FormDelete title="delete"/>
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
