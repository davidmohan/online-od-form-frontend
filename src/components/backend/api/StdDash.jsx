import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import StdDashNav from './StdDashNav'
import DefaultStdLoad from './DefaultStdLoad'

function StdDash( {stdData, LoggedOut} ) {

  const [load, setLoad] = useState(false);

  const changeLoad = () => {
    setLoad(true)
  }

  return (

    <div>
      <StdDashNav stdData={stdData} LoggedOut={LoggedOut} changeLoad={changeLoad} />
      <div>
      {(load) ? (<Outlet/>) : (
        <DefaultStdLoad stdData={stdData} />
      )}
      </div>
    </div>

    // <div className="container w-100 d-flex flex-column justify-content-center align-items-center" style={Height}>
    //   <h2>Welcome Student, {stdData.name}</h2>
    //   <button onClick={LoggedOut} className='btn btn-danger my-3'>Logout</button>
    // </div>
  )
}

export default StdDash