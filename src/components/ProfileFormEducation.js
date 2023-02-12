import React from 'react'
import "../css/ProfileFormEducation.css"
import Card from './Card'

const ProfileFormEducation = () => {
  return (
    <>
        <h3>Educational Details</h3>
        <div className='profile-form-education-container'>
          <Card title="Scaler" subTitle="A Structured and Flexible Online Program" period="Apr 2022 - Present" about={["Solved more than 400 DSA Problems", "Currently learning about DBMS, OS and Computer Networking.", "Will be learning System Design"]}/>
          <Card title="Scaler" subTitle="A Structured and Flexible Online Program" period="Apr 2022 - Present" about={["Solved more than 400 DSA Problems", "Currently learning about DBMS, OS and Computer Networking.", "Will be learning System Design"]}/>
          <Card title="Scaler" subTitle="A Structured and Flexible Online Program" period="Apr 2022 - Present" about={["Solved more than 400 DSA Problems", "Currently learning about DBMS, OS and Computer Networking.", "Will be learning System Design"]}/>
          <Card title="Scaler" subTitle="A Structured and Flexible Online Program" period="Apr 2022 - Present" about={["Solved more than 400 DSA Problems", "Currently learning about DBMS, OS and Computer Networking.", "Will be learning System Design"]}/>
        </div>
        <div className='profile-form-add-education'><button>Add Education</button></div>
    </>
  )
}

export default ProfileFormEducation