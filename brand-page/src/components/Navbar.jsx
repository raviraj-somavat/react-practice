import React from 'react'
const Navbar = () => {
  return (
        <nav className='navigation'>
            <div>
                <img src="../../images/brand_logo.png" alt="logo" />
                
            </div>
            <div>
                <ul>
                    <li>menu</li>
                    <li>location</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>
            <div>
                <button>login</button>
            </div> 
        </nav>

  )
}

export default Navbar