import React from 'react'

import Calculator from './Calculator/Calculator';
import Quadratic from './Quadratic';
import Oneparameter from './Oneparameter'
import Display from './Calculator/Display';
const Home = () => {
  return (
    <div>
     <div className='container'>
     <h1 class="text-center" style={{color:'yellow',fontFamily:'monospace',fontStyle:'revert'}}>Welcome to modern Calculator</h1>
     <h1 style={{color:'blue'}}>About Calculator</h1>
     <div className='container' style={{display:'flex',alignItems:'center'}}>
     <ul style={{color:'red'}}>
      <li>Basic Calculator</li>
      <li> Scientific Calculator</li>
      <li>Quadratic Eqaution Solve</li>
      <li>Expression Evaluation</li>
      <li>calendar Display</li>
      <li> Statical Calculation</li>
     </ul>
    
     </div>
     
     </div>
      <div>
      <h1 class="text-center" style={{color:'orange'}}>Basic Calculator</h1>
        <Calculator/>
        <div style={{height:'2px',width:'100vw',border:'2px solid'}}></div>
      </div>
      <div style={{height:'2px',width:'100vw',border:'2px solid'}}></div>
      <div>
        <Quadratic/>
      </div>
      <div style={{height:'2px',width:'100vw',border:'2px solid'}}></div>
      <Oneparameter/>
      <footer className="ftco-footer ftco-section">
		<div className="container" style={{marginTop:'50px'}}>
			<div className="row">
				<div className="col-md-12 text-center">
					<p style={{color:'yellow'}}>
						Copyright &copy;
						<script>document.write(new Date().getFullYear());</script> All rights reserved 
					</p>
				</div>
			</div>
		</div>
	</footer>
     
    </div>
  )
}

export default Home
