import React, {useContext} from 'react'
import "../css/Links.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { UserContext } from './App';

const Links = ({ size, color, bgColor, padding, borderRadius }) => {
    const { links } = useContext(UserContext)
    const options = {
        fontSize: size, 
        backgroundColor: bgColor, 
        padding, 
        borderRadius
    }
    return (
        <div className='links-container'>
            {links.map((item) => {
                if (item.name === "twitter") return <a key={item.name} className='link-icons-container' href={item.link}><TwitterIcon style={options} sx={{ color: color }} /></a>
                if (item.name === "linkedin") return <a key={item.name} className='link-icons-container' href={item.link}><LinkedInIcon style={options} sx={{ color: color }} /></a>
                if (item.name === "gitHub") return <a key={item.name} className='link-icons-container' href={item.link}><GitHubIcon style={options} sx={{ color: color }} /></a>
                return null
            })}
        </div>
    )
}

export default Links