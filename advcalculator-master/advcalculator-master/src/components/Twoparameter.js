import React from 'react'
import { useState } from 'react';
const Twoparameter = () => {
  const [first,setfirst]=useState('')
  const [second,setsecond]=useState('')
  const [res,setres]=useState('');
  class Date 
  { 
      constructor(d,m,y) 
      { 
          this.d = d; 
              this.m = m; 
              this.y = y; 
      } 
  } 
  let monthDays=[31, 28, 31, 30, 31, 30, 
                              31, 31, 30, 31, 30, 31]; 
                              
  function countLeapYears(d) 
  { 
      let years = d.y; 
          if (d.m <= 2) 
          { 
              years--; 
          } 
          return Math.floor(years / 4) - Math.floor(years / 100) + 
          Math.floor(years / 400); 
  } 
     
  function getDifference(dt1,dt2) 
  { 
  
          let n1 = dt1.y * 365 + dt1.d; 
     
          for (let i = 0; i < dt1.m - 1; i++) 
          { 
              n1 += monthDays[i]; 
          } 
     
          n1 += countLeapYears(dt1); 
     
          let n2 = dt2.y * 365 + dt2.d; 
          for (let i = 0; i < dt2.m - 1; i++) 
          { 
              n2 += monthDays[i]; 
          } 
          n2 += countLeapYears(dt2); 
     
          return (n2 - n1); 
  } 
    
   
  function DayCount(){
    var dateStr=first;
    let d1 = parseInt(dateStr.substr(0, 2));
    let m1 = parseInt(dateStr.substr(3, 2));
    let y1 = parseInt(dateStr.substr(6, 4));
    dateStr=second;
    let d2 = parseInt(dateStr.substr(0, 2));
    let m2 = parseInt(dateStr.substr(3, 2));
    let y2 = parseInt(dateStr.substr(6, 4));
    let dt1 = new Date(d1, m1, y1); 
    let dt2 = new Date(d2, m2, y2);
    var ans=getDifference(dt1, dt2); 
    if(ans<0) ans=ans*(-1);
    console.log(ans);
    setres(ans)
   
   
  }
  return (
    <div>
       <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <input
          type="text"
          style={{border:'solid 1.5px',borderRadius:'11px'}}
          placeholder="formate dd-mm-yyyy"
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <input
          type="text"
          style={{border:'solid 1.5px',borderRadius:'11px'}}
          placeholder="formate dd-mm-yyyy"
          value={second}
          onChange={(e) => {
            setsecond(e.target.value);
          }}
        />
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'10px',}} >
        <button  onClick={()=>{DayCount()}} style={{borderRadius:'10px',border:'solid 3px',padding:'1px',backgroundColor:'orange',width:'200px'}} >Find No.of days 
        </button>
      </div >
      <div style={{display:'flex',justifyContent:'center',color:'magenta'}}><span>{(res)? `No of Days between dates : ${res}`  :''}</span></div>
      <div className=" container use_guid"  style={{color:'goldenrod'}}>
      <h2 class="text-center" style={{color:'red',marginTop:'50px'}}>Use Guidelines</h2>
     
      <p style={{color:'blue',fontSize:'30px',marginTop:'20px'}}>Find No. (number) of days </p>
      <span>
      This button help to find the number day between days , i.e day count between : [12-02-2024 ] and [15-02-2024] is 3 days.<br></br>
      It take two input like starting date(20-02-2023) and ending date(25-12-2023) 
      </span>

      </div>
    </div>
  )
}

export default Twoparameter
