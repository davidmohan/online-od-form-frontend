import React from 'react'

function DefaultStaffLoad({staffData}) {

  const Height = {
    height: '650px'
  }

  return (
    <div className='w-100 container d-flex justify-content-center align-items-center flex-column' style={Height}>
      <h3>Welcome to Staff portal</h3>
      <h2>{staffData.name}</h2>
    </div>
  )
}

export default DefaultStaffLoad