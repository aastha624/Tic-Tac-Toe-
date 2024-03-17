import { useState } from 'react';
import Player from './components/Player.jsx';
import Gameboard from './components/Gameboard.jsx';
import GameOver from './components/Gameover.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const intialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameboard = [...intialGameboard.map(array => [...array])];
  //create a copy array
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }
  return gameboard;
}
function deriveWinner(gameboard, Players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameboard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameboard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameboard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = Players[firstSquareSymbol];
    }
  }
  return winner;
}
function App() {
  const [Players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  // const [activeplayer,setactiveplayer]=useState('x');

  const activeplayer = deriveActivePlayer(gameTurns);
  const gameboard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameboard, Players)
  const hasDraw = gameTurns.length === 9 && !winner;


  function handleselectsquare(rowindex, colindex) {
    // setactiveplayer((curactiveplayer)=>(curactiveplayer==='X'?'O':'X'));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowindex, col: colindex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });

  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handleplayernamechange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isactive={activeplayer === 'X'} onchangename={handleplayernamechange} />
          <Player initialName={PLAYERS.O} symbol="O" isactive={activeplayer === 'O'} onchangename={handleplayernamechange} />
        </ol>
        {(winner || hasDraw) && (<GameOver winner={winner} onRestart={handleRestart} />)}
        <Gameboard onselectsquare={handleselectsquare} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
