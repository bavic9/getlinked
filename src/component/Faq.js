import React from 'react'
import starP from '../images/star pu.png'
import starW from '../images/starW.png'
import star from '../images/star.png'
import questionMarkp from '../images/_ (1).png'
import questionMark from '../images/_.png'


const Faq = () => {
  return (
    <div className='criteria-container box'>
        <div className='text-area'>
            <div className='faq-head'>
                <img className='star' src={starP} alt={star}/>
                <h2>Frequently Ask <span>Question</span></h2>
                <p>We got answers to the questions that you might want to ask about <b>getlinked Hackathon 1.0</b></p>
            </div>
            <div className='faq-text'>
                <div className='txt'>
                    <div className='p-flex'>
                        <p>Can I work on a project I started before the hackathon?</p> 
                        <span>+</span>
                    </div>
                    <div className='p-flex'>
                        <p>What happens if I need help during the hackathon?</p> 
                        <span>+</span>
                    </div>
                    <div className='p-flex'>
                        <p>What happens if I don't have an idea for a project?</p> 
                        <span>+</span>
                    </div>
                    <div className='p-flex'>
                        <p>Can I join a team or do I have to come with one?</p> 
                        <span>+</span>
                    </div>
                    <div className='p-flex'>
                        <p>What happens after the hackathon ends</p> 
                        <span>+</span>
                    </div>
                    <div className='p-flex'>
                        <p>Can I work on a project I started before the hackathon?</p>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='image-area'>
            <div className='top-img'>
                <img className='questionMark' src={questionMark} alt={questionMark}/>
                <img className='questionMarkp' src={questionMarkp} alt={questionMark}/>
                <img className='star' src={starP} alt={star}/>
                <img className='questionMark' src={questionMark} alt={questionMark}/>
            </div>
            <div className='main-img'>
                <img className='star1' src={star} alt={star}/>
                <img className='star2' src={starP} alt={star}/>
                <img className='star3' src={starW} alt={star}/>
            </div>
        </div>
    </div>
  )
}

export default Faq
