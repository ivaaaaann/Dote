import { ResultDetail } from "../../../interfaces/result/result.type";
import {
  ResultDetailItemChart,
  ResultDetailItemContainer,
  ResultDetailItemName,
  ResultDetailItemPoint,
} from "./style";

interface Props {
  rank: number;
  resultDetailData: ResultDetail;
}

const ResultDetailItem = ({ rank, resultDetailData }: Props) => {
  return (
    <ResultDetailItemContainer>
      <ResultDetailItemName>{resultDetailData.name}</ResultDetailItemName>
      <ResultDetailItemChart vote_count={resultDetailData.vote_count} />
      <ResultDetailItemPoint>
        {resultDetailData.vote_count}표
      </ResultDetailItemPoint>
    </ResultDetailItemContainer>
  );
};

export default ResultDetailItem;
