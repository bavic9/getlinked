import React from 'react'
import bigIdea from '../images/The big idea.png'
import star from '../images/star pu.png'
import arrow from '../images/arrow.png'


const Intro = () => {
  return (
    <div className='box'>
      <div className='box-body'>
        <div className='box-images'>
            <img className='star-p' src={star} alt={star}/>
            <img className='bigIdea' src={bigIdea} alt={bigIdea}/>
            <img className='arrow' src={arrow} alt={arrow}/>
        </div>
        <div className='box-text'>
            <div className='text-head'>
                <h2>
                    Introduction to getlinked <span>tech Hackathon 1.0</span>
                </h2>
                <img className='star' src={star} alt={star}/>
            </div>
            <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
            </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
