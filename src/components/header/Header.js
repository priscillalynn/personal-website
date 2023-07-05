import React from 'react'
import './header.css'
import CTA from './CTA'
import temp from './../../assets/pc3.gif'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <div className="header-img">
                <img src={temp} alt="computer" />
            
          <div className="Typist">
            <h1>Priscilla Colon</h1>
            </div>
            <h5 className="text-light">Computer Science student / Web Developer based in florida. </h5>
            <CTA />
        </div>
        <HeaderSocials />
        </div>
    </header>
  )
}

export default Header