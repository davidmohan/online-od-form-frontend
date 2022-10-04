import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

function UpdateStudent() {

  const param = useParams()

  const navigate = useNavigate()

  const [update, setUpdate] = useState([])

  useEffect(() => {
    getStudent()
  }, [])

  const getStudent = () => {
    axios.get(`http://localhost/odform/sd/singlestudent.php?regid=${param.regid}`).then(res => setUpdate(res.data))
  }

  const HandleChange = (e) => {
    setUpdate({...update, [e.target.name]: e.target.value})
  }

  const UpdateSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost/odform/sd/updatestudent.php', update).then(res => {
      if(res.data.status) {
        alert('Student Details updated')
        navigate('/staff/students')
      } else {
        alert('No Details Updated')
      }
    })
  }

  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <form className='col-5' onSubmit={UpdateSubmit}>
        <div className="col-12">
          <label htmlFor="regid">Reg. No. : </label>
          <input type="text" name="regid" className='form-control my-2' required onChange={HandleChange} value={update.regid} />
        </div>
        <div className="col-12">
          <label htmlFor="name">Student Name : </label>
          <input type="text" name="name" className='form-control my-2' required onChange={HandleChange} value={update.name} />
        </div>
        <div className="col-12">
          <label htmlFor="email">Student Email ID : </label>
          <input type="email" name="email" className='form-control my-2' required onChange={HandleChange} value={update.email} />
        </div>
        <div className="col-12">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" className='form-control my-2' required onChange={HandleChange} value={update.password} />
        </div>
        <div className="col-12">
          <label htmlFor="class">Student Class : </label>
          <input type="text" name="class" className='form-control my-2' required onChange={HandleChange} value={update.class} />
        </div>
        <div className="col-12">
          <label htmlFor="sec">Section : </label>
          <input type="text" name="sec" className='form-control my-2' required onChange={HandleChange} value={update.sec} />
        </div>
        <div className="col-12">
          <label htmlFor="mobileno">Mobile No. : </label>
          <input type="number" name="mobileno" className='form-control my-2' required onChange={HandleChange} value={update.mobileno} />
        </div>
        <div className="col-12">
          <label htmlFor="anotherno">Another No. : </label>
          <input type="number" name="anotherno" className='form-control my-2' required onChange={HandleChange} value={update.anotherno} />
        </div>
        <div className='my-4'>
          <input type="submit" className='btn btn-primary col-4 py-2' />
          <Link to={'/staff/students'} className='btn btn-success col-3 py-2 mx-3' > Back </Link>
        </div>
      </form>
    </div>
  )
}

export default UpdateStudent