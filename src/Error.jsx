import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Error() {

  const Height = {
    height: "100vh"
  }

  return(
    <div className="container w-100 d-flex flex-column justify-content-center align-items-center" style={Height}>
      <div className="h1">404 - PAGE NOT FOUND</div> 
      <Link to={'/'} className="btn btn-secondary col-1"><i class="fa-solid fa-arrow-up-right-from-square"></i> Home</Link>    
    </div>
  )
}

export default Error