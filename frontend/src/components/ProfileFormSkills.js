import React, { useContext } from 'react'
import "../css/ProfileFormSkills.css"
import { DataContext } from "../pages/Profile"
import { genrateUniqueId } from "../utils/generateId"

const ProfileFormSkills = () => {

    const { data, setData } = useContext(DataContext);

    const { skills } = data

    const deleteSkill = (e, skillKey) => {
        e.preventDefault()
        let temp = skills
        delete temp[skillKey]
        setData({ ...data, skills: temp })
    }

    const handleProficiencyChange = (e) => {
        let temp = skills[e.target.name]
        temp.proficiency = parseInt(e.target.value)
        setData({ ...data, skills: { ...skills, [e.target.name]: temp } });
    }

    const addSkill = (e) => {
        e.preventDefault()
        let temp = skills
        let uuid = genrateUniqueId()
        temp[`skill${uuid}`] = { name: "", proficiency: 50 }
        setData({ ...data, skills: temp })
    }
    
    const changeName = (e, skillName) => {
        let temp = skills
        temp[skillName].name = e.target.value
        setData({ ...data, skills: temp })
    }

    return (
        <>
            <h3>Skills</h3>
            <div className='profile-form-skills-container'>
                {Object.entries(skills).map((item) => {
                    const [key, value] = item
                    return <div className='profile-form-skill'>
                        <label><input onChange={(e) => changeName(e, key)} style={{ border: 'none', outline: 'none', width: '65%' }} value={value.name} placeholder='Enter Skill'/></label>
                        <div class="slidecontainer">
                            <input name={key} onChange={handleProficiencyChange} type="range" min="1" max="100" value={value.proficiency} class="slider" id="myRange" />
                        </div>
                        <button onClick={(e) => deleteSkill(e, key)}>-</button>
                    </div>
                })}
            </div>
            <div className='profile-form-add-skill'>
                <button onClick={addSkill}>Add Skill</button>
            </div>
        </>
    )
}

export default ProfileFormSkills