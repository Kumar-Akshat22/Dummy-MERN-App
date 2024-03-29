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

    console.log(formData);
    event.preventDefault();
    try{

      const formResponse = await axios.post("/api/v1/createUser" , formData);
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
        <div className='mt-4 space-y-5'>
          <div>
            <label htmlFor='name' className='text-gray-200 font-semibold text-base'>Employee Name</label>
        
            <div>
              <input type='text' placeholder='Enter Your Full Name' name='name' onChange={changeHandler} value={formData.name} className='w-full rounded-md h-10 py-2 px-3 bg-transparent text-sm border border-gray-700 mt-2 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-400 focus:ring-offset-gray-900'></input>
            </div>
          </div>

          <div>
            <label htmlFor='email' className='text-gray-200 font-semibold text-base'>Employee Email Id</label>

            <div>
              <input type='email' placeholder='Enter Your Email' name='email' onChange={changeHandler} value={formData.email} className='w-full rounded-md h-10 py-2 px-3 bg-transparent text-sm border border-gray-700 mt-2 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-400 focus:ring-offset-gray-900'></input>
            </div>
          </div>

          <div>
            <label htmlFor='title' className='text-gray-200 font-semibold text-base'>Employee Title</label>

            <div>
              <input type='text' placeholder='Enter Your Employee Title' name='title' onChange={changeHandler} value={formData.title} className='w-full rounded-md h-10 py-2 px-3 bg-transparent text-sm border border-gray-700 mt-2 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-400 focus:ring-offset-gray-900'></input>
            </div>
          </div>

          <div>
            <label htmlFor='department' className='text-gray-200 font-semibold text-base'>Employee Department</label>

            <div>
              <input type='text' placeholder='Enter Your Employee Department' name='department' onChange={changeHandler} value={formData.department} className='w-full rounded-md h-10 py-2 px-3 bg-transparent text-sm border border-gray-700 mt-2 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-400 focus:ring-offset-gray-900'></input>
            </div>
          </div>

          <div>
            <label htmlFor='role' className='text-gray-200 font-semibold text-base'>Employee Role</label>

            <div>
              <input type='text' placeholder='Enter Your Employee Role' name='role' onChange={changeHandler} value={formData.role} className='w-full rounded-md h-10 py-2 px-3 bg-transparent text-sm border border-gray-700 mt-2 placeholder:text-gray-400 text-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-400 focus:ring-offset-gray-900'></input>
            </div>
          </div>

          <div>
            <button className='w-full inline-flex justify-center items-center text-white bg-indigo-600 px-3 py-2 rounded-md text-base font-semibold leading-7 hover:bg-indigo-500 transition-all duration-200' type='submit'>
              Create Employee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmployeeForm;