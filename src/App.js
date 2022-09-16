import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <a href='/'>Home</a>&nbsp;&nbsp;
        <a href='/about'>About</a>&nbsp;&nbsp;
        <a href='/contact'>Contact</a> */}
        <Link to={'/'}>Home</Link>&nbsp;&nbsp;
        <Link to={'/about'}>About</Link>&nbsp;&nbsp;
        <Link to={'/contact'}>Contact</Link>&nbsp;&nbsp;
        <Routes>
          <Route path='/' element={<Home name='hi'/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;