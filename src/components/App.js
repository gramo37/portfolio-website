import React, { createContext, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/App.css"
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

  return (
    <UserContext.Provider value={{ ...data, auth, setAuth, showMyAlert }}>
      <BrowserRouter>
        <Alert alertName={alertName} showAlert={alert} alertColor={alertColor} />
        <Suspense fallback={<Shimmer />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<ProtectedRoute Component={<Profile />} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App