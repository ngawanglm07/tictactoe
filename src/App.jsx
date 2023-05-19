import "../src/styles.scss"
import './App.css'
import Board from "./components/Board"
import React, { useState } from 'react'
import { calculateWinner } from "./winner"

function App() {
  const [squares , setSquares] = useState(Array(9).fill(null));
  const [ isXNext , setisXNext] = useState(false);

  const nextPlayer = isXNext ? 'X' : 'O';
  const winner =  calculateWinner(squares);
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`; 

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
  <h2>{statusMessage} </h2>
   <Board squares={squares} handleSquareClick={handleSquareClick}/>
  </div>
  )
}

export default App
