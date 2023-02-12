import React from 'react'
import "../css/Card.css"
import CloseIcon from '@mui/icons-material/Close';

const Card = ({title, subTitle, period, about}) => {
  return (
    <div className='profile-form-card-container'>
        <button className='profile-form-wk-delete-btn'><CloseIcon /></button>
        <h2>{title}</h2>
        <p>{subTitle} - {period}</p>
        <div>
            {about.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    </div>
  )
}

export default Card