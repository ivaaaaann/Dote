import { Vote } from "../../interfaces/common/common.type";
import HomeVoteItem from "./homeVoteItem/homeVoteItem";
import { HomeContainer } from "./style";

const test: Vote[] = [
  {
    title: "투표 1",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    title: "투표 2",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    title: "투표 3",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    title: "투표 4",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    title: "투표 5",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    title: "투표 6",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    title: "투표 7",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
  {
    title: "투표 8",
    startTime: "2022-07-08 12:00",
    endTime: "2022-07-08 14:00",
  },
];

const Home = () => {
  return (
    <HomeContainer>
      {test.map((item) => (
        <HomeVoteItem voteData={item} />
      ))}
    </HomeContainer>
  );
};

export default Home;
