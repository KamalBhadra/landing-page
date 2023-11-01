import React from 'react'

export default function TalentSculpt() {
    return (

        <section className='talent-sculpt'>
            <div className='rectangle'>
                <div className='sculpt-title'>
                    What is Klan’s TalentSculpt?
                </div>
                <div className='sculpt-content'>
                    <div className='left-content'>
                        <img src='Images/sculpt-image.png' alt='sculpt-image' />
                        <img id='top-image' src='Images/sculpt-top-image.png' alt='sculpt-top-image' />
                        <img id='bottom-image' src='Images/sculpt-bottom-image.png' alt='sculpt-bottom-image' />
                    </div>
                    <div className='right-content'>
                        <div className='card-content'>
                            <div className='card-one'>
                                <span id='big-text'>Specialized Team for your needs</span>
                                <span id='small-text'>Assembled by Klan’s in-house professionals to fulfil your requirements. Made up of the most reliable and experienced talent in the industry.</span>
                            </div>
                            <div className='card-two'>
                                <span id='big-text'>Dedicated Members with High-Skill</span>
                                <span id='small-text'>Each member associated with Klan is known for their dedication to the craft. Klan only picks highly-talented individuals that have proven experience and skill.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
