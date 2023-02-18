import React, { useContext } from 'react'
import "../css/ProfileFormPersonalDetails.css"
import { DataContext } from "../pages/Profile"
import { genrateUniqueId } from "../utils/generateId"
import CloseIcon from '@mui/icons-material/Close';

const ProfileFormPersonalDetails = () => {

    const { data, setData } = useContext(DataContext);

    const { name, email, phone, profession, resumeLink, links, introduction } = data

    const { twitter, linkedin, github } = links

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleLinksChange = (e) => {
        setData({ ...data, links: { ...links, [e.target.name]: e.target.value } })
    }

    const handleIntroChange = (e) => {
        setData({ ...data, introduction: { ...introduction, [e.target.name]: e.target.value } })
    }

    const addIntroLine = (e) => {
        e.preventDefault()
        let temp = introduction
        let uuid = genrateUniqueId()
        while ((`line${uuid}` in temp)) uuid = genrateUniqueId();
        temp[`line${uuid}`] = ""
        setData({ ...data, introduction: temp })
    }

    const deleteIntroLine = (e, lineNumber) => {
        e.preventDefault()
        let temp = introduction
        delete temp[lineNumber]
        setData({ ...data, introduction: temp })
    }

    return (
        <>
            <h3>Personal Details</h3>
            <div className='profile-photo-container'>
                <div className='profile-photo'><img src="https://res.cloudinary.com/dwtxio5dn/image/upload/v1676140913/portfolio/prasanna_slx3qm.jpg" /></div>
                <div className='profile-name-email'>
                    <div className='profile-form-single-input'>
                        <input name="name" className='profile-input' placeholder='Full Name' value={name} onChange={handleChange} />
                    </div>
                    <div className='profile-form-single-input'>
                        <input name="email" className='profile-input' placeholder='Email' value={email} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className='profile-form-double-input'>
                <input name="phone" onChange={handleChange} className='profile-input' type="text" placeholder='Phone' value={phone} />
                <input name="profession" onChange={handleChange} className='profile-input' type="text" placeholder='Profession' value={profession} />
            </div>
            <div className='profile-form-double-input'>
                <input name="twitter" onChange={handleLinksChange} className='profile-input' type="text" placeholder='Twitter' value={twitter} />
                <input name="linkedin" onChange={handleLinksChange} className='profile-input' type="text" placeholder='LinkedIn' value={linkedin} />
            </div>
            <div className='profile-form-double-input'>
                <input name="github" onChange={handleLinksChange} className='profile-input' type="text" placeholder='Github' value={github} />
                <input name="resumeLink" onChange={handleChange} className='profile-input' type="text" placeholder='Resume Link' value={resumeLink} />
            </div>
            <h3>Your Introduction</h3>
            <div className='profile-form-introduction-container'>
                {Object.entries(introduction).map((item) => {
                    const [key, value] = item;
                    return <div key={key} className='profile-form-single-input'>
                        <input onChange={handleIntroChange} name={key} className='profile-input' placeholder='Enter your line' value={value} />
                        <button className='profile-input-delete-button' onClick={(e) => deleteIntroLine(e, key)}><CloseIcon /></button>
                    </div>
                })}
                <div className='profile-form-add-intro-line'><button onClick={addIntroLine}>Add line</button></div>
            </div>
        </>
    )
}

export default ProfileFormPersonalDetails