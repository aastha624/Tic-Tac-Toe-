
import Player from './components/Player.jsx';
import Gameboard from './components/Gameboard.jsx';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player" symbol="X" />
          <Player initialName="Player" symbol="O" />
        </ol>
        <Gameboard/>
      </div>
      LOG
    </main>
  );
}

export default App;
