import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Denied() {
  
  const params = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost/odform/od/odselectbyid.php?id=${params.id}`).then(res => setData(res.data))
  })

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <form className='col-5'>
        <div className="col-12">
          <label htmlFor="regid">Regid :</label>
          <input type="text" name="regid" className='form-control my-2' value={data.regid} disabled />
        </div>
        <div className="col-12">
          <label htmlFor="startD">Start Date :</label>
          <input type="date" name="startD" className='form-control my-2' value={data.startDate} disabled />
        </div>
        <div className="col-12">
          <label htmlFor="endD">End Date :</label>
          <input type="date" name="endD" className='form-control my-2' value={data.endDate} disabled />
        </div>
        <div className="col-12">
          <label htmlFor="title">Title :</label>
          <input type="text" name="title" className='form-control my-2' value={data.title} disabled />
        </div>
        <div className="col-12">
          <label htmlFor="description">Description :</label>
          <textarea name="description" cols="30" rows="3" className="form-control my-2" value={data.description} disabled ></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="reason">Reason :</label>
          <textarea name="reason" cols="30" rows="3" className="form-control my-2" value={data.reason} disabled ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-danger col-12" disabled>Cancelled</button>
        </div>
        <div className="col-12 my-2">
          <Link className='btn btn-secondary col-12' to={`/student/applied/${data.regid}`} >Back</Link>
        </div>
      </form>
    </div>
  )
}

export default Denied