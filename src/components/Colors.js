// Durstenfeld shuffle taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Colors(numberOfCards) {
  const colorArray = [
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

  shuffle(colorArray);

  return colorArray.slice(0, numberOfCards);
}

export default Colors;
