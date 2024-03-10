import axios from 'axios';
import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function EmployeeForm() {

  const navigate = useNavigate();
  const [formData , setFormData] = useState({name:"" , email:"" , title:"" , department:"", role:""});

  function changeHandler(event){

    const {name , value} = event.target;

    setFormData(prevData => {
      return {...prevData , [name] : value}
    })

  }

  const submitHandler = async(event) => {

    event.preventDefault();
    try{

      const formResponse = axios.put("/api/v1/createUser" , formData);
      console.log('Form Response' , formResponse);
      navigate('/');
    }
    
    catch(error){

      console.log('Error while sending data to the server');
      console.log(error.message);
    }

  }

  
  return (

    <div>

      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor='name'>Employee Name</label>
        
            <div>
              <input type='text' placeholder='Enter Your Full Name' name='name' onChange={changeHandler} value={formData.name}></input>
            </div>
          </div>

          <div>
            <label htmlFor='email'>Employee Email Id</label>

            <div>
              <input type='email' placeholder='Enter Your Email' name='email' onChange={changeHandler} value={formData.email}></input>
            </div>
          </div>

          <div>
            <label htmlFor='title'>Employee Title</label>

            <div>
              <input type='text' placeholder='Enter Your Employee Title' name='title' onChange={changeHandler} value={formData.title}></input>
            </div>
          </div>

          <div>
            <label htmlFor='department'>Employee Department</label>

            <div>
              <input type='text' placeholder='Enter Your Employee Department' name='department' onChange={changeHandler} value={formData.department}></input>
            </div>
          </div>

          <div>
            <label htmlFor='role'>Employee Role</label>

            <div>
              <input type='text' placeholder='Enter Your Employee Role' name='role' onChange={changeHandler} value={formData.role}></input>
            </div>
          </div>

          <div>
            <button className='flex items-center gap-1' type='submit'>
              Create Employee
              <FaAngleRight />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmployeeForm;