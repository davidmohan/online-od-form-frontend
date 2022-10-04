import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NewStudent() {

  const navigate = useNavigate()

  const [newstd, setNewStd] = useState({
    regid: '',
    name: '',
    email: '',
    password: '',
    class: '',
    sec: '',
    mobileno: '',
    anotherno: ''
  })

  const HandleChange = (e) => {
    setNewStd({...newstd, [e.target.name]: e.target.value})
    console.log(newstd)
  }

  const StudentSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost/odform/sd/createstudent.php', newstd).then(res => {
      if(res.data.status) {
        navigate('/staff/students')
      } else {
        alert('Student Not Created')
      }
    })
  }

  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <form className='col-5' onSubmit={StudentSubmit}>
        <div className="col-12">
          <label htmlFor="regid">Reg. No. : </label>
          <input type="text" name="regid" className='form-control my-2' required onChange={HandleChange} value={newstd.regid} />
        </div>
        <div className="col-12">
          <label htmlFor="name">Student Name : </label>
          <input type="text" name="name" className='form-control my-2' required onChange={HandleChange} value={newstd.name} />
        </div>
        <div className="col-12">
          <label htmlFor="email">Student Email ID : </label>
          <input type="email" name="email" className='form-control my-2' required onChange={HandleChange} value={newstd.email} />
        </div>
        <div className="col-12">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" className='form-control my-2' required onChange={HandleChange} value={newstd.password} />
        </div>
        <div className="col-12">
          <label htmlFor="class">Student Class : </label>
          <input type="text" name="class" className='form-control my-2' required onChange={HandleChange} value={newstd.class} />
        </div>
        <div className="col-12">
          <label htmlFor="sec">Section : </label>
          <input type="text" name="sec" className='form-control my-2' required onChange={HandleChange} value={newstd.sec} />
        </div>
        <div className="col-12">
          <label htmlFor="mobileno">Mobile No. : </label>
          <input type="number" name="mobileno" className='form-control my-2' required onChange={HandleChange} value={newstd.mobileno} />
        </div>
        <div className="col-12">
          <label htmlFor="anotherno">Another No. : </label>
          <input type="number" name="anotherno" className='form-control my-2' required onChange={HandleChange} value={newstd.anotherno} />
        </div>
        <div className='my-4'>
          <input type="submit" className='btn btn-primary col-4 py-2' />
          <Link to={'/staff/students'} className='btn btn-success col-3 py-2 mx-3' > Back </Link>
        </div>
      </form>
    </div>
  )
}

export default NewStudent