import { round } from "mathjs";
import React, { useState } from "react";

function App() {
  // set cofficent value
  //    const [descriment,setdescriment]=useState(0);
  const [coff, setcoff] = useState({ a: "0", b: "0", c: "0" });
  const [a1, seta1] = useState("0");
  const [b1, setb1] = useState("0");
  const [c1, setc1] = useState("0");
  const [mess, setmess] = useState();
  const [bgcl, setbgcl] = useState("white");
  const [anscl, setanscl] = useState("none");
  // eqation show
  const eqation = (p1, p2, p3) => {
    console.log("eqation is called");
    var a1 = Number(p1);
    var b1 = Number(p2);
    var c1 = Number(p3);
    if ((a1 === 0 && b1 === 0 && c1 === 0) || (a1 === 0 && b1 === 0)) {
      setmess("Provide valid  coffient ");
      return;
    }
    var nb = b1;
    if (b1 < 0) nb = -1 * b1;
    var nc = c1;
    if (c1 < 0) nc = -1 * c1;
    var eq = `Eqation: ${a1}x²${b1 < 0 ? "-" : "+"}${nb}x${
      c1 < 0 ? "-" : "+"
    }${nc}=0`;
    console.log(eq);
    setmess(`${eq}`);
  };
  // root show
  const rootshow = (p1, p2, p3) => {
    console.log("rootshow call ");
    // console.log(p1,p2,p3)
    var a1 = Number(p1);
    var b1 = Number(p2);
    var c1 = Number(p3);
    if ((a1 === 0 && b1 === 0 && c1 === 0) || (a1 === 0 && b1 === 0)) {
      setmess(" Provide valid  coffient ");
      return;
    }
    // finding b^2-4ac
    var bs = Math.pow(b1, 2);
    var frac = 4 * a1 * c1;
    var descriment = bs - frac;

    console.log("decriment is ", descriment);
    if (descriment < 0) {
      //   setmess(` ${eq} =>
      //    d is negative, so root not exist ` );
      if (a1 < 0) {
        console.log("a <0 ");
        var root1 = `[${b1}+(i\u221A ${descriment * -1})/${2 * a1}`;
        var root2 = `[${b1}-(i\u221A ${descriment * -1})]/${2 * a1}`;
        setmess(` Imaginary root are \n\n ${root1}  and  ${root2}`);
        return;
      } else {
        if (b1 < 0) {
          console.log("a >0 and b<0 ");
          var root1 = `[${b1 * -1}+ (i\u221A${descriment * -1})]/${2 * a1}`;
          var root2 = `[${b1 * -1}-(i\u221A ${descriment * -1})]/${2 * a1}`;
          setmess(` Imaginary root are \n\n ${root1}  and  ${root2}`);
          return;
        } else {
          console.log("a>0 and b> 0");
          var rt1 = `[-${b1}+(i\u221A${descriment * -1})]/${2 * a1}`;
          console.log(rt1);
          var rt2 = `[-${b1}-(i\u221A${descriment * -1})]/${2 * a1}`;
          setmess(`Imaginary root are \n\n  ${rt1}  and  ${rt2}`);
          return;
        }
      }
    }
    var denomerator = 2 * a1;
    var rootdec = Math.pow(descriment, 1 / 2);
    // console.log(rootdec);
    var root1 = round((-1 * b1 - rootdec) / denomerator,2);
    var root2 = round((-1 * b1 + rootdec) / denomerator,2);

    setmess(`  Root are : ${root1} and ${root2}`);
  };
  const nature = (p1, p2, p3) => {
    console.log("nature is call");
    var a1 = Number(p1);
    var b1 = Number(p2);
    var c1 = Number(p3);
    if ((a1 === 0 && b1 === 0 && c1 === 0) || (a1 === 0 && b1 === 0)) {
      setmess("Provide valid  coffient ");
      return;
    }
    if (a1 === 0) {
      setmess("Provide a valid quadratic eqation  ");
      return;
    }
    // critcl pt
    var crt = (-1 * b1) / (2 * a1);
    if (b1 % (2 * a1) != 0) {
      crt = `${b1 * -1}/${2 * a1}`;
    }
    var crtval = ((-1 * b1 * a1 + 2 * a1 * c1 - b1 * b1) / 2) * a1;
    console.log("crtvalu is ", crtval);
    setmess(` Optimal  point =>   ${crt}  \n\n optimal  value => ${crtval}`);
  };
  return (
    <div className="continer" style={{color:'pink'}}>
       <h1 class="text-center" style={{color:'yellow'}}>Quadratic Eqation Solver</h1>
      <div style={{display:'flex',justifyContent:'center',marginLeft:'50px'}}>
        <div className="continer" >
                           <label htmlFor="a" style={{ display: "block" }}className="form-label"> cofficent of X^2 (a){" "}</label>
                           <input
                            style={{
                            border: "solid 2px",
                            borderRadius: "7px",
                            fontSize: "30px",
                            }}
                            id="a1"
                            onChange={(e) => {
                            seta1(e.target.value);
                            }}
                            type="text"
                            placeholder="2x² i.e 2 "
                            value={a1}/>
                             <label
                        htmlFor="b"
                        className="form-label"
                        style={{ display: "block" }}
                        >
                        cofficent of X (b){" "}
                        </label>
                        {/* <input type="text" style={{fontSize:'25px'}}  className="form-control" id="b" name="b" value={coff.b} onChange={onChange}  /> */}
                        <input
                        style={{
                            border: "solid 2px",
                            borderRadius: "7px",
                            fontSize: "30px",
                        }}
                        id="b1"
                        onChange={(e) => {
                            setb1(e.target.value);
                        }}
                        type="text"
                        placeholder="2x²+ 3x -5 =0 i.e 3"
                        value={b1}
                        />
                         <label
                        htmlFor="c"
                        style={{ display: "block" }}
                        className="form-label"
                    >
                        constant term (c){" "}
                    </label>
                    {/* <input type="text" style={{fontSize:'25px'}}  className="form-control" id="c" name="c" value={coff.c} onChange={onChange}  /> */}
                    <input
                        style={{
                        border: "solid 2px",
                        borderRadius: "7px",
                        fontSize: "30px",
                        }}
                        id="c1"
                        onChange={(e) => {
                        setc1(e.target.value);
                        }}
                        type="text"
                        placeholder="2x²+ 3x -5 =0 i.e -5 "
                        value={c1}
                    />
                     <div >
          <button
            onClick={() => eqation(a1, b1, c1)}
            style={{
              cursor: "pointer",
              backgroundColor: "red",
              margin: "12px",
              padding: "2px",
              border: "solid 3px",
              borderRadius: "8px",
            }}
          >
            Eqaution
          </button>
          <button
            onClick={() => rootshow(a1, b1, c1)}
            style={{
              cursor: "pointer",
              backgroundColor: "purple",
              margin: "12px",
              padding: "2px",
              border: "solid 3px",
              borderRadius: "8px",
            }}
          >
            Roots
          </button>
          <button
            onClick={() => nature(a1, b1, c1)}
            style={{
              cursor: "pointer",
              backgroundColor: "green",
              margin: "12px",
              padding: "2px",
              border: "solid 3px",
              borderRadius: "8px",
            }}
          >
            Optimal
          </button>
        </div>
        <h1>{mess}</h1>
                        
        </div>
        </div>
     
    </div>
  );
}

export default App;
