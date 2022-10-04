import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaffDash from './api/StaffDash';
import StaffLoginForm from './api/StaffLoginForm';

function Staff() {

  const navigate = useNavigate();

  const [staff, setStaff] = useState({
    name: '',
    regid: '',
    password: ''
  })

  const LoggedIn = (details) => {
    setStaff({
      name: details.name,
      regid: details.regid,
      password: details.password
    })
  }

  const LoggedOut = () => {
    setStaff({
      name: '',
      regid: '',
      password: ''
    })
    navigate('/staff')
  }


  return (
    <>
      {(staff.regid != '') ? (
        <StaffDash staffData={staff} LoggedOut={LoggedOut} />
      ) : (
        <StaffLoginForm LoggedIn={LoggedIn}/>
      )}
    </>
  )
}

export default Staff