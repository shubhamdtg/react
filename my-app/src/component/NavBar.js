import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
            
  <nav>
    <div className="nav-wrapper ">
      <Link to="/" className="brand-logo">SS</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li>
            <button className="btn red">Logout</button>
        </li>
      </ul>
    </div>
  </nav>

    )
}
