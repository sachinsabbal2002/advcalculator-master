import React, { useState, useTransition } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import './Styles/Calculator.css'
import {fraction, evaluate, round } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [fractionans,setfractionans]=useState(false);
  const [fractionclr,setfrationclr]=useState();

  //input
  const inputHandler = (event) => {
    if (answer === "Invalid Input!!") return;
    let val = event.target.innerText;
 
    if (val === "x2") val = "^2";
    else if(val=="Rmd") val="R";
    else if (val === "x3") val = "^3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";

    let str = input + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
    // setInput(str);
  };
 
  //Clear screen
  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  // check brackets are balanced or not
  const checkBracketBalanced = (expr) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };
    const calculateinverse=()=>{
      if (input === "") return;
      let res=1/(input);
      console.log(res);
      setAnswer(round(res, 7));
    }
    

  // calculate final answer
  const calculateAns = () => {
    if (input === "") return;
    for (var i = 0; i < input.length; i++) {
      if (input[i] === 'R') {
          var a = input.substring(0, i + 1);
          var b = input.substring(i + 1, input.length);
          var c = parseInt(a) % parseInt(b); // Assuming 'a' and 'b' are numeric strings
          console.log(a,b,c)
          setAnswer(c);
          return;
      }
  }
    let result = 0;
    let finalexpression = input;
    //  finalexpression = input.replaceAll("^", "**");  //for eval()
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    // evaluate square root
    let noSqrt = input.match(/√[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalexpression = evalSqrt;
    }

    try {
      // check brackets are balanced or not
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }
      result = evaluate(finalexpression); //mathjs
      const fractionR = fraction(result);
      // console.log("fraction res",fractionR)
      var num=fractionR.n;
      var deno=fractionR.d;
      if(fractionans){
        setfrationclr('')
        var fans=num+'/'+deno;
        setfractionans(false);
        setAnswer(fans);
        return ;
      }
 
    } catch (error) {
      result =
        error.message === "Brackets are not balanced!"
          ? "Brackets are not balanced!"
          : "Invalid Input!!"; //error.message;
    }
    
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };

  // remove last character
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  function changefractionclr(){
    setfrationclr('green');
    setfractionans(true);
  }

  return (
    <>
      <div className="container_calculator" style={{marginTop:'-40px'}}>
        <div className="main">
          <Display input={input} setInput={setInput} answer={answer} />
          <Buttons calculateinverse={calculateinverse}
            inputHandler={inputHandler}
            clearInput={clearInput}
            backspace={backspace}
            changefractionclr={changefractionclr}
            fractionclr={fractionclr}
            
            calculateAns={calculateAns}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;