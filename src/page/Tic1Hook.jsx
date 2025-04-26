
import{ useState } from "react";

const initialBoard=()=>Array(9).fill(null)




const useTic=()=>{
    const [board,setboard] = useState(initialBoard())
console.log(board)
const [isXNext,setIsXNext] = useState(true)

const WinningPattern =[]

const CalculateWinner=(currentboard)=>{}

const handleClick=(i)=>{
    const winner = CalculateWinner(board)
    if(winner||board[i])   return;

    const newBoard =[...board]
    newBoard[i] = isXNext ? "X" :"O";
    setboard(newBoard)
    setIsXNext(!isXNext)

}

const getStatusMessage=()=>{}

const reset=()=>{}


return {board,handleClick,reset,getStatusMessage,CalculateWinner}
}

export default useTic