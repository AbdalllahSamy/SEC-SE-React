import React,{useEffect,useState} from 'react';
import Card from '../../../components/layout/Card';
import Image from './../../../assets/images/436384289_1151444335897357_3431606618726790654_n.jpg';
import Navbar from '../../../components/layout/Navbar';
import Buttonn from '../../../components/layout/Buttonn';
import FormButton from '../../../components/layout/FormButton';
import axios from 'axios';
function SecsPage() {
  const [secs, setSec] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        const response = await axios.get('/api/admin/secretary', {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          },
          withCredentials: true
        });
        setSec(response.data);
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, []);
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
      <div className="d-flex flex-column flex-md-row gap-3 row justify-content-around">
          {secs.map((sec, index) => (
            <Card
              key={index} // Assuming the index is unique, but ideally, you should use a unique identifier from your data
              img={Image} // Assuming you want to use the same image for all teachers
              name={`${sec.firstName} ${sec.lastName}`}
              bio={sec.bio}
              address={sec.address}              
              className="col-md-4 col-12"
            />
          ))}
        </div>
      
    </div>
    
  </>
  )
}

export default SecsPage