import React from 'react';
import Game from './tic-tac-toe/tic-tac-toe';
import GreetTitle from './greet-title/greet-title';
import './App.css';



class App extends React.Component {
  render() {
    return <div>
      <GreetTitle  name="sara" age="40"/>
      <Game />
    </div>
  }
}

export default App;
