import React from 'react'
import "../css/Card.css"
import CloseIcon from '@mui/icons-material/Close';

const Card = ({ id, title, subTitle, period, about, deleteItem, editItem }) => {
  return (
    <div className='profile-form-card-container'>
      <button className='profile-form-wk-delete-btn' onClick={(e) => deleteItem(e, id)}><CloseIcon /></button>
      <h2>{title}</h2>
      <p>{subTitle} - {period}</p>
      <ul>
        {Object.values(about).map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Card