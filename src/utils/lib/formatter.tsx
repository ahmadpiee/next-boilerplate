import moment from 'moment'

// Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}
export const currentYear = new Date().getFullYear()
export const currentMonth = getCurrentMonth()
export const currentDay = getCurrentDay()
export const currentDate = `${currentMonth}-${currentDay}-${currentYear}`

// currency
export const CurrencyUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})
export const CurrencyIDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export const FormatDate = (date: Date, format: string = 'llll') => {
  const newDate = moment(date)
  const formattedDate = newDate.format(format)
  return formattedDate
}
