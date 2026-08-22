import { useSelector, useDispatch } from "react-redux";
import StartButton from "./components/StartButton/StartButton";
import { startRunThunk, stopRunThunk } from "./store/slices/automationSlice";

function App() {
  const automation = useSelector((state) => state.automation);
  const dispatch = useDispatch();

  const isRunning = automation.status === "running";

  const handlerStart = () => {
    dispatch(startRunThunk());
  };

  const handlerStop = () => {
    dispatch(stopRunThunk());
  };

  return (
    <div>
      <h1>LinkedIn</h1>
      <StartButton
        isRunning={isRunning}
        onStart={handlerStart}
        onStop={handlerStop}
      />
      <pre>{JSON.stringify(automation, null, 2)}</pre>
    </div>
  );
}

export default App;
