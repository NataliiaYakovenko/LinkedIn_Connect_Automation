import { useSelector } from "react-redux";

const ProgressBar = () => {
  const { current, total } = useSelector((state) => state.automation.progress);

  return (
    <div>
      Progress: {current} / {total}
    </div>
  );
};

export default ProgressBar;
