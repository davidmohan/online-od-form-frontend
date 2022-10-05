import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function AppliedOd() {

  const param = useParams()

  // const navigate = useNavigate()

  const [users, setUser] = useState([])

  useEffect(() => {
    axios.get(`http://localhost/odform/od/odselectbyregid.php?regid=${param.regid}`).then(res => {setUser(res.data)})
  })

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
                    <td>
                      {(user.status == "pending") ? (
                        <button className="btn btn-warning w-100" disabled>Processing</button>
                      ) : (
                        (user.status == "accept") ? (
                          <button className="btn btn-success w-100" disabled>Approved</button>
                        ) : (
                          // <button className="btn btn-danger w-100" disabled>Denied</button>
                          <Link to={`/student/denied/${user.id}`} className='btn btn-danger w-100'>Denied</Link>
                        )
                      )}
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

export default AppliedOd