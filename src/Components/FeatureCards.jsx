import React from 'react'

export default function FeatureCards() {
    return (
        <section className='feature-cards'>
            <div className='card-text'>
                <div className='first-line'>
                    Vetted Talent,
                </div>
                <div className='second-line'>
                    <span>With</span> Zero Hassles.
                </div>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img id="first" src='Images/feature-card-first-image.png' alt='first image' />
                </div>
                <div className='card'>
                    <img id="second" src='Images/feature-card-second-image.png' alt='second image' />
                </div>
                <div className='card'>
                    <img id="third" src='Images/feature-card-third-image.png' alt='third image' />
                </div>
                <div className='card'>
                    <img id="fourth" src='Images/feature-card-fourth-image.png' alt='fourth image' />
                </div>

            </div>
        </section>
    )
}
