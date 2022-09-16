import { useNavigate } from "react-router-dom"

function Home() {

  var myStyle = {
    color: '#042aa7'
  }

  var navigate = useNavigate()

  function Close() {
    alert('Not able to Close the React!')
    navigate('/error')
  }

  return(
    <div style={myStyle}>
      <h1>HOME PAGE</h1>
      <button onClick={Close}>Exit</button>
    </div>
  )
}

export default Home