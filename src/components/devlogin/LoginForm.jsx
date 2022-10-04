import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import './loginform.css'

function LoginForm({ LoggedIn }) {

  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const Submit = (e) => {
    e.preventDefault()
    
    LoggedIn(details)
  }

  return (
    <div className="container form-container">
      <form onSubmit={Submit} className='col-md-3'>
        <div>
          <label htmlFor="name" className='name' >Name : </label> <br />
          <input type="text" className='form-control' id='name' onChange={set => setDetails({ ...details, name: set.target.value })} value={details.name} required /> <br />
        </div>
        <div>
          <label htmlFor="email" id='email'>Email : </label> <br />
          <input type="email" className='form-control email' onChange={set => setDetails({ ...details, email: set.target.value })} value={details.email} /> <br />
        </div>
        <div> 
          <label htmlFor="password" id='password'>Password : </label> <br />
          <input type="password" className='form-control password' onChange={set => setDetails({ ...details, password: set.target.value })} value={details.password} /> <br />
        </div>
        <div>
          <input className='btn btn-outline-success' type="submit" />
          <Link to={'/'} className="px-3 mx-3 btn btn-outline-primary" >Home</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm