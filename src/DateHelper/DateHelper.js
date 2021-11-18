class DateHelper {
  static trimDate (dateStr) {
    const dateArr = (
      dateStr // Tue Nov 09 2021
        .split(' ') // ['Tue', 'Nov', '09', '2021']
        .slice(1) // ['Nov', '09', '2021']
    )

    dateArr[1] = dateArr[1] + ',' // ['Nov', '09,', '2021']
    return dateArr.join(' ')
  }
}

export default DateHelper
