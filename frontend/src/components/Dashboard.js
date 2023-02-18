import React, { useContext } from 'react'
import "../css/Dashboard.css"
import { UserContext } from './App';
import image from "../assets/images/homeBackGroundImage.jpg"
import Links from './Links';
import { white } from '../assets/colors';

const Dashboard = () => {

    const { name, profession, profilePhoto } = useContext(UserContext) || {}

    return (
        <div className='dashboard-container'>
            <div id="dashboard-overlay" style={{ backgroundImage: `url(${image})` }}></div>
            <div className='dashboard-info-container'>
                <div className='dashboard-profile-photo' style={{ backgroundImage: `url(${profilePhoto})` }}></div>
                <div className='dashboard-profile-name-container'>
                    <div className='dashboard-profile-name-line'></div>
                    <div className='dashboard-profile-name'><span>{name}</span></div>
                    <div className='dashboard-profile-name-line'></div>
                </div>
                <div className='dashboard-profession'><span>{profession}</span></div>
                <Links size={36} color={white}/>
            </div>
        </div>
    )
}

export default Dashboard