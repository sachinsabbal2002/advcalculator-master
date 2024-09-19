import React, { useState } from 'react'
import {fraction, evaluate, round } from "mathjs";
const Fracexpression = () => {
    const [data,setdata]=useState(0);
    const [res,setres]=useState(0)
    const [enterclr,setenterclr]=useState();
    const [clearclr,setclearclr]=useState();
    function handleEnter(){
      try {
        setenterclr('red'); setTimeout(() => {
          setenterclr('white')
      }, 200);
      if(data==0) return 
      const expression = data;
      const result = evaluate(expression);
      const fractionR = fraction(result);
      // console.log("fraction res",fractionR)
      var num=fractionR.n;
      var deno=fractionR.d;
      var fans=num+'/'+deno;
      setres(fans)
      return ;
        
      } catch (error) {
        setres("Please enter valid expression as per use guildlines")
      }
       
        
    }
  return (
    <div style={{color:'pink'}}>
      <h4 style={{textAlign:'center'}}> Fraction Expression Evaluation</h4>
      <br></br>
      <textarea class="form-control" placeholder="input  formate 4/2+5/665-6/1" aria-label="With textarea" id="inputid1" style={{ borderRadius:'10px',textAlign:'center'}}
          onChange={(e) => {
            setdata(e.target.value);
            setres(0)
          }}
          type="text"
          
          value={data}></textarea>
          <div style={{display:'flex',justifyContent:'center',gap:'7px', marginTop:'15px'}}>
            <button onClick={()=>{handleEnter();}} style={{border:'solid purple',borderRadius:'4px',backgroundColor:enterclr}}>Enter</button>
            <button onClick={()=>{setdata(0);setres(0); setclearclr('red') ; setTimeout(() => {
                setclearclr('white')
            }, 200);}} style={{border:'solid purple',borderRadius:'4px',backgroundColor:clearclr}}>Clear</button>
            </div>
          <h4 style={{textAlign:'center'}} >ANS: {res}</h4>
          <div className='container'>
          <h2 class="text-center" style={{color:'red',marginTop:'50px'}}>Use Guidelines</h2>

          <p>
            <b>1. </b> Enter the fraction expression in the input field. For example
            <b> 4/2+5/6-6/1 - 78*4</b>.
          </p>
          </div>
    </div>
  )
}

export default Fracexpression
