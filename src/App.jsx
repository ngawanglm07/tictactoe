import "../src/styles.scss"
import './App.css'
import Board from "./components/Board"
import React, { useState } from 'react'

function App() {
  const [squares , setSquares] = useState(Array(9).fill(null));
  const [ isXNext , setisXNext] = useState(false);

  const nextPlayer = isXNext ? 'X' : 'O';

  const handleSquareClick =  clickedPosition => {

    if(squares[clickedPosition]) {
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
  <h2>the next player is {nextPlayer} </h2>
   <Board squares={squares} handleSquareClick={handleSquareClick}/>
  </div>
  )
}

export default App
