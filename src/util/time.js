export const parseDate = (date) => {
  const dateArr = date.split('T')
  return dateArr[0].trim()
}