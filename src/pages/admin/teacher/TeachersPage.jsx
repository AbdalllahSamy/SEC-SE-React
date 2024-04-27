import React from 'react';
import CardTeacher from '../../../components/layout/CardTeacher';
import Image from './../../../assets/images/elgayar.jpeg';
import Navbar from '../../../components/layout/Navbar';
import Buttonn from '../../../components/layout/Buttonn';
import FormButton from '../../../components/layout/FormButton';
export default function TeachersPage() {
  
  return (
    <>
    <Navbar/>
    <div className=' container  py-5'>
      <div className='d-flex justify-content-between py-3'>
      <div className=' '>
      <h2 className=' fw-bold fs-2'>Teachers</h2>
      </div>
      <div className=' ' >
      <FormButton title="add"/>
 
      </div>
      </div>
      <div className="d-flex flex-column flex-md-row gap-3 row justify-content-between" >
        <CardTeacher img={Image}  name="ziad" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="abdallah" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="bolbol" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="diab" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="moheb" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="ayman" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="yasser" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="zaghlol" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="hamada" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="laila" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="elgayar" about="i am a teacher" className="col-md-4 col-12"/>
        <CardTeacher img={Image}  name="abo trika" about="i am a teacher" className="col-md-4 col-12"/>
      </div> 
      
    </div>
    
  </>
  );
}

