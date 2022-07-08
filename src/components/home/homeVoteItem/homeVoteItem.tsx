import { useNavigate } from "react-router-dom";
import { Vote } from "../../../interfaces/common/common.type";
import {
  HomeVoteItemContainer,
  HomeVoteItemTitle,
  HomeVoteTimeWrap,
  HomeVoteTime,
} from "./style";

interface Props {
  voteData: Vote;
}

const HomeVoteItem = ({ voteData }: Props) => {
  const navigate = useNavigate();

  return (
    <HomeVoteItemContainer onClick={() => navigate(`/detail/${voteData.id}`)}>
      <HomeVoteItemTitle>{voteData.title}</HomeVoteItemTitle>
      <HomeVoteTimeWrap>
        <HomeVoteTime>{voteData.startTime}</HomeVoteTime>~
        <HomeVoteTime>{voteData.endTime}</HomeVoteTime>
      </HomeVoteTimeWrap>
    </HomeVoteItemContainer>
  );
};

export default HomeVoteItem;
