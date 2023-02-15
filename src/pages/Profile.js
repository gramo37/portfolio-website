import React from 'react'
import ProfileFormEducation from '../components/ProfileFormEducation'
import ProfileFormPersonalDetails from '../components/ProfileFormPersonalDetails'
import ProfileFormProjects from '../components/ProfileFormProjects'
import ProfileFormSkills from '../components/ProfileFormSkills'
import ProfileFormWorkExperience from '../components/ProfileFormWorkExperience'
import "../css/Profile.css"

const Profile = () => {
  return (
    <div className='profile-container'>
      <h1>Profile</h1>
      <form className='profile-form-container'>
        <ProfileFormPersonalDetails />
        <ProfileFormSkills />
        <ProfileFormWorkExperience />
        <ProfileFormEducation />
        <ProfileFormProjects />
        <div className='profile-form-submit-button'><button type='submit'>Submit Details</button></div>
      </form>
    </div>
  )
}

export default Profile