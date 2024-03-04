import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEmployeePage from './pages/CreateEmployeePage';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/addemployee' element={<CreateEmployeePage />}></Route>
        </Routes>
    </div>
  )
}

export default App;