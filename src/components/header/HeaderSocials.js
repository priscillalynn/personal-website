import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='mailto:plynn9036@gmail.com' target="_blank" rel="noreferrer noopener" style={{ fontSize: '21px' }}><MdEmail/></a>
      <a href='https://github.com/priscillalynn' target="_blank" rel="noreferrer noopener" style={{ fontSize: '20px' }}><FaGithub/></a>
      <a href='https://www.linkedin.com/in/priscillalynn/' target="_blank" rel="noreferrer noopener" style={{ fontSize: '16px' }}><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials