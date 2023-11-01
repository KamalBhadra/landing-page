import React from 'react'

export default function WhatClanCanDo() {
    return (
        <section className='klan-features'>
            <div className='title'>
                <div className='heading-title'>
                    How can Klan help you?
                </div>
                <div className='heading-description'>
                    Integrate expert professionals to boost your team, or collaborate with a fully-managed team tailored to your requirements.
                </div>
            </div>
            <div className='cards'>

                <div className='card-one'>
                    <div className='klan-team'>

                        <div className='existing-team'>
                            <div className='image-group'>
                                <div className='round-image'>
                                    <img src='Images/feature-image-one.png' alt='Feature Image' />
                                </div>
                                <div className='round-image'>
                                    <img src='Images/feature-image-two.png' alt='Feature Image' />
                                </div>
                                <div className='round-image'>
                                    <img src='Images/feature-image-three.png' alt='Feature Image' />
                                </div>
                            </div>
                            <div className='team-title'>
                                Existing Team
                            </div>
                        </div>

                        <div className='plus-sign'>
                            +
                        </div>

                        <div className='certified-team'>
                            <div className='image-group'>
                                <div className='round-image'>
                                    <img src='Images/certified-image-one.png' alt='Feature Image' />
                                </div>
                                <div className='round-image'>
                                    <img src='Images/certified-image-two.png' alt='Feature Image' />
                                </div>

                            </div>
                            <div className='team-title'>
                                klen Certified
                            </div>
                        </div>


                    </div>
                    <div className='card-detail'>
                        <div className='card-content'>
                            <div className='heading-text'>
                                Upgrade your existing team
                            </div>
                            <div className='card-description'>
                                <div className='text'>
                                    Klan gives you access to pre-vetted world-class talent, allowing you to take your team to the next level.
                                </div>
                                <div className='demo-button'>
                                    <button className='demo-btn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <rect y="0.5" width="24" height="24" rx="12" fill="#99C0D1" fill-opacity="0.45" />
                                        <path d="M14.8333 12.75L9 16.5V9L14.8333 12.75Z" fill="#192023" />
                                    </svg>Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className='productivity-detail'>
                            <div className='title'>
                                Productivity
                            </div>
                            <div className='details'>
                                89%
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-two'>

                    <div className='left-section'>
                        <img src='images/klen-help-image-one.png' alt='help image' />
                        <div className='card-detail'>
                            <div className='card-content'>
                                <div className='heading-text'>
                                    Build a team from scratch
                                </div>
                                <div className='card-description'>
                                    <div className='text'>
                                        Klan’s TalentSculpt matches the best talent that can collaborate the most efficiently for your unique needs.
                                    </div>
                                    <div className='demo-button'>
                                        <button className='demo-btn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <rect y="0.5" width="24" height="24" rx="12" fill="#99C0D1" fill-opacity="0.45" />
                                            <path d="M14.8333 12.75L9 16.5V9L14.8333 12.75Z" fill="#192023" />
                                        </svg>Learn More</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='right-section'>
                        <img src='Images/klen-help-right-image.png' alt='klen help right-image' />
                    </div>
                </div>










            </div>
        </section>
    )
}
