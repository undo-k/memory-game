import './App.css';
import { useEffect, useState } from 'react';
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
  const [colors, setColors] = useState(
    shuffle(
      Colors(numberOfCards).map((item) => {
        return { used: false, ...item };
      })
    )
  );

  useEffect(() => {
    getNewColors();
  }, [level]);

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score]);

  const incrementNumberOfCards = () => {
    let previous = numberOfCards;
    setNumberOfCards(numberOfCards + previousNumberOfCards);
    setPreviousNumberOfCards(previous);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const incrementLevel = () => {
    setLevel(level + 1);
  };

  const getNewColors = () => {
    setColors(
      shuffle(
        Colors(numberOfCards).map((item) => {
          return { used: false, ...item };
        })
      )
    );
  };

  const isLevelComplete = () => {
    if (!colors.some((color) => color.used === false)) {
      incrementNumberOfCards();
      incrementLevel();
    }
  };

  const loseGame = () => {
    setNumberOfCards(3);
    getNewColors();
    setScore(0);
    setLevel(1);
  };

  const markCardUsed = (key) => {
    let colorArray = colors.slice(0);

    colorArray.map((item) => {
      if (item.key == key) item.used = true;
    });

    setColors(colorArray);
  };

  const isCardLegalChoice = (card) => {
    let retval = false;

    colors.map(function (colorElement) {
      if (colorElement.key == card && colorElement.used == true) {
        retval = false;
      } else if (colorElement.key == card && colorElement.used == false) {
        retval = true;
      }
    });

    return retval;
  };

  const handleSelection = (e) => {
    if (e.target.id != 'card') return;

    let key = e.target.textContent;

    if (isCardLegalChoice(key)) {
      markCardUsed(key);
      incrementScore();
      if (isLevelComplete()) {
        incrementLevel();
        incrementNumberOfCards();
      } else {
        setColors(shuffle(colors));
      }
    } else {
      loseGame();
    }
  };

  return (
    <div>
      <Rules />
      <Scoreboard score={score} highScore={highScore} level={level} />
      <div className='Cards'>
        {colors.map((colorElement) => {
          return (
            <Card
              key={colorElement.key}
              color={colorElement.key}
              textColor={colorElement.textColor}
              handleSelection={handleSelection}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
