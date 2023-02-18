import React, { useContext } from 'react'
import "../css/Projects.css"
import { UserContext } from './App'

const Projects = () => {

    const { projects } = useContext(UserContext) || {}

    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <div className='projects-information'>
                {projects?.map((item, index) => {
                    return (<a href={item.link} key={index} style={{ backgroundImage: `url(${item.image})` }} className='project-information-item'>
                        <h3>{item.name}</h3>
                        {item?.about?.map((key, index) => {
                            if (index >= 2) return null
                            return <p key={index}>{key}</p>
                        })}
                    </a>)
                })}
            </div>
        </div>
    )
}

export default Projects