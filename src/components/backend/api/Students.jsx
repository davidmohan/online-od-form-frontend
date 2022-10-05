import { faAllergies } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Students() {

  const [users, setUser] = useState([])

  const navigate = useNavigate()

  const [delid, setDelId] = useState({ allow: false })

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    axios.get("http://localhost/odform/sd/selectstudent.php").then(res => setUser(res.data))
  }

  function Delete(id) {
    if (window.confirm("Delete the data?") == true) {
      const dregid = {
        regid: id
      }
      axios.get(`http://localhost/odform/sd/deletestudent.php?regid=${dregid.regid}`).then(res => {
        if (res.data.status) {
          loadUser()
          alert('Record Deleted')
        } else {
          alert('Record not Deleted')
        }
      })
    }
  }

  return (
    <div>
      <div className="container my-3">
        <div className="container">
          <div className="py-4">
            <h3 className="mb-3 text-center">Students</h3>
            <table className="table">
              <thead className="thead-primary">
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col" className='col-2'>Register Id</th>
                  <th scope="col" className='col-2'>Name</th>
                  <th scope="col" className='col-3'>Email ID</th>
                  <th scope="col" className='col-1'>Class</th>
                  <th scope="col" className='col-1'>Section</th>
                  <th scope='col' className='col-2 text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) =>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.regid}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.class}</td>
                    <td>{user.sec}</td>
                    <td className='text-center'>
                      {/* <Link className='btn btn-danger' to={`/staff/deletestudent/${user.regid}`} >Delete</Link> */}
                      <button className="btn btn-danger" onClick={() => Delete(user.regid)}>Delete</button>
                      <Link to={`/staff/updatestudent/${user.regid}`} className='btn btn-secondary mx-2'>Edit</Link>
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

export default Students