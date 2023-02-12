import React from 'react'
import "../css/ProfileFormPersonalDetails.css"

const ProfileFormPersonalDetails = () => {
    return (
        <>
            <h3>Personal Details</h3>
            <div className='profile-photo-container'>
                <div className='profile-photo'><img src="https://res.cloudinary.com/dwtxio5dn/image/upload/v1676140913/portfolio/prasanna_slx3qm.jpg" /></div>
                <div className='profile-name-email'>
                    <div className='profile-form-single-input'>
                        <input className='profile-input' placeholder='Full Name' />
                    </div>
                    <div className='profile-form-single-input'>
                        <input className='profile-input' placeholder='Email' />
                    </div>
                </div>
            </div>
            <div className='profile-form-double-input'>
                <input className='profile-input' type="number" placeholder='Phone' />
                <input className='profile-input' type="text" placeholder='Profession' />
            </div>
            <div className='profile-form-double-input'>
                <input className='profile-input' type="number" placeholder='Twitter' />
                <input className='profile-input' type="text" placeholder='LinkedIn' />
            </div>
            <div className='profile-form-double-input'>
                <input className='profile-input' type="number" placeholder='Github' />
                <input className='profile-input' type="text" placeholder='Resume Link' />
            </div>
            <h3>Your Introduction</h3>
            <div className='profile-form-introduction-container'>
                <div className='profile-form-single-input'>
                    <input className='profile-input' placeholder='Enter your line' />
                </div>
                <div className='profile-form-single-input'>
                    <input className='profile-input' placeholder='Enter your line' />
                </div>
                <div className='profile-form-add-intro-line'><button>Add line</button></div>
            </div>
        </>
    )
}

export default ProfileFormPersonalDetails