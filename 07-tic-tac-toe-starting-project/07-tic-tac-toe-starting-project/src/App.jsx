import { useState } from 'react';
import Player from './components/Player.jsx';
import Gameboard from './components/Gameboard.jsx';
import GameOver from './components/Gameover.jsx';
import Log from './components/Log.jsx';
import {WINNING_COMBINATIONS} from "./components/winning-combinations.js";

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
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activeplayer,setactiveplayer]=useState('x');

  const activeplayer = deriveActivePlayer(gameTurns);

  let gameboard = intialGameboard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

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
    ) 
    {
      winner = firstSquareSymbol;
    }
  }

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
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isactive={activeplayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isactive={activeplayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <Gameboard onselectsquare={handleselectsquare} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
