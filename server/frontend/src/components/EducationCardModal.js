import React, { useState } from 'react'
import "../css/CardModal.css"
import CloseIcon from '@mui/icons-material/Close';
import { genrateUniqueId } from "../utils/generateId"
import { convertDate } from '../utils/convertDate';

const EducationCardModal = ({ addEducation, closeModal }) => {

    const [currentEducation, setCurrentEducation] = useState(false)

    const [modalData, setModalData] = useState({
        degreeName: "",
        collegeName: "",
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
        setCurrentEducation(!currentEducation)
    }

    const submitData = (e) => {
        e.preventDefault()
        let period = !currentEducation ? convertDate(modalData.fromDate) + " " + convertDate(modalData.toDate) : convertDate(modalData.fromDate) + " - Present";
        let temp = modalData
        delete temp.fromDate
        delete temp.toDate
        temp.period = period
        addEducation(e, temp)
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
                <h2>Education</h2>
                <div className='card-modal-close-btn' onClick={closeModal}><CloseIcon /></div>
                <form className='card-modal-form'>
                    <span className='card-modal-label'>Degree Name</span>
                    <input onChange={handleChange} placeholder='Enter Degree Name' name='degreeName' value={modalData.degreeName} />
                    <span className='card-modal-label'>College Name</span>
                    <input onChange={handleChange} placeholder='Enter College Name' name='collegeName' value={modalData.collegeName} />
                    <div className='card-modal-date-container'>
                        <span className='card-modal-label'>From Date</span>
                        <input type="month" onChange={handleChange} placeholder='From' name='fromDate' value={modalData.fromDate} />
                        <span>Is this course going on ?</span><input type="checkbox" value={currentEducation} onClick={toggleCheckBox} />
                        {!currentEducation && <><span className='card-modal-label'>To Date</span>
                            <input type="month" onChange={handleChange} placeholder='To' name='toDate' value={modalData.toDate} /></>}
                    </div>
                    <div className='card-modal-responsibility-container'>
                        <span className='card-modal-label'>Achievements</span>
                        {Object.entries(modalData.about).map((item) => {
                            const [key, value] = item
                            return <div className='card-modal-responsibility'>
                                <input name={key} placeholder='Add your achievements' value={value} onChange={AboutChangeHandle} />
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

export default EducationCardModal