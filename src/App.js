import './App.css';
import { useState } from 'react';
import Rules from './components/Rules';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import Colors from './components/Colors';
import shuffle from './utils/shuffle';

function App() {
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [previousNumberOfCards, setPreviousNumberOfCards] = useState(2);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);

  const incrementNumberOfCards = () => {
    let previous = numberOfCards;
    setNumberOfCards(numberOfCards + previousNumberOfCards);
    setPreviousNumberOfCards(previous);
  };

  let colorArray = Colors(numberOfCards).map((item) => {
    return { used: false, ...item };
  });

  return (
    <div>
      <Rules />
      <Scoreboard score={score} highScore={highScore} level={level} />
      <div className='Cards'>
        {colorArray.map(function (item) {
          console.log(item);
          return <Card color={item.color} textColor={item.textColor} />;
        })}
      </div>
    </div>
  );
}

export default App;
