import React from 'react'
import menu from '../images/Vector.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand text-light" href="#">get<span>linked</span></a>
        <button className="navbar-toggler me-4 mt-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <img src={menu} alt={menu}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="" href="#">timeline</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#">overview</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#">FAQs</a>
                </li>
                <li className="nav-item">
                    <a className="" href="#">contacts</a>
                </li>
            </ul>
            <button className='btnn'>register</button>
        </div>
    </nav> 
  )
}

export default Navbar

