import React from 'react'

export default function GettingStarted() {
    return (
        <section className='getting-started'>
            <div className='title'>
                <div className='title-text'>
                    Getting started with klan
                </div>
                <div className='selector'>
                    <button className='option-btn-first'>
                        For Companies
                    </button>
                    <button className='option-btn-second'>
                        For Talent
                    </button>
                </div>
            </div>
            <div className='cards'>

                <div className='card-first'>
                    <div className='card-text'>
                        <div className='card-text-first'>
                            1. Create your team roles
                        </div>
                        <div className='card-text-second'>
                            Customise team roles by handpicking the domain experts to fuel your specific project requirements and drive exceptional outcomes.
                        </div>
                    </div>
                    <div className='box-image'>
                        <img src='Images/klen-started-image.png' alt='Start' />
                    </div>
                </div>

                <div className='card-second'>
                    <div className='card-text'>
                        <div className='card-text-first'>
                            2. Find talent in just 5 days
                        </div>
                        <div className='card-text-second'>
                            Experience the efficiency of talent acquisition with us. Find top-tier candidates tailored to your needs in just 5 days
                        </div>
                    </div>
                    <div className='box-image'>
                        <img src='Images/klen-started-image-second.png' alt='Start' />
                    </div>
                </div>

                <div className='card-third'>
                    <div className='card-text'>
                        <div className='card-text-first'>
                            3. Start building with your new team
                        </div>
                        <div className='card-text-second'>
                        Unlock the power of synergy by assembling your dream team with Klan - AI backed expertly curated talent, perfectly aligned for unparalleled success.
                        </div>
                    </div>
                    <div className='box-image'>
                        <img src='Images/klen-started-image-third.png' alt='Start' />
                    </div>
                </div>


            </div>
        </section>
    )
}
