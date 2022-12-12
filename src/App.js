import './App.css';
import { useState } from 'react';
import Rules from './components/Rules';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';

function App() {
  const [numberOfCards, setNumberOfCards] = useState(3);
  let colorArray = [
    {
      color: 'BurlyWood',
      textColor: '#131516',
    },
    {
      color: 'Chartreuse',
      textColor: '#131516',
    },
    {
      color: 'CornflowerBlue',
      textColor: '#d8d4cf',
    },
    {
      color: 'Coral',
      textColor: '#131516',
    },
    {
      color: 'BlueViolet',
      textColor: '#d8d4cf',
    },
    {
      color: 'Crimson',
      textColor: '#d8d4cf',
    },
    {
      color: 'DarkOliveGreen',
      textColor: '#d8d4cf',
    },
  ];
  return (
    <div>
      <Rules />
      <Scoreboard />
      <div className='Cards'>
        {colorArray.map(function (item) {
          return <Card color={item.color} textColor={item.textColor} />;
        })}
      </div>
    </div>
  );
}

export default App;
