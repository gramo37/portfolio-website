import React, { useContext } from 'react'
import "../css/Skills.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { orange, white, lightGray } from "../assets/colors"
import { UserContext } from './App';

ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {

  const { skills } = useContext(UserContext) || {}

  return (
    <div className='skills-container'>
      <h1>Skills</h1>
      <div className='skills-container-information'>
        {Object.entries(skills)?.map((item, index) => {
          const [key, value] = item
          return <div key={key} className='skills-info-item'>
            <span className='skills-info-item-label'>{value.name}</span>
            <Doughnut data={
              {
                labels: [],
                datasets: [
                  {
                    label: item.name,
                    data: [value.proficiency, 100 - value.proficiency],
                    backgroundColor: [
                      orange,
                      lightGray,
                    ],
                    borderColor: [
                      white,
                      white,
                    ],
                    borderWidth: 0.5,
                    cutout: 60
                  }
                ]
              }
            } /></div>
        })}
      </div>
    </div>
  )
}

export default Skills