import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { round } from 'mathjs';
const Statics = () => {
    const [data,setdata]=useState(0);
    const [res,setres]=useState(0)
    let xi = [];
    let fi = [];
    function fixidata(){
        let i = 0;
        while (i < data.length) {
            let x = '';
            // Extract xi until we find '*' or ','
            while (i < data.length && data[i] !== '*' && data[i] !== ',') {
                x += data[i];
                i++;
            }
            xi.push(parseFloat(x)); // Convert string to number and push to xi array
            if (i < data.length && data[i] === '*') {
                i++; // Skip the '*' character
                let f = '';
                // Extract fi until we find ','
                while (i < data.length && data[i] !== ',') {
                    f += data[i];
                    i++;
                }
                fi.push(parseFloat(f)); // Convert string to number and push to fi array
            } else {
                fi.push(1); // Default frequency of 1 if no '*' is found
            }
    
            i++; // Move to the next character after ','
        }
    
    }
    function findmean() {
        if(data===0) {
            setres(0)
            return
        }
      fixidata();
        // Calculate the mean (Σxi*fi / Σfi)
        let sumXiFi = 0;
        let sumFi = 0
        for (let j = 0; j < xi.length; j++) {

            sumXiFi += xi[j] * fi[j];
            sumFi += fi[j];
        }
        const mean = round(sumXiFi / sumFi,3) ;
        setres(mean);
        return ;
    }
    function findmedian(){
        if(data===0) {
            setres(0)
            return
        }
        fixidata();
        let arr=[]
        for(var i=0;i<xi.length;i++){
            for(var j=1;j<=fi[i];j++){
                arr.push(xi[i]);
            }
        }
        arr.sort((a, b) => a - b);

        let n=arr.length;
        let median;
        if(n%2===0){
            median=(arr[n/2-1]+arr[n/2])/2;
        }
        else{ median=arr[Math.floor(n/2)];}
        setres(median);
        return ;
        }
    // Assuming this is a function you have that prepares `xi` and `fi`
    function findmode(){
        if(data===0) {
            setres(0)
            return
        }
      fixidata();
      let m = new Map(); // Create a new Map to store frequencies
    // Populate the Map with frequencies
      for (let j = 0; j < xi.length; j++) {
        const key = xi[j];
        const value = fi[j];
        
        if (m.has(key)) {
            m.set(key, m.get(key) + value);
        } else {
            m.set(key, value);
        }
       }

    let ans;
    let cnt = Number.NEGATIVE_INFINITY; // Initialize with the smallest possible valu
    // Iterate over the Map to find the mode
    for (let [key, value] of m) {
        if (value > cnt) {
            cnt = value;
            ans = key;
        }
    }
    setres(ans);
 
    };
  return (
    <div style={{color:'gray'}} >
      <h4 style={{textAlign:'center'}}>Statics Calculation</h4>
      <br></br>
      <textarea class="form-control" aria-label="With textarea" id="inputid1" style={{ borderRadius:'10px',textAlign:'center'}}
          onChange={(e) => {
            setdata(e.target.value);
            setres(0)
          }}
          type="text"
          placeholder="enter data"
          value={data}></textarea>
        
             <div className='staticsbtn' style={{display:'flex',justifyContent:'center',gap:'2px',marginTop:'11px'}}>
             <button onClick={()=>{setdata(0);setres(0)}}  >Clear</button>
            <button onClick={()=>{findmean()}} >Mean</button>
            <button onClick={()=>{findmode()}} >Mode</button>
            <button onClick={()=>{findmedian()}} >Median</button>
             </div>
             <h2 style={{textAlign:'center'}}>Ans:{res}</h2>
            
             <div className='container'>
          <h2 class="text-center" style={{color:'red',marginTop:'50px'}}>Statics Calculation</h2>
          <p>
            <b>Input formate </b> is separted by comma i.e 4,5,6,9,1
            <br></br>
            If want to enter data consisting <b>xi and fi</b> (frequency)   Enter formate  i.e :  xi*fi, x2*f2, x3*f3 <br></br>
            example 4*2, 3*5, 15*2
           </p>
          </div>
          
            
    </div> 
  )
}

export default Statics
