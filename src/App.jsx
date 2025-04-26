import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  // Define winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (board[index] || gameOver) return; 
    // Ignore if square already filled or game over

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] &&
         newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        setWinningCells([a, b, c]);
        setGameOver(true);
        return;
      }
    }
    if (!newBoard.includes(null)) {
      setGameOver(true); // It's a draw
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
    setWinningCells([]);
  };

  return (
    <div className="game-container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? 'filled' : ''} ${gameOver ? 'game-over' : ''} 
            
            ${winningCells.includes(index) ? 'winning' : ''}`
          
            }
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="game-over-message">
          {winner ? `${winner} Wins!` : "It's a Draw!"}
          <button className="restart-button" onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default App;