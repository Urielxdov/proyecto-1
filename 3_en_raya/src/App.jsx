import { useState } from "react";
import confetti from "canvas-confetti";

import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

const initialBoard = Array.from({ length: 9 }, () => ({
  value: "",
  isSelected: false,
}));

export function App() {
  const [turn, setTurn] = useState(TURNS.X);
  const [gameBoard, setGameBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);

  const resetBoard = () => {
    setGameBoard(initialBoard);
    setTurn(TURNS.X);
    setWinner(null);
  };

  const handleTurn = (index) => {
    if (winner !== null) {
      // Aquí irá una animación de testeo
    } else if (gameBoard[index].value === "") {
      updateGameBoard(index);
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
    } else {
      // Aquí irá una animación de testeo
    }
  };

  const updateGameBoard = (index) => {
    const newGameBoard = gameBoard.map((chart, i) =>
      i === index ? { value: turn, isSelected: true } : chart
    );
    setGameBoard(newGameBoard);
    checkWinner(newGameBoard);
  };

  const checkWinner = (board) => {
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

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a].value &&
        board[a].value === board[b].value &&
        board[a].value === board[c].value
      ) {
        setWinner(board[a].value);
        confetti();
        return;
      }
    }

    if (board.every((cell) => cell.value !== "")) {
      setWinner("Draw");
    }
  };

  return (
    <section className="ticTacToe">
      <h1 className="ticTacToe-title">Tic Tac Toe</h1>

      <section className="ticTacToe-container">
        {gameBoard.map((chart, index) => (
          <Square
            key={index}
            index={index}
            isSelected={chart.isSelected}
            handleTurn={() => handleTurn(index)}
            turn={turn}
          >
            {chart.value !== "" ? chart.value : turn}
          </Square>
        ))}
      </section>
      <section>
        <button onClick={resetBoard} className="ticTacToe-button reset">
          Reiniciar
        </button>
      </section>

      {winner && (
        <section style={{ color: "white" }} className="winner">
          <h2>{winner === "Draw" ? "Es un empate" : `Ganador: ${winner}`}</h2>
          {winner !== "Draw" ? (
            <Square isSelected handleTurn={() => {}} turn={winner}>
              {winner}
            </Square>
          ) : (
            <></>
          )}
          <button className="ticTacToe-button" onClick={resetBoard}>
            Jugar de nuevo
          </button>
        </section>
      )}
    </section>
  );
}

function Square({ children, isSelected, handleTurn }) {
  return (
    <div
      className={`ticTacToe-containerChart ${
        isSelected ? "isSelected" : "notSelected"
      }`}
      onClick={handleTurn}
    >
      <span>{children}</span>
    </div>
  );
}
