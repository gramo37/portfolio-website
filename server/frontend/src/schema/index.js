import * as Yup from "yup";

export const contactMeSchema = Yup.object({
    firstName: Yup.string().min(2, "First Name cannot be less than 2 characters").max(30, "First Name cannot exceed 30 characters").required("Please enter your first name"),
    lastName: Yup.string().min(2, "Last Name cannot be less than 2 characters").max(30, "Last Name cannot exceed 30 characters").required("Please enter your last name"),
    email: Yup.string().email("Please enter a Valid Email").required("Please enter your email"),
    subject: Yup.string().min(10, "Subject cannot be less than 10 characters").max(50, "Subject cannot exceed 50 characters").required("Please enter the subject"),
    message: Yup.string().min(10, "Message cannot be less than 10 characters").max(1000, "Message cannot exceed 1000 characters").required("Please enter the message")
})