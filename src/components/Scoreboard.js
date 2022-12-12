function Scoreboard(props) {
  return (
    <div>
      <p>
        <b>Score: {props.score}</b>
      </p>
      <p>
        <b>High Score: {props.highScore}</b>
      </p>
    </div>
  );
}

export default Scoreboard;
