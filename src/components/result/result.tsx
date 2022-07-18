import { ResultContainer } from "./style";
import ResultItem from "./resultItem/resultItem";
import { Result as ResultType } from "../../interfaces/result/result.type";

const test: ResultType[] = [
  {
    id: 1,
    title: "투표 1",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 2,
    title: "투표 2",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 3,
    title: "투표 3",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 4,
    title: "투표 4",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 5,
    title: "투표 5",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 6,
    title: "투표 6",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 7,
    title: "투표 7",
    endTime: "2022-07-08 14:00",
  },
  {
    id: 8,
    title: "투표 8",
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
