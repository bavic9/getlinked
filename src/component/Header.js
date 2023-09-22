import React from 'react'
import star from '../images/star.png'
import starW from '../images/starW.png'
import chain from '../images/chain-9365116-7621444.png'
import spark from '../images/1f4a5.png'
import bulb from '../images/Creative 1.png'
import pic from '../images/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import glow from '../images/Image 1.png'
import metrix from '../images/metrix 1.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <div className='header-wrap'></div>
        <div className='header-head'>
            <img className='star' src={starW} alt={star}/>
            <div>
              <h3>Igniting a Revolution in HR Innovation</h3>
              <div className='line'></div>
            </div>
        </div>
      </div>

      <div className='header-main'>
        <div className='header-body'>
          <img className='flex-img' src={bulb} alt={bulb}/>
          <h2> getlinked Tech</h2>
          <div className='flex'>
            <h2>Hackathon <span>1.0</span></h2>
            <img className='flex-img1' src={chain} alt={chain}/>
            <img className='flex-img2' src={spark} alt={spark}/>
          </div>
          <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          <button className='btnn'>register</button>
      
        </div>


        <div className='images'>
          <img className='white' src={pic} alt={pic}/>
          <img className='glow' src={glow} alt={glow}/>
          <img className='metrix' src={metrix} alt={metrix}/>
        </div>



      </div>
    </div>
  )
}

export default Header
