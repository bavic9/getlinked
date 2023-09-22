import React from 'react'
import star from '../images/star.png'
import starW from '../images/starW.png'
import lady from '../images/7450159 1.png'

const Rules = () => {
  return (
    <div className='box box-body'>
        <div className='box-text box-t'>
            <div className='puple-bg'></div>
            <div className='text-head th'>
                <h2>
                    Rules and <span>Guidelines</span>
                </h2>
                <img className='star' src={star} alt={star}/>
            </div>
            <div className='text-p'>
                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
                <img className='star' src={starW} alt={star}/>
            </div>
        </div>
        <div className='lady-img'>
            <img className='' src={lady} alt={lady}/>
        </div>
    </div>
  )
}

export default Rules
