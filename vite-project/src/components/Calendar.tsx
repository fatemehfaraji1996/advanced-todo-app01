import "react-datepicker/dist/react-datepicker.css";


import { useState } from "react";
import {DatePicker} from 'react-datepicker'


  const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date | null) => setSelectedDate(date)}
    />
  );

  
};

export default Calendar
