import { render } from "react-dom";

const StatusMessage = ({winner , isXNext , squares}) => {
    const noMovesLeft =  squares.every(squareValue => squareValue !== null)
    const nextPlayer = isXNext ? 'X' : 'O';
  
    // const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`;  
    
    const renderStatusMessage = () =>{
        if(winner){
             return <div> winner is 
             <span className={winner === 'X' ? 'text-green' : 'text-orange'}> {winner}</span>
             
             </div>
        }
        if(!winner && noMovesLeft){
            return <div>both <span className="text-green">O</span> and <span className="text-orange">X</span> are tied</div>
        } 
        if(!winner && !noMovesLeft){
            return <div>next player is <span className={isXNext ? 'text-green' : 'text-orange'}> {nextPlayer}</span></div>
        }
        return null;
    }
       return  <div className="status-message">
         {
           renderStatusMessage()
         }
        </div>
    
}

export default StatusMessage;