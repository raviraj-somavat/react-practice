import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1 className='hero-title'>YOUR FEET DESERVE THE BEST</h1>
            <p className='hero-description'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='hero-buttons'>
                <button>shop now</button>
                <button className='sec-btn'>Category</button>
            </div>
            <p>also avilable on</p>
            <div className ='hero-apps'>
                <img src="../../images/flipkart.png" alt="appstore" />
                <img src="../../images/amazon.png" alt="playstore" />
            </div>
        </div>
        <div>
            <img src="../../images/hero-image.png" alt="hero" />
        </div>
    </div>
  )
}

export default Hero