import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function NewCalendar(props) {
    // this is code to dispaly month of that date
  return (
    <div className='app'>
      <div style={{display:'flex',justifyContent:'center' ,marginTop:'5px'}}>
        <Calendar  value={props.dateformate} />
      </div>
    </div>
  );
}

export default NewCalendar;