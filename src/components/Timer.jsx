import { createTimeModel, useTimeModel } from "react-compound-timer";
import { TimeModelValueView } from "../TimeModelValueView/TimeModelValueView";

const timer = createTimeModel({
  initialTime: 10000,
  direction: "backward",
});

export const Timer = () => {
  const { value } = useTimeModel(timer);

  return <div>{value.s} seconds {value.ms} milliseconds</div>;
};