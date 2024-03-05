import React, { useEffect, useState } from 'react'
import axios from 'axios';


function HomePage() {

    const [empData , setEmpData] = useState();

    const getData = async()=>{
        try{

            const response = await axios.get("/api/v1/getallUsers");
            // const data = response.json();
            console.log(response.data);
            setEmpData(response.data);
            // console.log(empData);
        }

        catch(error){

            console.log(error.message);

        }
    }

    useEffect(()=>{

        getData();
    },[]);

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
            <div className='bg-white'>
                <table>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Title</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    <tbody className='bg-white'>
                        {
                            empData?.data.map((person)=>{
                                <tr key={person._id}>
                                    <td>
                                        <div>
                                            <div className='w-10 h-10'>
                                                <img className="w-full h-full rounded-full object-cover" src={person.image}></img>
                                            </div>

                                            <div>
                                                <div>
                                                    <h2>{person.name}</h2>
                                                </div>

                                                <div>
                                                    <span>{person.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </section>
    </>
  )
}

export default HomePage;