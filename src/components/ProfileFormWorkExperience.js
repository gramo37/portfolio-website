import React from 'react'
import "../css/ProfileFormWorkExperience.css"
import Card from './Card'

const ProfileFormWorkExperience = () => {
  return (
    <>
        <h3>Work Experience</h3>
        <div className='profile-form-work-experience-container'>
          <Card title="Assitant System Engineer" subTitle="TCS" period="Sept 2021 - Present" about={["Learned HTML, CSS and JS", "Hello Worl Learned HTML, CSS and JS d   Learned HTML, CSS and JS"]}/>
          <Card title="Assitant System Engineer" subTitle="TCS" period="Sept 2021 - Present" about={["Learned HTML, CSS and JS Learned HTML, CSS and JS", "Hello World"]}/>
          <Card title="Assitant System Engineer" subTitle="TCS" period="Sept 2021 - Present" about={["Learned HTML, CSS and JS", "Hello World"]}/>
          <Card title="Assitant System Engineer" subTitle="TCS" period="Sept 2021 - Present" about={["Learned HTML, CSS and JS", "Hello World Learned HTML, CSS and JSdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"]}/>
        </div>
        <div className='profile-form-add-experience'><button>Add Experience</button></div>
    </>
  )
}

export default ProfileFormWorkExperience