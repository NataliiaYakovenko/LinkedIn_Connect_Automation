import { useSelector } from "react-redux";

function App() {
  const automation = useSelector((state) => state.automation);
  return (
    <div>
      <h1>LinkedIn</h1>
      <pre>{JSON.stringify(automation, null, 2)}</pre>
    </div>
  );
}

export default App;
