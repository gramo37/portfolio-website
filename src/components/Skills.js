import React, { useContext } from 'react'
import "../css/Skills.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { UserContext } from "./App"
import { orange, white, lightGray } from "../assets/colors"

ChartJS.register(ArcElement, Tooltip, Legend);

const Skills = () => {

  const { skills } = useContext(UserContext)

  return (
    <div className='skills-container'>
      <h1>Skills</h1>
      <div className='skills-container-information'>
        {skills.map((item, index) => {
          return <div key={index} className='skills-info-item'>
            <span className='skills-info-item-label'>{item.name}</span>
            <Doughnut data={
              {
                labels: [],
                datasets: [
                  {
                    label: item.name,
                    data: [item.proficiency, 100 - item.proficiency],
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