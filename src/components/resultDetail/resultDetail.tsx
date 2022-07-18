import { useParams } from "react-router-dom";
import useResultDetail from "../../hooks/result/useResultDetail";
import ResultDetailItem from "./resultDetailItem/resultDetailItem";
import { ResultDetailContainer } from "./style";

const ResultDetail = () => {
  const { id } = useParams();

  const { resultDetailData } = useResultDetail({ id: String(id) });

  return (
    <ResultDetailContainer>
      {resultDetailData?.map((result, idx) => (
        <ResultDetailItem
          rank={idx + 1}
          resultDetailData={result}
          key={"resultDetail " + result.name}
        />
      ))}
    </ResultDetailContainer>
  );
};

export default ResultDetail;
