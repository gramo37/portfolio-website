import React, { useState, useContext } from 'react'
import "../css/LoginPage.css"
import { UserContext } from './App'
import { Link, useNavigate } from "react-router-dom"
// import { username, password as pass } from '../config/config'
// import { red } from '../assets/colors'

const LoginPage = () => {

    const [secretCode, setSecretCode] = useState("")
    const [password, setPassword] = useState("")

    // const { setAuth, showMyAlert } = useContext(UserContext)

    // const navigate = useNavigate()

    const handleSubmit = (e) => {
        // e.preventDefault()
        // if (secretCode === username && password === pass) { 
        //     setAuth(true)
        //     navigate("/profile")
        // }
        // else {
        //     showMyAlert("Please enter correct login credentials", red)
        // }
    }

    return (
        <>
        <div className='login-page-container'>
            <form className='login-form-container' onSubmit={handleSubmit}>
                <input placeholder='Secret Code' value={secretCode} onChange={(e) => { setSecretCode(e.target.value) }} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit'>Submit</button>
                {/* <button type='submit'>Home Page</button> */}
                <Link to="/">Home Page</Link>
            </form>
        </div>
        </>
    )
}

export default LoginPage