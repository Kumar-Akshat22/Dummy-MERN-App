import React from 'react'

function HomePage() {
  return (
    <>
        <section className='w-full max-w-[90%] min-h-screen mx-auto mt-4 flex flex-col'>
            
            {/* Heading & Button */}
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-white'>Employees</h1>
                    <p className='text-white'>This is the list of all the employees. You can add new employees, delete or even update the details of the employees</p>
                </div>

                <div>
                    <button className='px-3.5 py-1.5 bg-indigo-600 text-white text-sm rounded-md font-bold hover:bg-indigo-500 leading-7'>Add Employee</button>
                </div>
            </div>

            {/* Employee Details Table */}
            <div>

            </div>

        </section>
    </>
  )
}

export default HomePage;