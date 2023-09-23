import React from 'react'
import img1 from '../images/Liberty company logo white colour.png'
import img2 from '../images/Liberty company logo white.png'
import img3 from '../images/Winwise logo White colour 1.png'
import img4 from '../images/wisper logo white.png'
import img5 from '../images/Paybox.png'
import img6 from '../images/Vuzual Plus.png'



const Sponsors = () => {
  return (
    <div className='box'>
        <div className='sponsor-body'>
            <div className='sponsor-head'>
                <h2>Partners and Sponsors</h2>
                <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            </div>
            <div className='grid-container'>
                <div className="grid">
                    <div className="grid-area grid-area-1">
                        <img className='img1' src={img1} alt={img1}/>
                    </div>
                    <div className="grid-area grid-area-2">
                        <img className='img2' src={img2} alt={img2}/>
                    </div>
                    <div className="grid-area grid-area-3">
                        <img className='img3' src={img3} alt={img3}/>
                    </div>
                    <div className="grid-area grid-area-4">
                        <img className='img4' src={img4} alt={img4}/>
                    </div>
                    <div className="grid-area grid-area-5">
                        <img className='img5' src={img5} alt={img5}/>
                    </div>
                    <div className="grid-area grid-area-6">
                        <img className='img6' src={img6} alt={img6}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors
