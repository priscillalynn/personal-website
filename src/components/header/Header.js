import React from 'react'
import './header.css'
import CTA from './CTA'
import temp from './../../assets/pc3.gif'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Priscilla Colon</h1>
            <h5 className="text-light">Computer Science Major / Aspiring Software Engineer </h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={temp} alt="me" />
            </div>
        </div>
    </header>
  )
}

export default Header