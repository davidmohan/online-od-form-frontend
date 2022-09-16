import { Link, useNavigate } from "react-router-dom"

function Error() {

  let navigate = useNavigate()

  function Click() {
    if (window.confirm('Are you want to go Home??')) {
      navigate('/')
    } else {
      alert('you may continue...')
    }
  }

  return(
    <div>
      <h1>404 - PAGE NOT FOUND</h1> <br />
      {/* <a href="/"><button>BACK TO HOME</button></a> */}
      {/* <Link to='/'><button>BACK TO HOME</button></Link> */}
      <button onClick={Click}>BACK TO HOME</button>
    </div>
  )
}

export default Error