import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function NewOd() {

  const Height = {
    height: '650px'
  }
  const params = useParams()

  const navigate = useNavigate()

  const [oddata, setOdData] = useState({
    regid: params.regid,
    startD: '',
    endD: '',
    title: '',
    description: ''
  }) 

  const HandleForm = (e) => {
    setOdData({...oddata, [e.target.name]: e.target.value})
  }

  const [dates, setDates] = useState([])

  useEffect(() => {
    axios.get(`http://localhost/odform/od/getdates.php?regid=${oddata.regid}`).then(res => setDates(res.data))
  })
  
  const [insdate, setInsDate] = useState({
    allow: false
  })

  const SubmitOdForm = (e) => {
    e.preventDefault()

    dates.map(date => {
      if((oddata.startD != date.startD && oddata.endD != date.endD) || (oddata.startD == '' && date.endD == '') ) {
        setInsDate({allow: true})
      } else {
        setInsDate({allow: false})
        return
      }
    }) 
    
    if(insdate.allow) {
      if(oddata.endD >= oddata.startD) {
        axios.post('http://localhost/odform/od/createod.php', oddata).then(res => {
          if(res.data.key) {
            navigate(`/student/applied/${params.regid}`)
          } else {
            alert("Not Applied!")
          }
        })
      }  else {
        alert("Given Date range is not Posible to apply!")
      }
      setInsDate({allow: false})
    } else {
      alert('These dates are already applied')
    }
  }

  return (
    <div className="container mt-5 " style={Height}>
      <form className='w-100' onSubmit={SubmitOdForm}>
        <div className='my-2 col-md-6'>
          <label htmlFor="regid" className='my-1'>Regid : </label>
          <input className='form-control' type="text" name='regid' disabled onChange={HandleForm} value={oddata.regid} />
        </div>
        <div className='my-2 col-md-6'>
          <label htmlFor="startdate" className='my-1'>Start Date : </label>
          <input className='form-control' type="date" name='startD' onChange={HandleForm} value={oddata.startD} required />
        </div>
        <div className='my-2 col-md-6'>
          <label htmlFor="enddate" className='my-1'>End Date : </label>
          <input className='form-control' type="date" name='endD' onChange={HandleForm} value={oddata.endD} required />
        </div>
        <div className='my-2 col-md-6'>
          <label htmlFor="title" className='my-1'>Title : </label>
          <input className='form-control' type="text" name='title' onChange={HandleForm} value={oddata.title} required />
        </div>
        <div className='my-2 col-md-6'>
          <label htmlFor="description" className='my-1'>Description : </label>
          <textarea name="description" className='form-control' cols="30" rows="5" onChange={HandleForm} value={oddata.description} required ></textarea>
        </div>
        <div className='my-2 col-md-6'>
          <input type="submit" className='btn btn-primary col-5 py-2 float-end' />
        </div>
      </form>
    </div>
  )
}

export default NewOd