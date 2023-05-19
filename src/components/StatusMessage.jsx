import { render } from "react-dom";

const StatusMessage = ({winner , isXNext , squares}) => {
    const noMovesLeft =  squares.every(squareValue => squareValue !== null)
    const nextPlayer = isXNext ? 'X' : 'O';
  
    // const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`;  
    
    const renderStatusMessage = () =>{
        if(winner){
             return <div> winner is {winner}</div>
        }
        if(!winner && noMovesLeft){
            return <div>both o and x are tied</div>
        } 
        if(!winner && !noMovesLeft){
            return <div>next player is {nextPlayer}</div>
        }
        return null;
    }
       return  <div>
         {
           renderStatusMessage()
         }
        </div>
    
}

export default StatusMessage;