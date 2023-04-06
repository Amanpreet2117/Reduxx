import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const mydata=useSelector((state)=>state.carddata.cartdata)
    return (
        <>
         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Addcart/">ADDcart</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Dataapi/">dataapi</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/viewredux/">viewredux</Link>
        </li>
        
        
       
      </ul>
      {/* <form class="d-flex" role="search"> */}
      <Link class="btn btn-outline-success" to="/viewredux/">ADD CART {mydata.length}</Link>
      {/* </form> */}
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Header
