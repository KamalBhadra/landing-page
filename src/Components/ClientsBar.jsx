import React from 'react'

export default function ClientsBar() {
    return (
        <section className='client-bar'>


            <div className='clients'>
                <span id='text'>Trusted by some of the world’s best</span>
                <div className='client-logos'>
                    <img id='good-glam-img' src='Images/good-glam-client.png' alt='good-glam-client' />
                    <img id='tata-img' src='Images/tata.png' alt='tata-client' />
                    <img id='newsreel-img' src='Images/newsreel.png' alt='newsreel-client' />
                    <img id='espn-img' src='Images/espn.png' alt='espn-client' />
                    <img id='somaiya-img' src='Images/somaiya.png' alt='somaiya-client' />
                    <img id='hotstar-img' src='Images/hotstar.png' alt='hotstar-client' />
                </div>
            </div>
        </section>
    )
}
