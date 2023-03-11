const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const convertDate = (givenDate) => {
    if(givenDate.length === 0) return ""
    let newDate = ""
    let month = parseInt(givenDate.substring(5, 7))
    let year = parseInt(givenDate.substring(0, 4))
    newDate = `${months[month-1]} ${year}`
    return newDate
}