import "./App.css";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const resultClick = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <Containar>
        <form>
          <input type="text" value={result} />
        </form>
        <Keypad>
          <button
            style={{ gridColumn: "1/3", gridRow: "1",backgroundColor:'tomato', color: "282634" }}
            onClick={clear}
          >
            Clear
          </button>
          <button style={{ color: "262834" }} onClick={backspace}>
            C
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button
            style={{ gridColumn: "3/5", gridRow: "5", color: "262834", backgroundColor:'yellowgreen' }}
            onClick={resultClick}
          >
            =
          </button>
        </Keypad>
      </Containar>
    </>
  );
}

export default App;

const Containar = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 20rem;
  text-align: center;
  border: 10px solid #101116;
  background-color: #101116;
  border-radius: 5px;
  input {
    height: 75px;
    width: 249px;
    background-color: #10111600;
    border: none;
    color: #ffff;
    text-align: right;
    font-size: 23px;
    font-weight: 800;
  }
  button {
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #262834;
    color: #ffff;
    font-weight: 500;
  }

  input:focus,
  input:active,
  button:focus,
  button:hover,
  button:active {
    outline: none;
    background-color: #10388a;
  }
`;
const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
`;
