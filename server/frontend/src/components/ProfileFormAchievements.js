import React, {useContext} from 'react'
import { DataContext } from '../pages/Profile'
import EducationCardModal from "../components/EducationCardModal"
import Card from './Card'

const ProfileFormAchievements = () => {
    const {data} = useContext(DataContext)
    console.log(data)
    const deleteItem = () => {

    }
  return (
    <div>
        <h1>My Achievements</h1>
        <div>
            {Object.entries(data?.achievements).map((item, index) => {
                const [line, value] = item
                const {achievementName, desc} = value || {}
                return <Card id={line} title={achievementName} subTitle={desc} period="" about="" deleteItem={deleteItem} />
            })}
            
        </div>
    </div>
  )
}

export default ProfileFormAchievements