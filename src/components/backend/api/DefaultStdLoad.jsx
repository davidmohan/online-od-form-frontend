import React from 'react'

function DefaultStdLoad({stdData}) {

  const Height = {
    height: '650px'
  }

  return (
    <div className='w-100 container d-flex justify-content-center align-items-center flex-column' style={Height}>
      <h3>Welcome to Student portal</h3>
      <h2>{stdData.name}</h2>
    </div>
  )
}

export default DefaultStdLoad