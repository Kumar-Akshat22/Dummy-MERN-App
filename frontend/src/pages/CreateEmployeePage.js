import React from 'react'
import EmployeeForm from '../components/EmployeeForm'
import FormImage from "../assets/Form Page.jpg"

function CreateEmployeePage() {
  return (
    <section>
      <div className=''>
        <div className='relative'> 
          <div>
            <img src={FormImage} width="1260" height="750"></img>
          </div>

          {/* Gradient */}
          <div></div>

          {/* Text */}
          <div className='w-full max-w-lg absolute bottom-6 left-[20%]'>
            <p className='text-white text-4xl font-bold'>Empower your business with our employee creation!</p>
          </div>

        </div>
        <div>

          <div>
            <h1>Create a Employee</h1>
            <span>Back to all Employee List</span>
          </div>

          <EmployeeForm />
        </div>


      </div>
    </section>
  )
}

export default CreateEmployeePage