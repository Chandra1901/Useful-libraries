import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePick =  () =>  {

  const [selectedDate, setSelectedDate] = useState(null)
  return (
    
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        placeholderText={'dd/mm/yyyy'}
        // minDate={new Date()}
        // maxDate={new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        scrollableYearDropdown
        isClearable
      />
  )
}

export default DatePick