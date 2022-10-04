import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashBoard from './DashBoard'
import LoginForm from './LoginForm'

function Login() {

  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin'
  }

  const [user, setUser] = useState({name: '', email: '', password: ''})

  const LoggedIn = (details) => {
    setUser({name: details.name, email: details.email, password: details.password})
  }

  const LoggedOut = () => {
    setUser({name: '', email: '', password: ''})
  }

  return (
    <>
      {(user.email != '') ? (
        <DashBoard LoggedOut={LoggedOut} user={user} />
      ) : (
        <LoginForm LoggedIn={LoggedIn} />
      )}
    </>
  )
}

export default Login