import React from 'react'
import "../css/Alert.css"

const Alert = ({alertName, showAlert, alertColor}) => {
    
  return (
    <div style={{backgroundColor: alertColor}} className={`alert-container ${showAlert ? "show-alert" : "hide-alert"}`}>
        {alertName}
    </div>
  )
}

export default Alert