import React, { useContext } from 'react'
import "../css/Resume.css"
import { UserContext } from './App'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { orange } from '../assets/colors';

const Resume = () => {
    const { workExperience, education } = useContext(UserContext) || {}
    
    return (
        <div className='resume-container'>
            <h1>My Resume</h1>
            <div className='resume-work-experience-container'>
                <div className='resume-status-line'></div>
                <div className='resume-work-experience-title'><h2>Work Experience</h2></div>
                <div className='resume-work-experience-information'>
                    {Object.values(workExperience)?.map((item, index) => {
                        return (
                            <div key={index} className='resume-information-item'> 
                                <div className='resume-information-icon'><WorkIcon sx={{color: orange}}/></div>
                                <h3>{item.position}</h3>
                                <p>{item.companyName} - {item.period}</p>
                                {Object.values(item.about)?.map((key, index) => {
                                    return <p key={index}>{key}</p>
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='resume-education-container'>
                <div className='resume-status-line'></div>
                <div className='resume-education-title'><h2>Education</h2></div>
                <div className='resume-education-information'>
                    {education?.map((item, index) => {
                        return (
                        <div key={index} className='resume-information-item'>
                            <div className='resume-information-icon'><SchoolIcon sx={{color: orange}}/></div>
                            <h3>{item.degreeName}</h3>
                            <p>{item.collegeName} - {item.period}</p>
                            {item?.about?.map((key, index) => {
                                return <p key={index}>{key}</p>
                            })}
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Resume