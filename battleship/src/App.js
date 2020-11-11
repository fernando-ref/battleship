import logo from './logo.svg';
import './App.css';

import Score from './components/Score/Score';
import Navy from './components/Navy/Navy';
import Field from './components/Field/Field';

import {GameContextProvider} from './context/GameContext'; 

function App() {

  return (
    <GameContextProvider>
      <div className="App">
        <div className="game">
          <div>
            <div><Score /></div>
            <div><Navy /></div>
          </div>
          <div><Field /></div>
        </div>
      </div>
      </GameContextProvider>
  );
}

export default App;
