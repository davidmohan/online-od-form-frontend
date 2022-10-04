import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'

function Home() {

  return (
    <div className='body'>

      <div class="first">
        <div class="first--left">
          <Link to={'/login'} className='first--left--shape btn btn-danger'>Login</Link>
          {/* <button class="first--left--shape border text-white" onClick={GoLogin}>Login</button> */}
        </div>
        <div class="first--right">
          <Link to={'/student'} className='first--right--shape btn btn-secondary' ><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Student</Link>
          <Link to={'/staff'} class="first--right--shape btn btn-outline-secondary"><i class="fa-solid fa-chalkboard-user"></i>&nbsp;&nbsp;Staff</Link>
        </div>
      </div>

      <div class="containers">
        <div class="containers--left">
          <div class="containers--left--box1">
            <div class="containers--left--box1--shapes"></div>
            <div class="containers--left--box1--shapes"></div>
            <div class="containers--left--box1--shapes"></div>
            <div class="containers--left--box1--shapes"></div>
          </div>
          <div class="containers--left--box2">
            <div class="containers--left--box2--list">
              <div class="containers--left--box2--list--circle"></div>
              <div class="containers--left--box2--list--shape"></div>
            </div>
            <div class="containers--left--box2--list">
              <div class="containers--left--box2--list--circle"></div>
              <div class="containers--left--box2--list--shape"></div>
            </div>
            <div class="containers--left--box2--list">
              <div class="containers--left--box2--list--circle"></div>
              <div class="containers--left--box2--list--shape"></div>
            </div>
            <div class="containers--left--box2--list">
              <div class="containers--left--box2--list--circle"></div>
              <div class="containers--left--box2--list--shape"></div>
            </div>
            <div class="containers--left--box2--list">
              <div class="containers--left--box2--list--circle"></div>
              <div class="containers--left--box2--list--shape"></div>
            </div>
            <div class="containers--left--box2--list">
              <div class="containers--left--box2--list--circle"></div>
              <div class="containers--left--box2--list--shape"></div>
            </div>
            <div class="containers--left--box2--list">
              <div class="containers--left--box2--list--circle"></div>
              <div class="containers--left--box2--list--shape"></div>
            </div>
          </div>
        </div>
        <div class="containers--mid">
          <div class="containers--mid--box1">
            <div class="containers--mid--box1--left">
              <div class="containers--mid--box1--left--shape"></div>
            </div>
            <div class="containers--mid--box1--right">
              <div class="containers--mid--box1--right--shape"></div>
              <div class="containers--mid--box1--right--shape"></div>
              <div class="containers--mid--box1--right--shape"></div>
            </div>
          </div>
          <div class="containers--mid--box2">
            <div class="containers--mid--box2--user">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="containers--mid--box2--shapes">
              <div class="containers--mid--box2--shapes--shape"></div>
              <div class="containers--mid--box2--shapes--shape"></div>
            </div>
          </div>
          <div class="containers--mid--box3">
            <div class="containers--mid--box3--inner"></div>
            <div class="containers--mid--box3--inner">
              <div class="box">
                <div class="box--shape"></div>
                <div class="box--shape"></div>
                <div class="box--shape"></div>
              </div>
            </div>
            <div class="containers--mid--box3--inner">
              <div class="box">
                <div class="box--left">
                  <div class="box--left--shape"></div>
                  <div class="box--left--shape"></div>
                  <div class="box--left--shape"></div>
                  <div class="box--left--shape"></div>
                </div>
                <div class="box--right">
                  <div class="box--right--shape"></div>
                </div>
              </div>
            </div>
            <div class="containers--mid--box3--inner">
              <div class="box">
                <div class="box--left">
                  <div class="box--left--shape"></div>
                </div>
                <div class="box--right">
                  <div class="box--right--shape"></div>
                  <div class="box--right--shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="containers--right">
          <div class="containers--right--box1">
            <div class="containers--right--box1--shape"></div>
            <div class="containers--right--box1--shape"></div>
            <div class="containers--right--box1--shape"></div>
          </div>
          <div class="containers--right--box2">
            <div class="containers--right--box2--inner">
              <div class="containers--right--box2--inner--left">
                <div class="containers--right--box2--inner--left--shape">
                  <i class="fa-solid fa-user"></i>
                </div>
              </div>
              <div class="containers--right--box2--inner--right">
                <div class="containers--right--box2--inner--right--shape"></div>
                <div class="containers--right--box2--inner--right--shape"></div>
                <div class="containers--right--box2--inner--right--shape"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home