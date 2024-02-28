import { useState } from 'react'
import './App.css'
import NumButton, { OpeButton, EqualButton, DelButton } from './components/buttom.tsx';
import { GcdFraction } from './components/cal_func.tsx';

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [ope, setOpe] = useState(undefined);
  const [ans, setAns] = useState<number | string>();

  function NumKeyPressed(key: any) {
    if (ope === undefined) {
      setLeft(left * 10 + key);
    } else {
      setRight(right * 10 + key);
    }
  }

  function OpeKeyPressed(key: any) {
    setOpe(key);
  }

  function EqualKeyPressed() {
    if (ope === "+")
      setAns(left + right);
    else if (ope === "-")
      setAns(left - right);
    else if (ope === "×")
      setAns(left * right);
    else if (ope === "÷")
      setAns(left / right);
    else if (ope === "^")
      setAns(Math.pow(left, right));
    else if (ope === "/")
      setAns(GcdFraction(left,right));
    
  }

  function AllClearKeyPressed() {
    setLeft(0);
    setRight(0);
    setOpe(undefined);
    setAns(undefined);
  }

  return (
    <div className='cal'>
      <header>
        電卓
      </header>
      <div className='display'>
        {left}
        {ope === undefined ? '' : ope}
        {ope === undefined ? '' : right}
        {ans === undefined ? '' : "  答え:" + ans}
      </div>
      <div className='numbers'>
        <NumButton text="7" onClick={() => { NumKeyPressed(7) }} />
        <NumButton text="8" onClick={() => { NumKeyPressed(8) }} />
        <NumButton text="9" onClick={() => { NumKeyPressed(9) }} />
        <br></br>
        <NumButton text="4" onClick={() => { NumKeyPressed(4) }} />
        <NumButton text="5" onClick={() => { NumKeyPressed(5) }} />
        <NumButton text="6" onClick={() => { NumKeyPressed(6) }} />
        <br></br>
        <NumButton text="1" onClick={() => { NumKeyPressed(1) }} />
        <NumButton text="2" onClick={() => { NumKeyPressed(2) }} />
        <NumButton text="3" onClick={() => { NumKeyPressed(3) }} />
        <br></br>
        <NumButton text="0" onClick={() => { NumKeyPressed(0) }} />
      </div>
      <div className='operators'>
        <OpeButton text="+" onClick={() => { OpeKeyPressed("+") }} />
        <OpeButton text="-" onClick={() => { OpeKeyPressed("-") }} />
        <OpeButton text="×" onClick={() => { OpeKeyPressed("×") }} />
        <OpeButton text="÷" onClick={() => { OpeKeyPressed("÷") }} />
        <br></br>
        <OpeButton text="^" onClick={() => { OpeKeyPressed("^") }} />
        <OpeButton text="/" onClick={() => { OpeKeyPressed("/") }} />
        <EqualButton onClick={() => { EqualKeyPressed() }} />
        <DelButton onClick={() => { AllClearKeyPressed() }} />
      </div>
    </div>
  )
}

export default App
