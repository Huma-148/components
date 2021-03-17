import React,{useState} from 'react';
import Board from './Components/Board';
const Game=()=>{
    const[board,setBoard]=useState(Arrar(9),fill(null));
    const[xIsNext,setXIsNext]=useState(true);
    const winner=calculateWinner(board);
    const handleClick=(i)=>{
        const boardCopy=[...board] 
        if(winner||boardCopy[i])
         return;
         boardCopy[i]=xIsNext?'x':'o';
         setBoard(boardCopy);
         etXIsNext(!xIsNext);
    }
    const renderMoves=()=>(
        <button onClick={()=>setBoard(Array(9).fill(null))}>
        Start Game
        </button>
    )
    const style={
        width: '200px',
        margin: '20px auto'
    };
    return (<>
    <Board squares={board} onClick={handleClick} />
    <div style={style}>
        <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
    </div>
    </>)
}
export default Game;