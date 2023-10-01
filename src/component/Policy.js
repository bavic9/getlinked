import React from 'react'
import check from '../images/list terms.png'
import lock from '../images/Vector11.png'
import unlock from '../images/08 1.png'





const Policy = () => {
  return (
    <div className='box'>
        <div className='policy-container'>
            <div className='policy-texts'>
                <div className='policy-head'>
                    <h2>Privacy Policy and <span>Terms</span></h2>
                    <h6>Last updated on September 12, 2023</h6>
                    <p>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                </div>
                <div className='policy-rule'>
                    <p className='mt-4'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                    <span>Licensing Policy</span>
                    <h3>Here are terms of our Standard License:</h3>
                    <div className='terms'>
                        <div className='term'>
                            <img src={check} alt={check}/>
                            <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>
                        <div className='term'>
                            <img src={check} alt={check}/>
                            <p>You are licensed to use the item available at any free source sites, for your project developement</p>
                        </div>
                    </div>
                    <button className='btnn'>read more</button>
                </div>
            </div>
            <div className='policy-imgs'>
                <img src={lock} alt={lock}/>
                <img src={unlock} alt={unlock}/>
            </div>
        </div>
    </div>
  )
}

export default Policy
