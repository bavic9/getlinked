import React from 'react'
import cup from '../images/9486889 1.png'
import silver from '../images/silver_medal 1.png'
import gold from '../images/gold_medal 1.png'
import bronze from '../images/bronze_medal 1.png'




const Prizes = () => {
  return (
    <div className=' box prize-box'>
        <div className='stars'>
        </div>
      <div className='prize-container'>
        <div className='prize-head'>
            <h2>Prizers and <span>Rewards</span></h2>
            <p>Highlight of the prizes or rewards for winers and for Participants</p>
        </div>
        <div className='prizes'>
            <div className='prize-img'>
                <img src={cup} alt={cup}/>
            </div>
            <div className='main-prize'>
                <div className='medal'>
                    <img className='silver' src={silver} alt={silver}/>
                    <div className='prize-text'>
                        <h2>2nd</h2>
                        <p>Runner</p>
                        <span>N300,000</span>
                    </div>
                </div>
                <div className='medal-gold'>
                    <img className='gold' src={gold} alt={gold}/>
                    <div className='prize-text'>
                        <h2>1st</h2>
                        <p>Runner</p>
                        <span>N400,000</span>
                    </div>
                </div>
                <div className='medal'>
                    <img className='bronze' src={bronze} alt={bronze}/>
                    <div className='prize-text'>
                        <h2>3rd</h2>
                        <p>Runner</p>
                        <span>N150,000</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes
