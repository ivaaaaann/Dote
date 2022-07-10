import { ResultContainer } from "./style";
import { Result as ResultType } from "../../interfaces/common/common.type";
import ResultItem from "./resultItem/resultItem";

const test: ResultType[] = [
  {
    id: 1,
    title: "투표 1",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 2,
    title: "투표 2",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 3,
    title: "투표 3",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 4,
    title: "투표 4",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 5,
    title: "투표 5",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 6,
    title: "투표 6",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 7,
    title: "투표 7",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 8,
    title: "투표 8",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
];

const Result = () => {
  return (
    <ResultContainer>
      {test.map((item) => (
        <ResultItem key={"result" + item.id} resultData={item} />
      ))}
    </ResultContainer>
  );
};

export default Result;
