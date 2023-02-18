import React, { useState } from 'react'
import "../css/CardModal.css"
import CloseIcon from '@mui/icons-material/Close';
import { genrateUniqueId } from "../utils/generateId"

const CardModal = ({ addExperience, closeModal }) => {

    const [currentCompany, setCurrentCompany] = useState(false)

    const [modalData, setModalData] = useState({
        position: "",
        companyName: "",
        fromDate: "",
        toDate: "",
        about: {
            line1: ""
        }
    })

    const handleChange = (e) => {
        setModalData({ ...modalData, [e.target.name]: e.target.value })
    }

    const toggleCheckBox = () => {
        setCurrentCompany(!currentCompany)
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log(modalData.fromDate, modalData.toDate)
        let period = !currentCompany ? modalData.fromDate + " " + modalData.toDate : modalData.fromDate + " - Present";
        let temp = modalData
        delete temp.fromDate
        delete temp.toDate
        temp.period = period
        console.log(temp)
        addExperience(e, temp)
        closeModal()
    }

    const addAboutLine = (e) => {
        e.preventDefault()
        let temp = modalData.about
        let uuid = genrateUniqueId()
        while (uuid in temp) uuid = genrateUniqueId()
        temp[`line${uuid}`] = e.target.value
        setModalData({ ...modalData, about: temp })
    }

    const deleteAboutLine = (e, lineId) => {
        e.preventDefault()
        let temp = modalData.about;
        delete temp[lineId]
        setModalData({ ...modalData, about: temp })
    }

    const AboutChangeHandle = (e) => {
        let temp = modalData.about
        temp[e.target.name] = e.target.value
        setModalData({ ...modalData, about: temp })
    }

    return (
        <div className='card-modal'>
            <div className='card-modal-container'>
                <h2>Work Experience</h2>
                <div className='card-modal-close-btn' onClick={closeModal}><CloseIcon /></div>
                <form className='card-modal-form'>
                    <span className='card-modal-label'>Position</span>
                    <input onChange={handleChange} placeholder='Enter Position' name='position' value={modalData.position} />
                    <span className='card-modal-label'>Company Name</span>
                    <input onChange={handleChange} placeholder='Enter Company Name' name='companyName' value={modalData.companyName} />
                    <div className='card-modal-date-container'>
                        <span className='card-modal-label'>From Date</span>
                        <input type="month" onChange={handleChange} placeholder='From' name='fromDate' value={modalData.fromDate} />
                        <span>Is this your Current Company ?</span><input type="checkbox" value={currentCompany} onClick={toggleCheckBox} />
                        {!currentCompany && <><span className='card-modal-label'>To Date</span>
                            <input type="month" onChange={handleChange} placeholder='To' name='toDate' value={modalData.toDate} /></>}
                    </div>
                    <div className='card-modal-responsibility-container'>
                        <span className='card-modal-label'>Responsibilies</span>
                        {Object.entries(modalData.about).map((item) => {
                            const [key, value] = item
                            return <div className='card-modal-responsibility'>
                                <input name={key} placeholder='Add your responsibilities' value={value} onChange={AboutChangeHandle} />
                                <span onClick={(e) => deleteAboutLine(e, key)}><CloseIcon /></span>
                            </div>
                        })}
                        <button onClick={addAboutLine}>Add Line</button>
                    </div>
                    <button className='card-modal-submit-button' onClick={submitData}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CardModal