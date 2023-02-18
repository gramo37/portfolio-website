import React from 'react'
import "../css/Footer.css"
import { orange } from '../assets/colors.js';
import { Link } from 'react-router-dom';
import Links from './Links';

const Footer = () => {

  return (
    <div className='footer-container'>
      <Links size={25} color={orange}/>
      <div style={{opacity: 0}}><Link to="/login">s</Link></div>
    </div>
  )
}

export default Footer