import { useNavigate } from "react-router-dom";
import { Result } from "../../../interfaces/result/result.type";
import {
  ResultItemContainer,
  ResultItemTime,
  ResultItemTimeWrap,
  ResultItemTitle,
} from "./style";

interface Props {
  resultData: Result;
}

const ResultItem = ({ resultData }: Props) => {
  const navigate = useNavigate();

  return (
    <ResultItemContainer
      onClick={() => navigate(`/resultDetail/${resultData.id}`)}
    >
      <ResultItemTitle>{resultData.title} 현황</ResultItemTitle>
      <ResultItemTimeWrap>
        {/* <ResultItemTime>{resultData.startTime}</ResultItemTime>~ */}
        <ResultItemTime>{resultData.endTime}</ResultItemTime>
      </ResultItemTimeWrap>
    </ResultItemContainer>
  );
};

export default ResultItem;
