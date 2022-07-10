import { useNavigate } from "react-router-dom";
import { Vote } from "../../../interfaces/common/common.type";
import {
  HomeVoteItemContainer,
  HomeVoteItemTitle,
  HomeVoteItemTimeWrap,
  HomeVoteItemTime,
} from "./style";

interface Props {
  voteData: Vote;
}

const HomeVoteItem = ({ voteData }: Props) => {
  const navigate = useNavigate();

  return (
    <HomeVoteItemContainer
      onClick={() => navigate(`/voteDetail/${voteData.id}`)}
    >
      <HomeVoteItemTitle>{voteData.title}</HomeVoteItemTitle>
      <HomeVoteItemTimeWrap>
        <HomeVoteItemTime>{voteData.startTime}</HomeVoteItemTime>~
        <HomeVoteItemTime>{voteData.endTime}</HomeVoteItemTime>
      </HomeVoteItemTimeWrap>
    </HomeVoteItemContainer>
  );
};

export default HomeVoteItem;
