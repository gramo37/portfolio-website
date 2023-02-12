import React, { useContext } from 'react'
import "../css/About.css"
import { UserContext } from "./App"
import { darkPurple, white } from '../assets/colors';
import Links from './Links';

const About = () => {
  const { links, phone, email, name, introduction, resumeLink } = useContext(UserContext)
  return (
    <div className='about-me-container'>
      <h1>About Me</h1>
      <div className='about-me-personal-info-container'>
        <table className='about-me-personal-info-table'>
          <tbody>
            <tr>
              <td className='table-cell-bold'>Full Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className='table-cell-bold'>Phone:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td className='table-cell-bold'>Email:</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='about-me-introduction-container'>
        {introduction.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
      <div className='about-me-footer'>
        <Links size={23} color={white} bgColor={darkPurple} padding={"7px"} borderRadius={"5px"}/>
        <div>
          <a id="download-cv-button" href={resumeLink}>Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default About