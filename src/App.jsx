import "../src/styles.scss"
import './App.css'
import Board from "./components/Board"
import React, { useState } from 'react'
import { calculateWinner } from "./winner"
import StatusMessage from "./components/StatusMessage"

function App() {
  const [squares , setSquares] = useState(Array(9).fill(null));
  const [ isXNext , setisXNext] = useState(false);
  const winner =  calculateWinner(squares);
 

  const handleSquareClick =  clickedPosition => {

    if(squares[clickedPosition] || winner) {
      return ;
    }
     
  setSquares(currentSquares => {
    return currentSquares.map((squareValue , position) => {
        if(clickedPosition === position){
            return isXNext ? 'X' : 'O';
        }
        return squareValue;
    })
    
  });
  setisXNext((currentisXnext) => !currentisXnext);

  }



  return (
  <div className="app">
 
  <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
   <Board squares={squares} handleSquareClick={handleSquareClick}/>
  </div>
  )
}

export default App
