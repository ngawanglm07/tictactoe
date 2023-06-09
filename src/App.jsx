import "../src/styles.scss"
import './App.css'
import Board from "./components/Board"
import React, { useState } from 'react'
import { calculateWinner } from "./winner"
import StatusMessage from "./components/StatusMessage"
import History from "./components/History"
import Reset from "./components/Reset"

const NEW_GAME = [{squares : Array(9).fill(null), isXNext:false}]

function App() {

  const [history , setHistory] = useState(NEW_GAME)
  const [ currentMove , setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const {winner , winningSquares} =  calculateWinner(gamingBoard.squares);
  console.log({history,currentMove}); 
 
  const handleSquareClick =  clickedPosition => {
  
    if(gamingBoard.squares[clickedPosition] || winner) {
      return ;
    }
     
  setHistory(currentHistory => {

    const isTraversing = currentMove + 1 !== currentHistory.length;

    const lastGamingState = isTraversing ?
    currentHistory[currentMove] :
    currentHistory[currentHistory.length - 1];


    const nextSquaresState = lastGamingState.squares.map((squareValue , position) => {
        if(clickedPosition === position){
            return lastGamingState.isXNext ? 'X' : 'O';
        }
        return squareValue;
    })
  
    const base = isTraversing 
    ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+ 1  )
    : currentHistory;
    
    return base.concat({
       squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext
      })
  });

 setCurrentMove(move => move + 1);

  }
  const moveTo = move => {
    setCurrentMove(move)
  }
  return (
  <div className="app">
  <h1>TIC <span className="text-green">TAC</span> TOE</h1>
  <p className="ngawang">created by @Ngawang_lm </p>
 
  <StatusMessage winner={winner} gamingBoard={gamingBoard} />
   <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
   <Reset moveTo={moveTo} winner={winner}/>
   <History history={history} moveTo={moveTo} currentMove={currentMove} 
   /> 
  </div>
  )
}
export default App;
