import { useSelector } from "react-redux";

const Limits = () => {
  const { dailyRemaining, weeklyRemaining } = useSelector(
    (state) => state.automation.limits,
  );

  return (
    <div>
      Limits: daily limits: {dailyRemaining}, weekly limits: {weeklyRemaining}
    </div>
  );
};

export default Limits;
