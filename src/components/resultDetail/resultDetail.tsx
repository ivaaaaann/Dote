import { useParams } from "react-router-dom";
import useResultDetail from "../../hooks/result/useResultDetail";

const ResultDetail = () => {
  const { id } = useParams();

  const {} = useResultDetail({ id: String(id) });

  return <div></div>;
};

export default ResultDetail;
