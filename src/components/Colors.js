import shuffle from './../utils/shuffle';

function Colors(numberOfCards) {
  const DARK = '#15141A'; // #15141A
  const LIGHT = '#ededf0';
  const colorArray = [
    {
      key: 'AliceBlue',
      textColor: DARK,
    },
    {
      key: 'AntiqueWhite',
      textColor: DARK,
    },
    {
      key: 'Aqua',
      textColor: DARK,
    },
    {
      key: 'Aquamarine',
      textColor: DARK,
    },
    {
      key: 'Azure',
      textColor: DARK,
    },
    {
      key: 'Beige',
      textColor: DARK,
    },
    {
      key: 'Bisque',
      textColor: DARK,
    },
    {
      key: 'Black',
      textColor: LIGHT,
    },
    {
      key: 'BlanchedAlmond',
      textColor: DARK,
    },
    {
      key: 'Blue',
      textColor: LIGHT,
    },
    {
      key: 'BlueViolet',
      textColor: LIGHT,
    },
    {
      key: 'Brown',
      textColor: LIGHT,
    },
    {
      key: 'BurlyWood',
      textColor: DARK,
    },
    {
      key: 'CadetBlue',
      textColor: LIGHT,
    },
    {
      key: 'Chartreuse',
      textColor: DARK,
    },
    {
      key: 'Chocolate',
      textColor: LIGHT,
    },
    {
      key: 'Coral',
      textColor: DARK,
    },
    {
      key: 'CornflowerBlue',
      textColor: LIGHT,
    },
    {
      key: 'Cornsilk',
      textColor: DARK,
    },
    {
      key: 'Crimson',
      textColor: LIGHT,
    },
    {
      key: 'Cyan',
      textColor: DARK,
    },
    {
      key: 'DarkBlue',
      textColor: LIGHT,
    },
    {
      key: 'DarkCyan',
      textColor: LIGHT,
    },
    {
      key: 'DarkGoldenRod',
      textColor: LIGHT,
    },
    {
      key: 'DarkGrey',
      textColor: DARK,
    },
    {
      key: 'DarkGreen',
      textColor: LIGHT,
    },
    {
      key: 'DarkKhaki',
      textColor: DARK,
    },
    {
      key: 'DarkMagenta',
      textColor: LIGHT,
    },
    {
      key: 'DarkOliveGreen',
      textColor: LIGHT,
    },
    {
      key: 'DarkOrange',
      textColor: DARK,
    },
    {
      key: 'DarkOrchid',
      textColor: LIGHT,
    },
    {
      key: 'DarkRed',
      textColor: LIGHT,
    },
    {
      key: 'DarkSalmon',
      textColor: DARK,
    },
    {
      key: 'DarkSeaGreen',
      textColor: DARK,
    },
    {
      key: 'DarkSlateBlue',
      textColor: LIGHT,
    },
    {
      key: 'DarkSlateGrey',
      textColor: LIGHT,
    },
    {
      key: 'DarkTurquoise',
      textColor: DARK,
    },
    {
      key: 'DarkViolet',
      textColor: LIGHT,
    },
    {
      key: 'DeepPink',
      textColor: LIGHT,
    },
    {
      key: 'DeepSkyBlue',
      textColor: LIGHT,
    },
    {
      key: 'DimGrey',
      textColor: LIGHT,
    },
    {
      key: 'DodgerBlue',
      textColor: LIGHT,
    },
    {
      key: 'FireBrick',
      textColor: LIGHT,
    },
    {
      key: 'FloralWhite',
      textColor: DARK,
    },
    {
      key: 'ForestGreen',
      textColor: LIGHT,
    },
    {
      key: 'Fuchsia',
      textColor: LIGHT,
    },
    {
      key: 'Gainsboro',
      textColor: DARK,
    },
    {
      key: 'GhostWhite',
      textColor: DARK,
    },
    {
      key: 'Gold',
      textColor: DARK,
    },
    {
      key: 'GoldenRod',
      textColor: DARK,
    },
    {
      key: 'Grey',
      textColor: LIGHT,
    },
    {
      key: 'Green',
      textColor: LIGHT,
    },
    {
      key: 'GreenYellow',
      textColor: DARK,
    },
    {
      key: 'HoneyDew',
      textColor: DARK,
    },
    {
      key: 'HotPink',
      textColor: DARK,
    },
    {
      key: 'IndianRed',
      textColor: LIGHT,
    },
    {
      key: 'Indigo',
      textColor: LIGHT,
    },
    {
      key: 'Ivory',
      textColor: DARK,
    },
    {
      key: 'Khaki',
      textColor: DARK,
    },
    {
      key: 'Lavender',
      textColor: DARK,
    },
    {
      key: 'LavenderBlush',
      textColor: DARK,
    },
    {
      key: 'LawnGreen',
      textColor: DARK,
    },
    {
      key: 'LemonChiffon',
      textColor: DARK,
    },
    {
      key: 'LightBlue',
      textColor: DARK,
    },
    {
      key: 'LightCoral',
      textColor: DARK,
    },
    {
      key: 'LightCyan',
      textColor: DARK,
    },
    {
      key: 'LightGoldenRodYellow',
      textColor: DARK,
    },
    {
      key: 'LightGrey',
      textColor: DARK,
    },
    {
      key: 'LightGreen',
      textColor: DARK,
    },
    {
      key: 'LightPink',
      textColor: DARK,
    },
    {
      key: 'LightSalmon',
      textColor: DARK,
    },
    {
      key: 'LightSeaGreen',
      textColor: LIGHT,
    },
    {
      key: 'LightSkyBlue',
      textColor: DARK,
    },
    {
      key: 'LightSlateGrey',
      textColor: LIGHT,
    },
    {
      key: 'LightSteelBlue',
      textColor: DARK,
    },
    {
      key: 'LightYellow',
      textColor: DARK,
    },
    {
      key: 'Lime',
      textColor: DARK,
    },
    {
      key: 'LimeGreen',
      textColor: LIGHT,
    },
    {
      key: 'Linen',
      textColor: DARK,
    },
    {
      key: 'Magenta',
      textColor: LIGHT,
    },
    {
      key: 'Maroon',
      textColor: LIGHT,
    },
    {
      key: 'MediumAquaMarine',
      textColor: DARK,
    },
    {
      key: 'MediumBlue',
      textColor: LIGHT,
    },
    {
      key: 'MediumOrchid',
      textColor: LIGHT,
    },
    {
      key: 'MediumPurple',
      textColor: LIGHT,
    },
    {
      key: 'MediumSeaGreen',
      textColor: LIGHT,
    },
    {
      key: 'MediumSlateBlue',
      textColor: LIGHT,
    },
    {
      key: 'MediumSpringGreen',
      textColor: DARK,
    },
    {
      key: 'MediumTurquoise',
      textColor: DARK,
    },
    {
      key: 'MediumVioletRed',
      textColor: LIGHT,
    },
    {
      key: 'MidnightBlue',
      textColor: LIGHT,
    },
    {
      key: 'MintCream',
      textColor: DARK,
    },
    {
      key: 'MistyRose',
      textColor: DARK,
    },
    {
      key: 'Moccasin',
      textColor: DARK,
    },
    {
      key: 'NavajoWhite',
      textColor: DARK,
    },
    {
      key: 'Navy',
      textColor: LIGHT,
    },
    {
      key: 'OldLace',
      textColor: DARK,
    },
    {
      key: 'Olive',
      textColor: LIGHT,
    },
    {
      key: 'OliveDrab',
      textColor: LIGHT,
    },
    {
      key: 'Orange',
      textColor: DARK,
    },
    {
      key: 'OrangeRed',
      textColor: LIGHT,
    },
    {
      key: 'Orchid',
      textColor: DARK,
    },
    {
      key: 'PaleGoldenRod',
      textColor: DARK,
    },
    {
      key: 'PaleGreen',
      textColor: DARK,
    },
    {
      key: 'PaleTurquoise',
      textColor: DARK,
    },
    {
      key: 'PaleVioletRed',
      textColor: LIGHT,
    },
    {
      key: 'PapayaWhip',
      textColor: DARK,
    },
    {
      key: 'PeachPuff',
      textColor: DARK,
    },
    {
      key: 'Peru',
      textColor: LIGHT,
    },
    {
      key: 'Pink',
      textColor: DARK,
    },
    {
      key: 'Plum',
      textColor: DARK,
    },
    {
      key: 'PowderBlue',
      textColor: DARK,
    },
    {
      key: 'Purple',
      textColor: LIGHT,
    },
    {
      key: 'RebeccaPurple',
      textColor: LIGHT,
    },
    {
      key: 'Red',
      textColor: LIGHT,
    },
    {
      key: 'RosyBrown',
      textColor: DARK,
    },
    {
      key: 'RoyalBlue',
      textColor: LIGHT,
    },
    {
      key: 'SaddleBrown',
      textColor: LIGHT,
    },
    {
      key: 'Salmon',
      textColor: DARK,
    },
    {
      key: 'SandyBrown',
      textColor: DARK,
    },
    {
      key: 'SeaGreen',
      textColor: LIGHT,
    },
    {
      key: 'SeaShell',
      textColor: DARK,
    },
    {
      key: 'Sienna',
      textColor: LIGHT,
    },
    {
      key: 'Silver',
      textColor: DARK,
    },
    {
      key: 'SkyBlue',
      textColor: DARK,
    },
    {
      key: 'SlateBlue',
      textColor: LIGHT,
    },
    {
      key: 'SlateGrey',
      textColor: LIGHT,
    },
    {
      key: 'Snow',
      textColor: DARK,
    },
    {
      key: 'SpringGreen',
      textColor: DARK,
    },
    {
      key: 'SteelBlue',
      textColor: LIGHT,
    },
    {
      key: 'Tan',
      textColor: DARK,
    },
    {
      key: 'Teal',
      textColor: LIGHT,
    },
    {
      key: 'Thistle',
      textColor: DARK,
    },
    {
      key: 'Tomato',
      textColor: LIGHT,
    },
    {
      key: 'Turquoise',
      textColor: DARK,
    },
    {
      key: 'Violet',
      textColor: DARK,
    },
    {
      key: 'Wheat',
      textColor: DARK,
    },
    {
      key: 'White',
      textColor: DARK,
    },
    {
      key: 'WhiteSmoke',
      textColor: DARK,
    },
    {
      key: 'Yellow',
      textColor: DARK,
    },
    {
      key: 'YellowGreen',
      textColor: DARK,
    },
  ];

  return shuffle(colorArray).slice(0, numberOfCards);
}

export default Colors;
