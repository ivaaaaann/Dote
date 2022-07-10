import React from "react";
import { VoteDetail } from "../../../interfaces/common/common.type";
import { DetailItemContainer, DetailItemText } from "./style";

interface Props {
  voteDetailData: VoteDetail;
  onChangeVote: (title: string) => void;
  selectedVote: boolean;
}

const DetailItem = ({ voteDetailData, onChangeVote, selectedVote }: Props) => {
  return (
    <DetailItemContainer
      value={voteDetailData.voteTitle}
      isSelected={selectedVote}
      onClick={() => onChangeVote(voteDetailData.voteTitle)}
    >
      <DetailItemText>{voteDetailData.voteTitle}</DetailItemText>
    </DetailItemContainer>
  );
};

export default React.memo(DetailItem);
