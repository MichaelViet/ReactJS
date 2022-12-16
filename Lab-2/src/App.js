import React from 'react';
import Counter from './features/counter/MyCounter';
import ListMyCounter from './features/counter/ListMyCounter';
import MyCart from './features/counter/Cart';
import GuessTheNumber from './features/counter/GuessTheNumber';





import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <ListMyCounter />
        <br>
        </br>
        <div className="App">
          <MyCart />
        </div>
        <br></br>
        <div>
          <GuessTheNumber />
        </div>
      </header>
    </div>
  );
}

export default App;
