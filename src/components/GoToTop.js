import React from 'react'
import "../css/GoToTop.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const GoToTop = () => {

    const goToTopOnClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div onClick={goToTopOnClick} className='go-to-top-container'>
            <ArrowDropUpIcon sx={{fontSize: 36}}/>
        </div>
    )
}

export default GoToTop