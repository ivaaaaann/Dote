import { useNavigate, useParams } from "react-router-dom";
import useVoteDetail from "../../hooks/vote/useVoteDetail";
import DetailItem from "./detailItem/detailItem";
import { DetailContainer, DetailSubmitButton } from "./style";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedVote, onChangeVote, onSubmitVote, voteTeams, isLoading } =
    useVoteDetail({
      id: String(id),
    });

  return (
    <>
      <DetailContainer>
        {isLoading ? (
          <>로딩중...</>
        ) : (
          <>
            {voteTeams?.map((item) => (
              <DetailItem
                key={"voteDetailItem" + item.id}
                voteDetailData={item}
                onChangeVote={onChangeVote}
                selectedVote={item.id === selectedVote.id}
              />
            ))}
          </>
        )}

        <DetailSubmitButton direction="left" onClick={() => navigate("/")}>
          뒤로가기
        </DetailSubmitButton>
        <DetailSubmitButton direction="right" onClick={onSubmitVote}>
          투표
        </DetailSubmitButton>
      </DetailContainer>
    </>
  );
};

export default Detail;
