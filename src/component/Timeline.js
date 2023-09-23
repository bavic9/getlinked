import React from 'react'
import star from '../images/star pu.png'

const Timeline = () => {
  return (
    <div className='box time-line'>
        <div className='timeline-title'>
            <h2>timeline</h2>
            <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
        </div>
        <div className='timeline'>
            <img className='star' src={star} alt={star}/>
            <div className='schedule'>
                <div className='topic'>
                    <span>Hackathon Announcement</span>
                    <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </div>
                <div className='dates'>
                    <span className='date'>November 18, 2023</span> 
                    <div className='number'>1</div>
                </div>
            </div>
            <div className='schedule'>
                <div className='topic'>
                    <span>Teams Registration begins</span>
                    <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </div>
                <div className='datesN'>
                    <span className='date'>November 18, 2023</span>
                    <div className='number'>2</div>
                </div>
            </div>
            <div className='schedule'>
                <div className='topic'>
                    <span>Teams Registration ends</span>
                    <p>Interested Participants are no longer Allowed to register</p>
                </div>
                <div className='dates n3'>
                    <span className='date'>November 18, 2023</span>
                    <div className='number'>3</div>
                </div>
            </div>
            <div className='schedule'>
                <div className='topic'>
                    <span>Announcement of the accepted teamsand ideas</span>
                    <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </div>
                <div className='datesN'>
                    <span className='date'>November 18, 2023</span>
                    <div className='number'>4</div>
                </div>
            </div>
            <div className='schedule'>
                <div className='topic'>
                    <span>Getlinked Hackathon 1.0 Offically Begins</span>
                    <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </div>
                <div className='dates n5'>
                    <span className='date'>November 18, 2023</span>
                    <div className='number'>5</div>
                
                </div>
            </div>
            <div className='schedule'>
                <div className='topic'>
                    <span>Demo Day</span>
                    <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </div>
                <div className='datesN'>
                    <span className='date'>November 18, 2023</span>
                    <div className='number'>6</div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Timeline
