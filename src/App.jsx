import "../src/styles.scss"
import './App.css'
import Board from "./components/Board"
import React, { useState } from 'react'
import { calculateWinner } from "./winner"
import StatusMessage from "./components/StatusMessage"
import History from "./components/History"

function App() {

  const [history , setHistory] = useState([{squares : Array(9).fill(null), isXNext:false}])
  const [ currentMove , setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner =  calculateWinner(gamingBoard.squares);
  console.log({history,currentMove}); 
 
  const handleSquareClick =  clickedPosition => {
  
    if(gamingBoard.squares[clickedPosition] || winner) {
      return ;
    }
     
  setHistory(currentHistory => {
    const lastGamingState = currentHistory[currentHistory.length - 1];


    const nextSquaresState = lastGamingState.squares.map((squareValue , position) => {
        if(clickedPosition === position){
            return lastGamingState.isXNext ? 'X' : 'O';
        }
        return squareValue;
    })
    return currentHistory.concat({ squares: nextSquaresState, isXNext: !lastGamingState.isXNext})
  });
 setCurrentMove(move => move + 1);

  }
  const moveTo = move => {
    setCurrentMove(move)
  }
  return (
  <div className="app">
 
  <StatusMessage winner={winner} gamingBoard={gamingBoard} />
   <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick}/>
   <History history={history} moveTo={moveTo}/> 
  </div>
  )
}
export default App
