import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Login from './components/devlogin/Login'
import Student from './components/backend/Student'
import Staff from './components/backend/Staff'
import AppliedOd from './components/backend/api/AppliedOd'
import NewOd from './components/backend/api/NewOd'
import OdForms from './components/backend/api/OdForms'
import Students from './components/backend/api/Students'
import NewStudent from './components/backend/api/NewStudent'
// import DeleteStudent from './components/backend/api/DeleteStudent'
import UpdateStudent from './components/backend/api/UpdateStudent'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/student' element={<Student/>} >
            <Route path='applied/:regid' element={<AppliedOd/>}/>
            <Route path='newod/:regid' element={<NewOd/>} />
          </Route>
          <Route path='/staff' element={<Staff/>}>
            <Route path='odforms' element={<OdForms/>} />
            <Route path='students' element={<Students/>} />
            <Route path='newstudent' element={<NewStudent/>} />
            {/* <Route path='deletestudent/:regid' element={<DeleteStudent/>} /> */}
            <Route path='updatestudent/:regid' element={<UpdateStudent/>} />
          </Route>
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;