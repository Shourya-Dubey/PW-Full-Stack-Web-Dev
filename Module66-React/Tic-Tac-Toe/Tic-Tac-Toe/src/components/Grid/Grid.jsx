import { useState } from "react"
import Card from "../Card/Card";
import './Grid.css'
import isWinner from "../helpers/checkWinner";

function Grid({numberOfCards}){
    const[board, setBoard] = useState(Array(numberOfCards).fill(""));

    const[turn, setTurn] = useState(true)

    const [winner, setWinner] = useState(null);

    function play(index){
        if(turn == true){
            board[index] = 'O'
        }else{
            board[index] = 'X'
        }
        const win = isWinner(board, turn? 'O': 'X');
        if(win){
            setWinner(win)
        }setBoard([...board]);
        setTurn(!true)
    }

    function reset(){
        setTurn(true)
        winner(null)
        setBoard(Array(numberOfCards).fill(" "))
    }
    return (
      <div className="grid-wrapper">
        {winner && (
          <>
            <h1 style={{color:'green'}}>Winner is {winner}</h1>
            <button className="reset" onClick={reset}>
              Reset Game
            </button>
          </>
        )}
        <h1 className="turn-highlight" style={{color:'red'}}>Curren turn: {(turn) ? "O" : "X"}</h1>
        <div className="grid">
          {board.map((el, idx) => (
            <Card key={idx} onPlay={play} player={el} index={idx} />
          ))}
        </div>
      </div>
    );
}
export default Grid