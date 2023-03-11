import React, { useContext, useState } from 'react'
import "../css/ProfileFormEducation.css"
import { DataContext } from '../pages/Profile'
import Card from './Card'
import EducationCardModal from './EducationCardModal'
import { genrateUniqueId } from "../utils/generateId"

const ProfileFormEducation = () => {

  const { data, setData } = useContext(DataContext)

  const [showModal, setShowModal] = useState(false)

  const { education } = data

  const deleteItem = (e, id) => {
    e.preventDefault()
    let temp = data.education;
    delete temp[id]
    setData({ ...data, education: temp })
  }

  const editItem = (e, id, newData) => {
    e.preventDefault()
    let temp = data.education;
    temp[id] = newData
    setData({ ...data, education: temp })
  }

  const addEducationClicked = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const addEducation = (e, newData) => {
    e.preventDefault()
    let temp = data.education;
    let uuid = genrateUniqueId()
    temp[`line${uuid}`] = newData
    setData({ ...data, education: temp })
  }

  return (
    <>
      {showModal && <EducationCardModal addEducation={addEducation} closeModal={() => setShowModal(false)} />}
      <h3>Educational Details</h3>
      <div className='profile-form-education-container'>
        {/* <Card title={}/> */}
        {Object.entries(education).map((item) => {
          const [key, value] = item
          const { degreeName, collegeName, period, about } = value
          return <Card key={key} id={key} title={degreeName} subTitle={collegeName} period={period} about={about} deleteItem={deleteItem} editItem={editItem} />
        })}
      </div>
      <div className='profile-form-add-education'><button onClick={addEducationClicked}>Add Education</button></div>
    </>
  )
}

export default ProfileFormEducation