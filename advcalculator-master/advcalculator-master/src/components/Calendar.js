import React, { useState } from "react";
import NewCalendar from "./NewCalendar";
import Twoparameter from "./Twoparameter";

const Calendar = () => {
  const [data, setdata] = useState();
  const [ans, setans] = useState();
  const [discalender, setdiscalendar] = useState('none');
  const [disdaycount,setdisdaycount]=useState('none')
  const [dateformate,setdateformate]=useState('01-01-2020');
 function daycount(){
  if(disdaycount=='none')
    setdisdaycount('flex')
   else setdisdaycount('none')
 }
function showcalendar(){
  try {
    if(discalender=='none')
      setdiscalendar('flex')
     else setdiscalendar('none')
       var dateStr=data;
       let d = parseInt(dateStr.substr(0, 2));
       let m = parseInt(dateStr.substr(3, 2));
       let y = parseInt(dateStr.substr(6, 4));
       setdateformate(`${m}-${d}-${y}`);
  } catch (error) {
    return setdateformate('01-01-2024');
  }
  if(discalender=='none')
   setdiscalendar('flex')
  else setdiscalendar('none')
    var dateStr=data;
    let d = parseInt(dateStr.substr(0, 2));
    let m = parseInt(dateStr.substr(3, 2));
    let y = parseInt(dateStr.substr(6, 4));
    setdateformate(`${m}-${d}-${y}`);
}
  return (
    <div className="container">
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <input
          type="text"
          style={{border:'solid 1.5px',borderRadius:'11px'}}
          placeholder="formate dd-mm-yyyy"
          value={data}
          onChange={(e) => {
            setdata(e.target.value);
          }}
        />
      </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px',}} >
            <button  onClick={()=>{showcalendar()}} style={{borderRadius:'10px',border:'solid 3px',padding:'1px',backgroundColor:'orange',width:'200px'}} >{discalender==='none'?"Show Calender":"Hide Calender"} </button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px',}} >
            <button  onClick={()=>{daycount()}} style={{borderRadius:'10px',border:'solid 3px',padding:'1px',backgroundColor:'orange',width:'200px'}} >{disdaycount==='none'?"Show day count":"Hide day count"} </button>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{display:disdaycount}}> 
          <Twoparameter/>
      </div>
        </div>
        
      <div style={{display:discalender}}> 
      <NewCalendar  dateformate={dateformate}/>
      </div>
      <div className=" container use_guid"  style={{color:'goldenrod'}}>
      <h2 class="text-center" style={{color:'red',marginTop:'50px'}}>Use Guidelines</h2>
      <p style={{color:'blue',fontSize:'30px',marginTop:'20px'}}>Show Calendar </p>
      <span>
        Show calendar button help to display ,  full month calender view of input date like(12-02-2024) it display month calender of february 2024.
      </span>
      <p style={{color:'blue',fontSize:'30px',marginTop:'20px'}}>Show Day count </p>
      <span>
      Show Day count button help to find the number day between days , i.e day count between : [12-02-2024 ] and [15-02-2024] is 3 days.<br></br>
      It take two input like starting date(20-02-2023) and ending date(25-12-2023) 
      </span>

      </div>
    </div>
  );
};

export default Calendar;
