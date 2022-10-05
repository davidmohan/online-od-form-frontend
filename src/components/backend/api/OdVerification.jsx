import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function OdVerification() {

  const param = useParams()

  const navigate = useNavigate()

  const [oddata, setOdData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost/odform/od/odselectbyid.php?id=${param.id}`).then(res => setOdData(res.data))
  }, [])


  const Approve = () => {
    if (window.confirm("You want to approve this Od?")) {
      axios.get(`http://localhost/odform/od/odapprove.php?id=${param.id}`).then(res => {
        if (res.data.key) {
          alert('OD Approved')
          navigate('/staff/odforms')
        } else {
          alert('Not Approved')
          navigate('/staff/odforms')
        }
      })
    } else {
      alert("Approvel Stoped")
      navigate('/staff/odforms')
    }
  }

  const UpdateReason = (reason) => {
    axios.post('http://localhost/odform/od/updatereason.php', reason).then(res => {
      if (res.data.key) {
        setResult(true)
      } else {
        setResult(false)
      }
    })
  }

  const [result, setResult] = useState(false)

  const Deny = () => {
    var reason = {
      id: param.id,
      message: ''
    }
    if (reason.message = window.prompt("Give a Reason for Rejection : ")) {
      UpdateReason(reason)
      if (result) {
        axios.get(`http://localhost/odform/od/denyod.php?id=${param.id}`).then(res => {
          if (res.data.key) {
            alert('OD Denied')
            navigate('/staff/odforms')
          } else {
            alert('Not Denied')
            navigate('/staff/odforms')
          }
        })
      } else {
        alert('Rejection Stoped')
        navigate('/staff/odforms')
      }
    } else {
      alert('Reason is Not Given')
    }
  }

  return (
    <div className="container mt-5 ">
      <form className='col-12'>
        <div className='my-2 col-6'>
          <label htmlFor="regid" className='my-1'>Regid : </label>
          <input className='form-control' type="text" name='regid' disabled value={oddata.regid} />
        </div>
        <div className='my-2 col-6'>
          <label htmlFor="startdate" className='my-1'>Start Date : </label>
          <input className='form-control' type="date" name='startD' value={oddata.startDate} disabled />
        </div>
        <div className='my-2 col-6'>
          <label htmlFor="enddate" className='my-1'>End Date : </label>
          <input className='form-control' type="date" name='endD' value={oddata.endDate} disabled />
        </div>
        <div className='my-2 col-6'>
          <label htmlFor="title" className='my-1'>Title : </label>
          <input className='form-control' type="text" name='title' value={oddata.title} disabled />
        </div>
        <div className='my-2 col-6'>
          <label htmlFor="description" className='my-1'>Description : </label>
          <textarea name="description" className='form-control' cols="30" rows="5" value={oddata.description} disabled ></textarea>
        </div>
        <div className='my-4 col-6'>
          <Link className="btn btn-success" onClick={Approve}>Approve</Link>
          <Link className="btn btn-danger mx-2" onClick={Deny}>Deny</Link>
        </div>
      </form>
    </div>
  )
}

export default OdVerification