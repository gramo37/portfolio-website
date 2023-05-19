import React, { useContext, useEffect } from 'react'
import { UserContext } from './App'
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ Component }) => {
    const { auth } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        // if(!auth) navigate("/login")
    }, [])


    // if (!auth) {
    //     return <div>Please login to use this utility</div>
    // }


    return (
        <div>
            {Component}
        </div>
    )

}

export default ProtectedRoute