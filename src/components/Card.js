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
          width: '150px',
          height: '200px',
          lineHeight: '150px',
          borderRadius: '24px',
          userSelect: 'none',
          backgroundColor: props.color,
        }}
      >
        {props.color}
      </div>
    </div>
  );
}

export default Card;
