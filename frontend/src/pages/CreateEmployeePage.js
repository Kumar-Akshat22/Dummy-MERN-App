import React from 'react'
import EmployeeForm from '../components/EmployeeForm'
import formImage from "../assets/formImage.jpg"
import { Navigate, useNavigate } from 'react-router-dom'
import {FaBackward} from "react-icons/fa"

function CreateEmployeePage() {

  const Navigate = useNavigate();
  function backWards(){

    Navigate(-1);

  }

  
  return (
    <section>
      <div className='flex'>
        <div className='relative pb-24'> 
          <div className='w-[720px] h-[690px]'>
            <img className="h-full w-full object-cover object-top" src={formImage}></img>
          </div>

          {/* Gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

          {/* Text */}
          <div className='w-full max-w-[30rem] absolute bottom-[8rem] left-[12%]'>
            <p className='text-white text-4xl font-bold'>Empower your business with our employee creation!</p>
          </div>

        </div>
        <div className='w-full flex flex-col px-8 py-10 items-center max-w-xl'>

          

            <div className='text-white'>
              <h1 className='text-4xl font-bold'>Create a Employee</h1>
              <span onClick={backWards} className='flex items-center gap-2 mt-2 text-indigo-600 font-medium cursor-pointer hover:text-indigo-700 hover:underline transition-all duration-200'>
                
                <FaBackward />
                Back to all Employee List
              </span>
            </div>

            <EmployeeForm />
          
        </div>


      </div>
    </section>
  )
}

export default CreateEmployeePage;