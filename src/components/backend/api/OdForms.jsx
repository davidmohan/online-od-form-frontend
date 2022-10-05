import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function OdForms() {

  const [users, setUser] = useState([])

  useEffect(() => {
    loadOd()
  }, [])

  const loadOd = () => {
    axios.get("http://localhost/odform/od/odselect.php").then(res => setUser(res.data))
  }

  const DeleteOd = (id) => {
    axios.get(`http://localhost/odform/od/deleteod.php?id=${id}`).then(res => {
      if(res.data.status) {
        loadOd()
        alert('Od Deleted')
      } else {
        alert('Not Deleted')
      }
    })
  }

  return (
    <div>
      <div className="container my-3">
        <div className="container">
          <div className="py-4">
            <h3 className="mb-3 text-center">Od Applications</h3>
            <table className="table">
              <thead className="thead-primary">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col" className='col-2'>Register Id</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col" className='col-3'>Title</th>
                  <th scope="col" className='col-2 text-center'>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) =>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.regid}</td>
                    <td>{user.startD}</td>
                    <td>{user.endD}</td>
                    <td>{user.title}</td>
                    <td className='text-center'>
                      {
                        <div>
                          {(user.status == "pending") ? (
                        <Link to={`/staff/verification/${user.id}`} className='btn btn-warning col-6'>View</Link>
                      ) : (
                        (user.status == "accept") ? (
                          <Link to={`/staff/approvedod/${user.id}`} className='btn btn-success col-6'>Approved</Link>
                        ) : (
                          <Link to={`/staff/deniedod/${user.id}`} className='btn btn-danger col-6'>Denied</Link>
                        )
                      )} <button className="btn btn-secondary" onClick={() => DeleteOd(user.id) }><i class="fa-solid fa-trash"></i></button>
                        </div>
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </div>
  )
}

export default OdForms