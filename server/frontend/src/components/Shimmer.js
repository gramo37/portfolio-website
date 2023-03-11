import React from 'react'
import "../css/Shimmer.css"

const Shimmer = () => {
    return (
        <div className='shimmer-container'>
            <div className='shimmer-info-container'>
                <div className='shimmer-profile-photo'></div>
                <div className='shimmer-profile-name'></div>
                <div className='shimmer-profile-name'><span></span></div>
                <div className='shimmer-links-container'>
                    {[1, 2, 3].map((item) => {
                        return <div key={item} className='shimmer-link-item'></div>
                    })}
                </div>
                <div className='shimmer-animation'></div>
            </div>
        </div>
    )
}

export default Shimmer