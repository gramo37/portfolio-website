import React, { useRef, useState, useContext } from 'react'
import { useFormik } from 'formik';
import "../css/Contact.css"
import { contactMeSchema } from '../schema';
import emailjs from '@emailjs/browser';
import Loader from "./Loader"
import { UserContext } from './App';
import { red } from '../assets/colors';

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: ""
}

const Contact = () => {

  const formRef = useRef();

  const { showMyAlert } = useContext(UserContext)

  const [loading, setLoading] = useState(false)
  const [sendMail, setSendMail] = useState(true)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: contactMeSchema,
    onSubmit: (values, {resetForm}) => {
      if (!sendMail) {
        showMyAlert("Kindly wait for 10 mins", red)
        return
      }
      resetForm({values: ""})
      setLoading(true)
      emailjs.sendForm('service_npzjtpg', 'template_v1582qq', formRef.current, 'uF6OeJEqNkVC7B5mC')
        .then((result) => {
          setLoading(false)
          alert("Your message has been sent");
          setSendMail(false)
          setTimeout(() => {
            setSendMail(true)
          }, 60 * 10 * 1000);
        }, (error) => {
          setLoading(false)
          alert("Something went wrong");
        }).catch((error) => console.log(error));
    }
  })

  return (
    <div className='contact-container'>
      <h1>Contact Me</h1>
      <div>
        <form ref={formRef} className='contact-form' onSubmit={handleSubmit}>
          <input
            id="firstName"
            name="firstName"
            placeholder="Your firstname"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.firstName && touched.firstName ? <p className='form-error'>{errors.firstName}</p> : null}

          <input
            id="lastName"
            name="lastName"
            placeholder="Your lastname"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.lastName && touched.lastName ? <p className='form-error'>{errors.lastName}</p> : null}

          <input
            id="email"
            name="email"
            placeholder="Your Email address"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}

          <input
            id="subject"
            name="subject"
            placeholder="Your subject of this message"
            type="text"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.subject && touched.subject ? <p className='form-error'>{errors.subject}</p> : null}

          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>

          {errors.message && touched.message ? <p className='form-error'>{errors.message}</p> : null}

          <button type="submit">{loading ? <Loader /> : "Send Message"}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact