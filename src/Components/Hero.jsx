import React from 'react'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='navbar'>

        <div className='navbar-logo'>
          <img src='Images/logo.png' alt='nav-logo' />
        </div>

        <div className='navbar-link'>

          <div className='text-link'>
            <ul>

              <li> For Talent
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M5.5 6.33691C6.16379 7.25059 6.94192 8.06896 7.81383 8.77079C7.92336 8.85895 8.07664 8.85895 8.18617 8.77079C9.05808 8.06896 9.83621 7.25059 10.5 6.33691" stroke="#192023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> </li>
              <li> For Companies
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M5.5 6.33691C6.16379 7.25059 6.94192 8.06896 7.81383 8.77079C7.92336 8.85895 8.07664 8.85895 8.18617 8.77079C9.05808 8.06896 9.83621 7.25059 10.5 6.33691" stroke="#192023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className='button-link'>
            <button className='login-btn'>Login</button>
            <button className='request-access-btn'>Request Access <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
              <path d="M9.26517 3.76517C9.41161 3.61872 9.41161 3.38128 9.26517 3.23483L6.87868 0.84835C6.73223 0.701903 6.4948 0.701903 6.34835 0.84835C6.2019 0.994796 6.2019 1.23223 6.34835 1.37868L8.46967 3.5L6.34835 5.62132C6.2019 5.76777 6.2019 6.0052 6.34835 6.15165C6.4948 6.2981 6.73223 6.2981 6.87868 6.15165L9.26517 3.76517ZM0 3.875H9V3.125H0V3.875Z" fill="white" />
            </svg></button>
          </div>
        </div>
      </div>
      <div className='hero-lockup'>
        <div className='left-section'>
          <div className='text'>
            Elite teams <span className='grey'> for </span> Streamlined Success.
          </div>
          <div className='content-area'>

            <button>
              <div className='btn-content'>
                <div className='btn-text'>
                  Request Access
                </div>
                <div className='btn-arrow'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M9.481 3.75C10.7956 4.72223 11.9764 5.85799 12.994 7.12855C13.0814 7.23754 13.125 7.36877 13.125 7.5M9.481 11.25C10.7956 10.2778 11.9764 9.14201 12.994 7.87145C13.0814 7.76246 13.125 7.63123 13.125 7.5M13.125 7.5H1.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </button>

            <div className='cta-text'>
              Hire the savviest tech talent in
              48 hours or less.
            </div>

          </div>
        </div>
        <div className='right-section'>
          <img src='images/lockup-image.png' alt='hero-lockup-image' />
        </div>
      </div>
    </section>
  )
}
