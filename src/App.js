import './App.css';
import { useState } from 'react';
import Rules from './components/Rules';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import Colors from './components/Colors';

function App() {
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  let colorArray = Colors(numberOfCards);
  return (
    <div>
      <Rules />
      <Scoreboard score={score} highScore={highScore} />
      <div className='Cards'>
        {colorArray.map(function (item) {
          return <Card color={item.color} textColor={item.textColor} />;
        })}
      </div>
    </div>
  );
}

export default App;
