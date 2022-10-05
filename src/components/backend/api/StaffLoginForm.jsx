import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function StaffLoginForm( {LoggedIn} ) {
  const Height = {
    height: '100vh'
  }

  const [details, setDetails] = useState({
    regid: '',
    password: ''
  })

  const HandleChange = (e) => {
    setDetails({...details, [e.target.name]: e.target.value })
  }

  const SubmitForm = (e) => {
    e.preventDefault()
    
    const sentData = {
      regid: details.regid,
      password: details.password
    }
    
    axios.post("http://localhost/odform/ad/selectbyid.php", sentData).then(res => {
      if(res.data.status) {
        LoggedIn(res.data)
      } else {
        alert('Wrong Username or Password')
      }
    })
    
  }

  return (
    <div className="container w-100 d-flex flex-column justify-content-center align-items-center" style={Height}>
      <form onSubmit={SubmitForm} className='col-md-3'>
        <h2 className='my-4'>Staff SignIn</h2>
        <div className='my-2'>
          <label htmlFor="regid">Regid :</label>
          <input type="text" className='form-control' name='regid' onChange={HandleChange} value={details.regid} required />
        </div>
        <div className='my-2'>
          <label htmlFor="password">Password :</label>
          <input type="password" className='form-control' name='password' onChange={HandleChange} value={details.password} required/>
        </div>
        <div className="my-3">
          <input type="submit" className='btn btn-primary col-4' />
          <Link to={'/'} className='btn btn-secondary mx-2'><i class="fa-solid fa-arrow-rotate-left"></i>&nbsp;Back</Link>
        </div>
      </form>
    </div>
  )
}

export default StaffLoginForm