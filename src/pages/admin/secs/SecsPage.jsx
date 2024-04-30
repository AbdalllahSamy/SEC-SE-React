import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../../components/layout/Card';
import Image from './../../../assets/images/436384289_1151444335897357_3431606618726790654_n.jpg';
import Navbar from '../../../components/layout/Navbar';
import FormButton from '../../../components/layout/FormButton';

function SecsPage() {
  const [secs, setSecs] = useState([]);
  const [error, setError] = useState('');

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
        setSecs(response.data);
      } catch (error) {
        console.error('Failed to fetch secretaries:', error);
        setError('Failed to fetch secretaries. Please try again later.');
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='container py-5'>
        <div className='d-flex justify-content-between py-3'>
          <div>
            <h2 className='fw-bold fs-2'>Secretaries</h2>
          </div>
          <div>
            <FormButton title="Add" stl="add-btn" type="sec" />
          </div>
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {secs.map((sec, index) => (
            <div className="col" key={index}>
              <Card
                img={Image}
                name={`${sec.firstName} ${sec.lastName}`}
                level={sec.level}
                bio={sec.bio}
                subject={sec.subject}
                address={sec.address}
                email={sec.email}
                type='sec'
                password={sec.password}
                id={sec.id} // Pass the ID to the Card component
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SecsPage;
