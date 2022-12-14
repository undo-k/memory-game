import { useEffect } from 'react';

function Card(props) {
  useEffect(() => {
    document.addEventListener('click', props.handleSelection);

    return () => {
      document.removeEventListener('click', props.handleSelection);
    };
  });

  return (
    <div
      id='card'
      style={{
        color: props.textColor,
        fontWeight: '700',
        maxWidth: '30vw',
        width: '200px',
        height: '250px',
        lineHeight: '150px',
        borderRadius: '12px',
        userSelect: 'none',
        backgroundColor: props.color,
      }}
    >
      {props.color}
    </div>
  );
}

export default Card;
