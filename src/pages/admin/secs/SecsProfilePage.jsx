import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook
import image from './../../../assets/images/436384289_1151444335897357_3431606618726790654_n.jpg'

function TeacherProfilePage() {
  const { id } = useParams(); // Use useParams hook to get the id parameter from the URL
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const auth = JSON.parse(sessionStorage.getItem("auth"));
        if (!auth || !auth.token) {
          throw new Error("Authentication token not found.");
        }
        
        const response = await axios.get(`/api/admin/secretary/${id}`, {
          headers: {
            'Authorization': `Bearer ${auth.token}`
          },
          withCredentials: true
        });

        if (response.status === 200) {
          setTeacher(response.data);
        } else {
          throw new Error(`Failed to fetch teacher. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Failed to fetch teacher:', error);
        // Handle the error, such as displaying an error message to the user
      }
    };
    
    fetchTeacher();

    // Cleanup function
    return () => {
      setTeacher(null);
    };
  }, [id]); // Include id in the dependency array

  if (!teacher) {
    return <div>Loading...</div>;
  }

  return (
  


<div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8 mx-auto">
        <h2 class="h3 mb-4 page-title">Your Profile</h2>
        <div class="my-4">
          <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Profile</a>
            </li>
          </ul>
          <form>
            <div class="row mt-5 align-items-center">
              <div class="col-md-3 text-center mb-5">
                <div class="avatar avatar-xl">
                  
                </div>
              </div>
              <div class="col">
                <div class="row align-items-center">
                  <div class="col-md-7">
                  <div class="avatar avatar-xl">
                         <img src={image} alt=""  className=''/>
                        </div>
                    <h2>{`${teacher.firstName} ${teacher.lastName}`}</h2>
                  </div>
                </div>
                <div class="row mb-4 d-flex flex-column">
                  <div class="col-md-7">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                      pretium blandit sapien.
                    </p>
                  </div>
                  <div class="col">
                    <p className=' text-black-50' >Level: {teacher.level}</p>
                    <p className=' text-black-50' >Bio: {teacher.bio}</p>
                    <p className=' text-black-50' >Subject: {teacher.subjects}</p>
                    <p className=' text-black-50' >Address: {teacher.address}</p>
                    <p className=' text-black-50' >Email: {teacher.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </form> 
          <hr class="my-4" />
        </div>
      </div>
    </div>
  </div>
</div>



  );
}

export default TeacherProfilePage;
