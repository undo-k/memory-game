// Durstenfeld shuffle taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
  let returnArray = array.slice(0);

  for (let i = returnArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [returnArray[i], returnArray[j]] = [returnArray[j], returnArray[i]];
  }

  return returnArray;
};

export default shuffle;
