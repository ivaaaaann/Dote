import React from "react";
import { VoteDetail } from "../../../interfaces/vote/vote.type";
import { DetailItemContainer, DetailItemText } from "./style";

interface Props {
  voteDetailData: VoteDetail;
  onChangeVote: (vote: VoteDetail) => void;
  selectedVote: boolean;
}

const DetailItem = ({ voteDetailData, onChangeVote, selectedVote }: Props) => {
  return (
    <DetailItemContainer
      value={voteDetailData.name}
      isSelected={selectedVote}
      onClick={() => onChangeVote(voteDetailData)}
    >
      <DetailItemText>{voteDetailData.name}</DetailItemText>
    </DetailItemContainer>
  );
};

export default React.memo(DetailItem);
