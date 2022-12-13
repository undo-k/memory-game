function Colors(numberOfCards) {
  const DARK = '#15141A'; // #15141A
  const LIGHT = '#ededf0';
  const colorArray = [
    {
      color: 'AliceBlue',
      textColor: DARK,
    },
    {
      color: 'AntiqueWhite',
      textColor: DARK,
    },
    {
      color: 'Aqua',
      textColor: DARK,
    },
    {
      color: 'Aquamarine',
      textColor: DARK,
    },
    {
      color: 'Azure',
      textColor: DARK,
    },
    {
      color: 'Beige',
      textColor: DARK,
    },
    {
      color: 'Bisque',
      textColor: DARK,
    },
    {
      color: 'Black',
      textColor: LIGHT,
    },
    {
      color: 'BlanchedAlmond',
      textColor: DARK,
    },
    {
      color: 'Blue',
      textColor: LIGHT,
    },
    {
      color: 'BlueViolet',
      textColor: LIGHT,
    },
    {
      color: 'Brown',
      textColor: LIGHT,
    },
    {
      color: 'BurlyWood',
      textColor: DARK,
    },
    {
      color: 'CadetBlue',
      textColor: LIGHT,
    },
    {
      color: 'Chartreuse',
      textColor: DARK,
    },
    {
      color: 'Chocolate',
      textColor: LIGHT,
    },
    {
      color: 'Coral',
      textColor: DARK,
    },
    {
      color: 'CornflowerBlue',
      textColor: LIGHT,
    },
    {
      color: 'Cornsilk',
      textColor: DARK,
    },
    {
      color: 'Crimson',
      textColor: LIGHT,
    },
    {
      color: 'Cyan',
      textColor: DARK,
    },
    {
      color: 'DarkBlue',
      textColor: LIGHT,
    },
    {
      color: 'DarkCyan',
      textColor: LIGHT,
    },
    {
      color: 'DarkGoldenRod',
      textColor: LIGHT,
    },
    {
      color: 'DarkGrey',
      textColor: DARK,
    },
    {
      color: 'DarkGreen',
      textColor: LIGHT,
    },
    {
      color: 'DarkKhaki',
      textColor: DARK,
    },
    {
      color: 'DarkMagenta',
      textColor: LIGHT,
    },
    {
      color: 'DarkOliveGreen',
      textColor: LIGHT,
    },
    {
      color: 'DarkOrange',
      textColor: DARK,
    },
    {
      color: 'DarkOrchid',
      textColor: LIGHT,
    },
    {
      color: 'DarkRed',
      textColor: LIGHT,
    },
    {
      color: 'DarkSalmon',
      textColor: DARK,
    },
    {
      color: 'DarkSeaGreen',
      textColor: DARK,
    },
    {
      color: 'DarkSlateBlue',
      textColor: LIGHT,
    },
    {
      color: 'DarkSlateGrey',
      textColor: LIGHT,
    },
    {
      color: 'DarkTurquoise',
      textColor: DARK,
    },
    {
      color: 'DarkViolet',
      textColor: LIGHT,
    },
    {
      color: 'DeepPink',
      textColor: LIGHT,
    },
    {
      color: 'DeepSkyBlue',
      textColor: LIGHT,
    },
    {
      color: 'DimGrey',
      textColor: LIGHT,
    },
    {
      color: 'DodgerBlue',
      textColor: LIGHT,
    },
    {
      color: 'FireBrick',
      textColor: LIGHT,
    },
    {
      color: 'FloralWhite',
      textColor: DARK,
    },
    {
      color: 'ForestGreen',
      textColor: LIGHT,
    },
    {
      color: 'Fuchsia',
      textColor: LIGHT,
    },
    {
      color: 'Gainsboro',
      textColor: DARK,
    },
    {
      color: 'GhostWhite',
      textColor: DARK,
    },
    {
      color: 'Gold',
      textColor: DARK,
    },
    {
      color: 'GoldenRod',
      textColor: DARK,
    },
    {
      color: 'Grey',
      textColor: LIGHT,
    },
    {
      color: 'Green',
      textColor: LIGHT,
    },
    {
      color: 'GreenYellow',
      textColor: DARK,
    },
    {
      color: 'HoneyDew',
      textColor: DARK,
    },
    {
      color: 'HotPink',
      textColor: DARK,
    },
    {
      color: 'IndianRed',
      textColor: LIGHT,
    },
    {
      color: 'Indigo',
      textColor: LIGHT,
    },
    {
      color: 'Ivory',
      textColor: DARK,
    },
    {
      color: 'Khaki',
      textColor: DARK,
    },
    {
      color: 'Lavender',
      textColor: DARK,
    },
    {
      color: 'LavenderBlush',
      textColor: DARK,
    },
    {
      color: 'LawnGreen',
      textColor: DARK,
    },
    {
      color: 'LemonChiffon',
      textColor: DARK,
    },
    {
      color: 'LightBlue',
      textColor: DARK,
    },
    {
      color: 'LightCoral',
      textColor: DARK,
    },
    {
      color: 'LightCyan',
      textColor: DARK,
    },
    {
      color: 'LightGoldenRodYellow',
      textColor: DARK,
    },
    {
      color: 'LightGrey',
      textColor: DARK,
    },
    {
      color: 'LightGreen',
      textColor: DARK,
    },
    {
      color: 'LightPink',
      textColor: DARK,
    },
    {
      color: 'LightSalmon',
      textColor: DARK,
    },
    {
      color: 'LightSeaGreen',
      textColor: LIGHT,
    },
    {
      color: 'LightSkyBlue',
      textColor: DARK,
    },
    {
      color: 'LightSlateGrey',
      textColor: LIGHT,
    },
    {
      color: 'LightSteelBlue',
      textColor: DARK,
    },
    {
      color: 'LightYellow',
      textColor: DARK,
    },
    {
      color: 'Lime',
      textColor: DARK,
    },
    {
      color: 'LimeGreen',
      textColor: LIGHT,
    },
    {
      color: 'Linen',
      textColor: DARK,
    },
    {
      color: 'Magenta',
      textColor: LIGHT,
    },
    {
      color: 'Maroon',
      textColor: LIGHT,
    },
    {
      color: 'MediumAquaMarine',
      textColor: DARK,
    },
    {
      color: 'MediumBlue',
      textColor: LIGHT,
    },
    {
      color: 'MediumOrchid',
      textColor: LIGHT,
    },
    {
      color: 'MediumPurple',
      textColor: LIGHT,
    },
    {
      color: 'MediumSeaGreen',
      textColor: LIGHT,
    },
    {
      color: 'MediumSlateBlue',
      textColor: LIGHT,
    },
    {
      color: 'MediumSpringGreen',
      textColor: DARK,
    },
    {
      color: 'MediumTurquoise',
      textColor: DARK,
    },
    {
      color: 'MediumVioletRed',
      textColor: LIGHT,
    },
    {
      color: 'MidnightBlue',
      textColor: LIGHT,
    },
    {
      color: 'MintCream',
      textColor: DARK,
    },
    {
      color: 'MistyRose',
      textColor: DARK,
    },
    {
      color: 'Moccasin',
      textColor: DARK,
    },
    {
      color: 'NavajoWhite',
      textColor: DARK,
    },
    {
      color: 'Navy',
      textColor: LIGHT,
    },
    {
      color: 'OldLace',
      textColor: DARK,
    },
    {
      color: 'Olive',
      textColor: LIGHT,
    },
    {
      color: 'OliveDrab',
      textColor: LIGHT,
    },
    {
      color: 'Orange',
      textColor: DARK,
    },
    {
      color: 'OrangeRed',
      textColor: LIGHT,
    },
    {
      color: 'Orchid',
      textColor: DARK,
    },
    {
      color: 'PaleGoldenRod',
      textColor: DARK,
    },
    {
      color: 'PaleGreen',
      textColor: DARK,
    },
    {
      color: 'PaleTurquoise',
      textColor: DARK,
    },
    {
      color: 'PaleVioletRed',
      textColor: LIGHT,
    },
    {
      color: 'PapayaWhip',
      textColor: DARK,
    },
    {
      color: 'PeachPuff',
      textColor: DARK,
    },
    {
      color: 'Peru',
      textColor: LIGHT,
    },
    {
      color: 'Pink',
      textColor: DARK,
    },
    {
      color: 'Plum',
      textColor: DARK,
    },
    {
      color: 'PowderBlue',
      textColor: DARK,
    },
    {
      color: 'Purple',
      textColor: LIGHT,
    },
    {
      color: 'RebeccaPurple',
      textColor: LIGHT,
    },
    {
      color: 'Red',
      textColor: LIGHT,
    },
    {
      color: 'RosyBrown',
      textColor: DARK,
    },
    {
      color: 'RoyalBlue',
      textColor: LIGHT,
    },
    {
      color: 'SaddleBrown',
      textColor: LIGHT,
    },
    {
      color: 'Salmon',
      textColor: DARK,
    },
    {
      color: 'SandyBrown',
      textColor: DARK,
    },
    {
      color: 'SeaGreen',
      textColor: LIGHT,
    },
    {
      color: 'SeaShell',
      textColor: DARK,
    },
    {
      color: 'Sienna',
      textColor: LIGHT,
    },
    {
      color: 'Silver',
      textColor: DARK,
    },
    {
      color: 'SkyBlue',
      textColor: DARK,
    },
    {
      color: 'SlateBlue',
      textColor: LIGHT,
    },
    {
      color: 'SlateGrey',
      textColor: LIGHT,
    },
    {
      color: 'Snow',
      textColor: DARK,
    },
    {
      color: 'SpringGreen',
      textColor: DARK,
    },
    {
      color: 'SteelBlue',
      textColor: LIGHT,
    },
    {
      color: 'Tan',
      textColor: DARK,
    },
    {
      color: 'Teal',
      textColor: LIGHT,
    },
    {
      color: 'Thistle',
      textColor: DARK,
    },
    {
      color: 'Tomato',
      textColor: LIGHT,
    },
    {
      color: 'Turquoise',
      textColor: DARK,
    },
    {
      color: 'Violet',
      textColor: DARK,
    },
    {
      color: 'Wheat',
      textColor: DARK,
    },
    {
      color: 'White',
      textColor: DARK,
    },
    {
      color: 'WhiteSmoke',
      textColor: DARK,
    },
    {
      color: 'Yellow',
      textColor: DARK,
    },
    {
      color: 'YellowGreen',
      textColor: DARK,
    },
  ];

  // Durstenfeld shuffle taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffle(colorArray);

  return colorArray.slice(0, numberOfCards);
}

export default Colors;
