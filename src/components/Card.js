import { useEffect, useState } from 'react';

function Card(props) {
  const [color, setColor] = useState(props.color);
  const [textColor, setTextColor] = useState(props.textColor);
  const func = () => {
    console.log('Color of the card clicked: ' + color);
  };

  useEffect(() => {
    document.addEventListener('click', props.markCardSelected);

    return () => {
      document.removeEventListener('click', props.markCardSelected);
    };
  });

  return (
    <div
      id='card'
      style={{
        color: textColor,
        fontWeight: '700',
        width: '200px',
        height: '250px',
        lineHeight: '150px',
        borderRadius: '12px',
        userSelect: 'none',
        backgroundColor: color,
        //   borderStyle: 'solid',
        //   borderWidth: '2px',
        //   borderColor: '#ededf0',
      }}
    >
      {color}
    </div>
  );
}

export default Card;
