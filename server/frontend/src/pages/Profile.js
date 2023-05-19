import React, { useState, useContext } from 'react'
import ProfileFormEducation from '../components/ProfileFormEducation'
import ProfileFormPersonalDetails from '../components/ProfileFormPersonalDetails'
import ProfileFormProjects from '../components/ProfileFormProjects'
import ProfileFormSkills from '../components/ProfileFormSkills'
import ProfileFormWorkExperience from '../components/ProfileFormWorkExperience'
import "../css/Profile.css"
import { UserContext } from "../components/App"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Shimmer from '../components/Shimmer'
import { HOST } from '../config/config'
import ProfileFormAchievements from '../components/ProfileFormAchievements'

export const DataContext = React.createContext();

const Profile = () => {

  const currentData = useContext(UserContext)

  const [data, setData] = useState(currentData)

  const [loading, setLoading] = useState(false)

  const navigation = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    // Make a API request to change user.json
    // setLoading(true)
    // axios.put(`${HOST}/api/v1/editResumeDetails`, data).then((res)=>{
    //   setLoading(false)
    //   navigation("/")
    // }).catch((error) => {
    //   setLoading(false)
    //   console.log(error)
    // })
  }

  if(loading) return <Shimmer />

  return (
    <div className='profile-container'>
      <h1>Profile</h1>
      <DataContext.Provider value={{ data, setData }}>
        <form className='profile-form-container'>
          <ProfileFormPersonalDetails />
          <ProfileFormSkills />
          <ProfileFormWorkExperience />
          <ProfileFormEducation />
          {/* Add Achievements */}
          <ProfileFormAchievements />
          <ProfileFormProjects />
          <div className='profile-form-submit-button'><button type='submit' onClick={handleSubmit}>Submit Details</button></div>
        </form>
      </DataContext.Provider>
    </div>
  )
}

export default Profile