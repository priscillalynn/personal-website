import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FiTool} from 'react-icons/fi'
import {TbMessageCircle} from 'react-icons/tb'

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeHeart/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#projects"><BiBook/></a>
      <a href="#skills"><FiTool/></a>
      <a href="#contact"><TbMessageCircle/></a>
    </nav>
  )
}

export default Nav