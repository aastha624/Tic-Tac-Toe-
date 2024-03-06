import { useState } from 'react';
import Player from './components/Player.jsx';
import Gameboard from './components/Gameboard.jsx';

function App() {
  const [activeplayer,setactiveplayer]=useState('x');
  function handleselectsquare(){
    setactiveplayer((curactiveplayer)=>curactiveplayer==='X'?'O':'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player" symbol="X" isactive={activeplayer ==='X'}/>
          <Player initialName="Player" symbol="O" isactive={activeplayer ==='O'} />
        </ol>
        <Gameboard onselectsquare={handleselectsquare} activeplayersymbol={activeplayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;
