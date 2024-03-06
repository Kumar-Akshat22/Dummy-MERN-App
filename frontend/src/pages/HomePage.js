import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {

    const [empData , setEmpData] = useState([]);

    const getData = async()=>{
        try{

            const response = await axios.get("/api/v1/getallUsers");
            setEmpData(response.data.data);
            // console.log(empData);
        }

        catch(error){

            console.log(error.message);

        }
    }

    useEffect(()=>{

        getData();
    },[]);

    console.log(empData);

  return (
    <>
        <section className='w-full max-w-[90%] min-h-screen mx-auto mt-4 flex flex-col'>
            
            {/* Heading & Button */}
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-white'>Employees</h1>
                    <p className='text-white'>This is the list of all the employees. You can add new employees, delete or even update the details of the employees</p>
                </div>

                <Link to={"/addemployee"}>
                    <div>
                        <button className='px-3.5 py-1.5 bg-indigo-600 text-white text-sm rounded-md font-bold hover:bg-indigo-500 leading-7'>Add Employee</button>
                    </div>
                </Link>
            </div>

            {/* Employee Details Table */}
            <div className='mt-6 border border-gray-200 dark:border-gray-700 rounded-md'>
                <table className='w-full divide-y divide-gray-700'>
                    <thead className='bg-gray-50 dark:bg-gray-800'>
                        <tr>
                            <th className='text-left py-3.5 px-4 text-sm text-gray-400 font-normal'>
                                Employee
                            </th>

                            <th className='text-left py-3.5 text-sm text-gray-400 font-normal'>
                                Title
                            </th>

                            <th className='text-left py-3.5 text-sm text-gray-400 font-normal'>
                                Role
                            </th>
                        </tr>
                    </thead>

                    <tbody className='bg-gray-900 divide-y divide-gray-700'>
                        {
                            empData.map((person)=>(
                                <tr key={person._id} className='text-white'>
                                    {/* Image, Name & Email */}
                                    <td className='px-[1rem] py-4'>
                                        <div className='flex'>
                                            <div className='w-10 h-10'>
                                                <img className="w-full h-full rounded-full object-cover" src={person.image}></img>
                                            </div>

                                            <div className='ml-4'>
                                                <div>
                                                    <h2 className='text-sm'>{person.name}</h2>
                                                </div>

                                                <div>
                                                    <span className='text-sm'>{person.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* Title */}
                                    <td>
                                        <div>
                                            <div>
                                                <p className='text-sm'>{person.title}</p>
                                            </div>
                                            <div>
                                                <p className='text-sm'>{person.department}</p>
                                            </div>
                                        </div>
                                    </td>
                                    {/* Role */}
                                    <td>
                                        <div className='text-sm'>
                                            {person.role}
                                        </div>
                                    </td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </div>

        </section>
    </>
  )
}

export default HomePage;