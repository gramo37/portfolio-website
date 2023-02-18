import React from 'react'
import "../css/PhotoCard.css"
import LaunchIcon from '@mui/icons-material/Launch';

const PhotoCard = ({image, name, about, link}) => {
  return (
    <div className='photo-card-container'>
        <div className='photo-card-photo'>
            <img src={image}/>
        </div>
        <div className='photo-card-info-container'>
            <h2>{name}</h2>
            <a href={link} className='photo-card-link-container'>View Project <LaunchIcon sx={{fontSize: 15}}/></a>
            <ul>{about.map((item) => {
                return <li>{item}</li>
            })}
            </ul>
        </div>
    </div>
  )
}

export default PhotoCard