import React, { createContext, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HOST } from '../config/config';
import "../css/App.css"
// import useFetch from '../hooks/useFetch';
import ProtectedRoute from './ProtectedRoute';
import Shimmer from './Shimmer';

const Home = React.lazy(() => import("../pages/Home"))
const Login = React.lazy(() => import("../pages/Login"))
const Profile = React.lazy(() => import("../pages/Profile"))
const Alert = React.lazy(() => import("./Alert"))

export const UserContext = createContext();

// This data will later come from an API call
const data = require("../data/prasanna-profile.json")

const App = () => {

  // const { loading, data, error } = useFetch(`${HOST}/api/v1/getResumeDetails`)

  const showMyAlert = (alert, color) => {
    showAlert(true)
    showAlertName(alert)
    setAlertColor(color)
    setTimeout(() => {
      showAlert(false)
    }, 5000);
  }

  const [auth, setAuth] = useState(false)
  const [alert, showAlert] = useState(false)
  const [alertName, showAlertName] = useState("")
  const [alertColor, setAlertColor] = useState("")

  // if (error) return <div>Something went wrong</div>

  // if (loading) return <Shimmer />

  return (
    <UserContext.Provider value={{ ...data, auth, setAuth, showMyAlert }}>
      <BrowserRouter>
        <Alert alertName={alertName} showAlert={alert} alertColor={alertColor} />
        <Suspense fallback={<Shimmer />}>
          <Routes>
            <Route exact path="/" element={<Home key={document.location.href} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<ProtectedRoute Component={<Profile />} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
