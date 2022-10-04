import React from 'react'
import './Dashboard.css'

function DashBoard({ LoggedOut, user }) {
  return (
    <div className='welcome-div'>
      <div className='h3'>Welcome, <span className='h2' >{user.name}</span></div>
      <button className="btn btn-danger" onClick={LoggedOut}>Logout</button>
    </div>
  )
}

export default DashBoard