import React, { useContext, useState } from 'react'
import "../css/ProfileFormWorkExperience.css"
import { DataContext } from '../pages/Profile'
import Card from './Card'
import { genrateUniqueId } from "../utils/generateId"
import WorkExperienceCardModal from './WorkExperienceCardModal'

const ProfileFormWorkExperience = () => {

  const { data, setData } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false)

  const { workExperience } = data

  const deleteItem = (e, id) => {
    e.preventDefault()
    let temp = data.workExperience;
    delete temp[id]
    setData({ ...data, workExperience: temp })
  }

  const editItem = (e, id, newData) => {
    e.preventDefault()
    let temp = data.workExperience;
    temp[id] = newData
    setData({ ...data, workExperience: temp })
  }

  const addExperience = (e, newData) => {
    e.preventDefault()
    let temp = data.workExperience;
    let uuid = genrateUniqueId()
    temp[`line${uuid}`] = newData
    setData({ ...data, workExperience: temp })
  }

  const addExperienceClicked = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  return (
    <>
      {showModal && <WorkExperienceCardModal addExperience={addExperience} closeModal={() => setShowModal(false)} />}
      <h3>Work Experience</h3>
      <div className='profile-form-work-experience-container'>
        {Object.entries(workExperience).map((item) => {
          const [key, value] = item
          const { position, companyName, period, about } = value
          return <Card key={key} id={key} editItem={editItem} deleteItem={deleteItem} title={position} subTitle={companyName} period={period} about={about} />
        })}
      </div>
      <div className='profile-form-add-experience'><button onClick={addExperienceClicked}>Add Experience</button></div>
    </>
  )
}

export default ProfileFormWorkExperience