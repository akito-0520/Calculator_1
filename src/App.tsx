import { useState } from 'react'
import { NumButton, OpeButton } from './components/button.tsx';
import { GcdFraction } from './components/cal_func.tsx';
import styles from './App.module.css';

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [ope, setOpe] = useState(undefined);
  const [ans, setAns] = useState<number | string>();

  const NumButtonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const OpeButtonArray = ["+", "-", "×", "÷", "^", "/"];

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
      setAns(GcdFraction(left, right));

  }

  function AllClearKeyPressed() {
    setLeft(0);
    setRight(0);
    setOpe(undefined);
    setAns(undefined);
  }

  function DelKeyPressed() {
    setAns(undefined);

    if (ope === undefined)
      setLeft(Math.trunc(left / 10));
    else if (right === 0)
      setOpe(undefined);
    else
      setRight(Math.trunc(right / 10));
  }

  return (
    <div className={styles.gvcCalLayout}>
      <header className={styles.HeaderLayout}>
        電卓
      </header>
      <div className='display'>
        {left}
        {ope === undefined ? '' : ope}
        {ope === undefined ? '' : right}
        {ans === undefined ? '' : "  答え:" + ans}
      </div>
      <div className={styles.NumButtonLayout}>
        {NumButtonArray.map(key => (
          <NumButton text={key} onClick={() => { NumKeyPressed(key) }} />
        ))}
      </div>
      <div className='operators'>
        {OpeButtonArray.map(key => (
          <OpeButton text={key} onClick={() => { OpeKeyPressed(key) }} />
        ))}
        <OpeButton text="=" onClick={() => { EqualKeyPressed() }} />
        <br></br>
        <OpeButton text="AC" onClick={() => { AllClearKeyPressed() }} />
        <OpeButton text="DEL" onClick={() => { DelKeyPressed() }} />
      </div>
    </div>
  )
}

export default App
