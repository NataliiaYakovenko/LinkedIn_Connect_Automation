import { useSelector } from "react-redux";

const Counters = () => {
  const { sent, skipped, failed } = useSelector(
    (state) => state.automation.counters,
  );

  return (
    <div>
      Counters: sent: {sent}, skipped: {skipped}, failed: {failed}
    </div>
  );
};

export default Counters;
