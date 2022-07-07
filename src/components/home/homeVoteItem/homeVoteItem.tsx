import { Vote } from "../../../interfaces/common/common.type";
import { HomeVoteItemContainer } from "./style";

interface Props {
  voteData: Vote;
}

const HomeVoteItem = ({ voteData }: Props) => {
  return <HomeVoteItemContainer></HomeVoteItemContainer>;
};

export default HomeVoteItem;
