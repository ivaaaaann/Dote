import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VoteDetail } from "../../interfaces/vote/vote.type";
import { useGetVote, usePostVote } from "../../querys/vote.query";

interface Params {
  id: string;
}

const useVoteDetail = ({ id }: Params) => {
  const navigate = useNavigate();

  const [selectedVote, setSelectedVote] = useState<VoteDetail>({
    id: -1,
    name: "",
  });

  const { data, isLoading } = useGetVote(
    { voteId: Number(id) },
    { enabled: !!id }
  );
  const postVoteMutation = usePostVote();

  const onChangeVote = (vote: VoteDetail) => {
    setSelectedVote(vote);
  };

  const onSubmitVote = async () => {
    if (selectedVote.id === -1) return;
    postVoteMutation.mutateAsync(
      {
        voteId: Number(id),
        teamId: selectedVote.id,
      },
      {
        onSuccess: () => {
          window.alert("투표에 성공하였습니다.");
          navigate("/");
        },
        onError: () =>
          window.alert("중복투표 했거나, 하던 도중 오류가 발생하였습니다."),
      }
    );
  };

  return {
    selectedVote,
    onChangeVote,
    onSubmitVote,
    voteTeams: data?.content,
    isLoading,
  };
};

export default useVoteDetail;
