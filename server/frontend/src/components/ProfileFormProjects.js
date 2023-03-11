import React, { useState, useContext } from 'react'
import PhotoCard from './PhotoCard'
import "../css/ProfileFormProjects.css"
import { DataContext } from '../pages/Profile';
import ProjectCardModal from './ProjectCardModal';

const ProfileFormProjects = () => {

  const { data, setData } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false)

  const { projects } = data

  const addProjectClicked = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  return (
    
    <>
      {showModal && <ProjectCardModal />}
      <h3>Projects</h3>
      <div className='profile-form-projects-container'>
        {Object.entries(projects).map((item) => {
          const [key, value] = item
          const { name, link, about, image } = value
          return <PhotoCard key={key} name={name} link={link} image={image} about={about} />
        })}
      </div>
      <div className='profile-form-add-project'><button onClick={addProjectClicked}>Add Project</button></div>
    </>
  )
}

export default ProfileFormProjects