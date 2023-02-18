import React, {useContext} from 'react'
import "../css/Links.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { UserContext } from './App';

const Links = ({ size, color, bgColor, padding, borderRadius }) => {
    const { links } = useContext(UserContext) || {}

    const {twitter, linkedin, github} = links || {}

    const options = {
        fontSize: size, 
        backgroundColor: bgColor, 
        padding, 
        borderRadius
    }
    
    return (
        <div className='links-container'>
            <a className='link-icons-container' href={twitter}><TwitterIcon style={options} sx={{ color: color }} /></a>
            <a className='link-icons-container' href={linkedin}><LinkedInIcon style={options} sx={{ color: color }} /></a>
            <a className='link-icons-container' href={github}><GitHubIcon style={options} sx={{ color: color }} /></a>
        </div>
    )
}

export default Links