import { VoteDetail } from "../../../interfaces/common/common.type";
import { DetailItemContainer } from "./style";

interface Props {
  voteDetailData: VoteDetail;
}

const DetailItem = ({ voteDetailData }: Props) => {
  return <DetailItemContainer></DetailItemContainer>;
};

export default DetailItem;
