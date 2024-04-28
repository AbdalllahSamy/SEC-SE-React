import React from 'react';
import Card from '../../../components/layout/Card';
import Image from './../../../assets/images/436384289_1151444335897357_3431606618726790654_n.jpg';
import Navbar from '../../../components/layout/Navbar';
import Buttonn from '../../../components/layout/Buttonn';
import FormButton from '../../../components/layout/FormButton';

function SecsPage() {
  return (
    <>
    <Navbar/>
    <div className=' container  py-5'>
      <div className='d-flex justify-content-between py-3'>
      <div className=' '>
      <h2 className=' fw-bold fs-2'>Secs</h2>
      </div>
      <div className=' ' >
      <FormButton title="add" stl="add-btn"/>
      </div>
      </div>
      <div className="d-flex flex-column flex-md-row gap-3 row justify-content-between" >
        <Card img={Image}  name="ziad" about="i am a Sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="abdallah" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="bolbol" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="diab" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="moheb" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="ayman" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="yasser" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="zaghlol" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="hamada" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="laila" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="elgayar" about="i am a sec" className="col-md-4 col-12"/>
        <Card img={Image}  name="abo trika" about="i am a sec" className="col-md-4 col-12"/>
      </div> 
      
    </div>
    
  </>
  )
}

export default SecsPage