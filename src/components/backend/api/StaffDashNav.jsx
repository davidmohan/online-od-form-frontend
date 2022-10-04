import React from 'react'
import { Link } from 'react-router-dom'

function StaffDashNav({changeLoad, staffData, LoggedOut}) {
  return (
    <div className="container my-3 d-flex justify-content-evenly">
      <Link onClick={changeLoad} to={`/staff/odforms`} className='btn btn-primary col-md-3'>Applied Od Forms</Link>
      <Link onClick={changeLoad} to={`/staff/students`} className='btn btn-primary col-md-3'>All Students</Link>
      <Link onClick={changeLoad} to={`/staff/newstudent`} className='btn btn-success col-md-3'>Add Student</Link>
      <button className='btn btn-danger' onClick={LoggedOut}>Logout</button>
    </div>
  )
}

export default StaffDashNav