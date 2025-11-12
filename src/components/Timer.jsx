import { createTimeModel, useTimeModel } from "react-compound-timer";
import { TimeModelValueView } from "../TimeModelValueView/TimeModelValueView";

const timer = createTimeModel({
  // start from 10 seconds
  initialTime: 10000,
  // count down
  direction: "backward",
});

export const Timer = () => {
  const { value } = useTimeModel(timer);

  return <div>{value.s} seconds {value.ms} milliseconds</div>;
};