import { useState } from 'react';
import Player from './components/Player.jsx';
import Gameboard from './components/Gameboard.jsx';
import Log from './components/Log.jsx';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activeplayer,setactiveplayer]=useState('x');
  function handleselectsquare(rowindex,colindex){
    setactiveplayer((curactiveplayer)=>(curactiveplayer==='X'?'O':'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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
          <Player initialName="Player" symbol="X" isactive={activeplayer ==='X'}/>
          <Player initialName="Player" symbol="O" isactive={activeplayer ==='O'} />
        </ol>
        <Gameboard onselectsquare={handleselectsquare} turns={gameTurns}/>
      </div>
      <Log />
    </main>
  );
}

export default App;
