import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DefaultStaffLoad from './DefaultStaffLoad';
import StaffDashNav from './StaffDashNav';

function StaffDash({staffData, LoggedOut}) {
  
  const [load, setLoad] = useState(false);

  const changeLoad = () => {
    setLoad(true)
  }

  return (
    <div>
      <StaffDashNav staffData={staffData} LoggedOut={LoggedOut} changeLoad={changeLoad} />
      <div>
      {(load) ? (<Outlet data={staffData}/>) : (
        <DefaultStaffLoad staffData={staffData} />
      )}
      </div>
    </div>
  )
}

export default StaffDash