


const StartButton = ({ isRunning, onStart, onStop }) => {
  const handlerClick = () => {
    if (isRunning) {
      onStop();
    } else {
      onStart();
    }
  };

  return <button onClick={handlerClick}>{isRunning ? "Stop" : "Start"}</button>;
};

export default StartButton;
