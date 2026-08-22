import { useSelector, useDispatch } from "react-redux";
import StartButton from "./components/StartButton/StartButton";
import { startRunThunk, stopRunThunk } from "./store/slices/automationSlice";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Counters from "./components/Counters/Counters";
import Limits from "./components/Limits/Limits";

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
      <ProgressBar />
      <Counters />
      <Limits />
      <pre>{JSON.stringify(automation, null, 2)}</pre>
    </div>
  );
}

export default App;
