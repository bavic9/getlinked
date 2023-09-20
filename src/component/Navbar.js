import React from 'react'
import menu from '../Vector.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand text-light" href="#">get<span style={{color: '#D434FE'}}>linked</span></a>
        <button className="navbar-toggler me-4 mt-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <img className="" src={menu} alt={menu}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">timeline</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">FAQs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">contacts</a>
                </li>
            </ul>
            <button className='btnn'>register</button>
        </div>
    </nav> 
  )
}

export default Navbar

