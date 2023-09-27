import React from 'react'
import starP from '../images/star pu.png'
import star from '../images/star.png'
import starW from '../images/starW.png'
import standing from '../images/8046554 1.png'

const Criteria = () => {
  return (
    <div className='criteria-container box'>
        <div className='criteria-img'>
            <img className='star' src={starP} alt={star}/>
            <img className='standing' src={standing} alt={standing}/>
            <img className='star str' src={star} alt={star}/>
            <img className='star str2' src={starW} alt={star}/>
        </div>
        <div className='criteria-text'>
            <div className='criteria-head'>
                <h2>
                        Judging Criteria <span>Key attributes</span>    
                </h2>
            </div>
            <div className='criteria-p'>
                <p>
                    <span>Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the
                    solution. Consider whether it addresses a real-world problem in a novel 
                    way or introduces innovative features.  
                </p>
                <p>
                    <span>Functionality</span>: Assess how well the solution works. Does it perform its 
                    intended functions effectively and without major issues? Judges would
                    consider the completeness and robustness of the solution.
                </p>
                <p>
                    <span>Impact and Relevance</span>: Determine the potential impact of the solution 
                    in the real world. Does it address a significant problem, and is it relevant 
                    to the target audience? Judges would assess the potential social, 
                    economic, or environmental benefits.  
                </p>
                <p>
                    <span>Technical Complexity</span>: Evaluate the technical sophistication of the solution. 
                    Judges would consider the complexity of the code, the use of advanced 
                    technologies or algorithms, and the scalability of the solution.
                </p>
                <p>
                    <span>Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered 
                    to the rules and guidelines of the hackathon, including deadlines, use of 
                    specific technologies or APIs, and any other competition-specific requirements.
                </p>
            </div>
            <div className='bt-str'>
                <button className='btnn'>read more</button>
                <img className='star str2' src={starW} alt={star}/>
            </div>
        </div>
    </div>
  )
}

export default Criteria
