import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StdDash from './api/StdDash'
import StdLoginForm from './api/StdLoginForm'

function Student() {

  const navigate = useNavigate();

  const [std, setStd] = useState({
    name: '',
    regid: '',
    password: ''
  })

  const LoggedIn = (details) => {
    setStd({
      name: details.name,
      regid: details.regid,
      password: details.password
    })
  }

  const LoggedOut = () => {
    setStd({
      name: '',
      regid: '',
      password: ''
    })
    navigate('/student')
  }

  return (
    <>
      {(std.regid != '') ? (
        <StdDash stdData={std} LoggedOut={LoggedOut} />
      ) : (
        <StdLoginForm LoggedIn={LoggedIn}/>
      )}
    </>
  )
}

export default Student