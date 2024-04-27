import React from 'react';
import Buttonn from './Buttonn';
import FormButton from './FormButton';
import FormDelete from './FormDelete';
function Card(props) {
  return (
    <>
   
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.about}</p>
          <div className='d-flex gap-2 justify-content-center'>
          <FormButton title="Update"/> 
          <FormDelete title="delete"/>
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
