export const FormatDate = (date) => {
    const splitDate = date.split('T')
    const newDate = splitDate[0]
    const splitCalendar = newDate.split('-')
    const year = splitCalendar[0]
    const month = splitCalendar[1]
    const day = splitCalendar[2]
    return `${month}-${day}-${year}`
}