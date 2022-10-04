import React from 'react'
import { Link } from 'react-router-dom'

function StdDashNav( {stdData, LoggedOut, changeLoad} ) {
  return (
    <div className="container my-3 d-flex justify-content-evenly">
      <Link onClick={changeLoad} to={`/student/applied/${stdData.regid}`} className='btn btn-primary col-md-5'>Applied Od Forms</Link>
      <Link onClick={changeLoad} to={`/student/newod/${stdData.regid}`} className='btn btn-success col-md-5'>New Od Form</Link>
      <button className='btn btn-danger' onClick={LoggedOut}>Logout</button>
    </div>
  )
}

export default StdDashNav