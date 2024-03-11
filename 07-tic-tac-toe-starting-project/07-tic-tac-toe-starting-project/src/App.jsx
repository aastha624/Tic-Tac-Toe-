import { useState } from 'react';
import Player from './components/Player.jsx';
import Gameboard from './components/Gameboard.jsx';
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
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameboard[row][col] = player;
    }

  function handleselectsquare(rowindex,colindex){
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
          <Player initialName="Player 1" symbol="X" isactive={activeplayer ==='X'}/>
          <Player initialName="Player 2" symbol="O" isactive={activeplayer ==='O'} />
        </ol>
        <Gameboard onselectsquare={handleselectsquare} turns={gameTurns}/>
      </div>
      <Log  turns={gameTurns} />
    </main>
  );
}

export default App;
