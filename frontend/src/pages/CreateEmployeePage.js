import React from 'react'
import EmployeeForm from '../components/EmployeeForm'
import formImage from "../assets/formImage.jpg"

function CreateEmployeePage() {
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
              <span>Back to all Employee List</span>
            </div>

            <EmployeeForm />
          
        </div>


      </div>
    </section>
  )
}

export default CreateEmployeePage;