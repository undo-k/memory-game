import { useEffect, useState } from 'react';

function Card(props) {
  const [color, setColor] = useState(props.color);

  return (
    <div>
      <div
        id='card'
        style={{
          color: props.textColor,
          fontWeight: '700',
          width: '200px',
          height: '250px',
          lineHeight: '150px',
          borderRadius: '12px',
          userSelect: 'none',
          backgroundColor: props.color,
          //   borderStyle: 'solid',
          //   borderWidth: '2px',
          //   borderColor: '#ededf0',
        }}
      >
        {props.color}
      </div>
    </div>
  );
}

export default Card;
