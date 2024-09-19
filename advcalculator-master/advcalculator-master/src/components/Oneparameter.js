import { useEffect, useState } from "react";
// this is css file 
import  "./Oneparameter.css";
function Oneparameter() {
  const [data, setdata] = useState();
  const [factor, setfactor] = useState([]);
  const [output, setoutput] = useState({});
  function isprime(d) {
    if (d < 2) return false;

    for (var i = 2; i < d; i++) { 
      if (d % i === 0) return false;
    }
    return true;
  }
  const prime = () => {
    console.log("data in prime", data);
    if (isprime(data)) {
      setoutput({
        ke: data,
        mess: "is a prime number ",
      });
    } else {
      setoutput({
        ke: data,
        mess: "is not  a prime number ",
      });
    }
    // setdata(null)
  };
  // function
  const findFactors = () => {
    // Initialize an empty array to store factors
    var factors = [];
    var number = data;
    // Loop from 1 to the square root of the number
    for (let i = 1; i <= Math.sqrt(number); i++) {
      // If i is a factor of the number, add i and the corresponding factor to the array
      if (number % i === 0) {
        factors.push(i);
        // If i is not the square root of the number, add the corresponding factor
        // (number divided by i) to the array
        if (i !== Math.sqrt(number)) {
          factors.push(number / i);
        }
      }
    }

    // Sort the factors array in ascending order
    factors.sort((a, b) => a - b);
    setfactor(factors);
    // Display factors on the console
    console.log(`Factors of ${number}:`, factors);
    setoutput({
      ke: data,
      mess: `factor are : ${factors}`,
    });
  };
  //
  function isperpefectsquare() {
    return Math.sqrt(data) % 1 === 0;
  }
  const perfectsqure = () => {
    console.log(data);
    var perfectCheckNuber = data;
    if (isperpefectsquare()) {
      setoutput({
        ke: perfectCheckNuber,
        mess: "is a perfect square  ",
      });
    } else {
      setoutput({
        ke: data,
        mess: "is not  a perfect square  ",
      });
    }
  };
  //function
  const findsqure = () => {
    var square = data * data;
    setoutput({
      ke: square,
      mess: `is the square of ${data}`,
    });
  };
  //function
  const findCube = () => {
    var CubeValue = data * data * data;
    setoutput({
      ke: CubeValue,
      mess: `is the cube of ${data}`,
    });
  };
  // fun
  function isPerfectCube() {
    // Calculate the cube root of the number
    console.log(data);
    const cubeRoot = Math.cbrt(data);

    // Check if the cube root is an integer
    return Number.isInteger(cubeRoot);
  }
  const perfectCube = () => {
    var cubecheckNub = data;
    if (isPerfectCube()) {
      setoutput({
        ke: cubecheckNub,
        mess: `is the perfect cube.`,
      });
    } else {
      setoutput({
        ke: data,
        mess: `is not  the perfect cube.`,
      });
    }
  };
  function Fact(num) {
    if (num <= 1) return 1;
    else return num * Fact(num - 1);
  }
  const findFactorial = () => {
    var num = data;
    var FactorialAns = Fact(num);
    console.log(FactorialAns);
    setoutput({
      ke:FactorialAns,
      mess:`is value of ${data} factorial`
    });
  };
  function factorization(n, factorizationArray) {
    let pns = 2;
    while (n > 1) {
        if (isprime(n)) {
            factorizationArray.push(n);
            return;
        }
        if (n % pns === 0) {
            n = n / pns;
            factorizationArray.push(pns);
            pns = 2;
        } else {
            pns++;
        }
    }
}
  const primefactor = () => {
    var factorizationArray = [];
    var numPrime = data;
    factorization(numPrime, factorizationArray);
    setoutput({
      ke:data,
      mess: `factorisation are : ${factorizationArray}`,
    })
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: "goldenrod" }}>
        One Parameter function
      </h1>
      <div style={{ textAlign: "center" }}>
        <input style={{border:'solid 2px', borderRadius:'7px',fontSize: "30px"}}
          id="inputid"
          onChange={(e) => {
            setdata(e.target.value);
          }}
          
          type="number"
          placeholder="enter data"
          value={data}
        />
        <button
          onClick={() => {
            document.getElementById("inputid").value = "";
            setdata("");
          }}
          style={{
            width: "50px",
            fontSize: "15px",
            marginLeft: "3px",
            border: "1px solid",
          }}
        >
          Clear
        </button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <table>
          <tr>
            <td>
              <button className="onebtn" onClick={prime} style={{ border: "solid 2px" }}>
                Check Prime
              </button>
              <button className="onebtn" onClick={findFactors} style={{ border: "solid 2px" }}>
                Find Factor{" "}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="onebtn" onClick={perfectsqure} style={{ border: "solid 2px" }}>
                Check PerfectSquare
              </button>
              <button className="onebtn" onClick={findsqure} style={{ border: "solid 2px" }}>
                Find Square
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="onebtn" onClick={findCube} style={{ border: "solid 2px" }}>
                Find Cube
              </button>
              <button className="onebtn" onClick={perfectCube} style={{ border: "solid 2px" }}>
                Check PerfectCube
              </button>
              {/* <button className="onebtn" onClick={sqroot} style={{border:'solid 2px' }}>Find sqroot</button> */}
            </td>
          </tr>
          <tr>
            <td>
              <button className="onebtn" onClick={findFactorial} style={{ border: "solid 2px" }}>
                Find Factorial
              </button>
              <button className="onebtn" onClick={primefactor} style={{ border: "solid 2px" }}>
                Find PrimeFactorisation
              </button>
              {/* <button className="onebtn" onClick={sqroot} style={{border:'solid 2px' }}>Find sqroot</button> */}
            </td>
          </tr>
        </table>
      </div>

      <div>
        <h2 style={{ textAlign: "center",color:'moccasin' }}>
          {" "}
          {output.ke},{output.mess}
        </h2>
      </div>
    </>
  );
}

export default Oneparameter;