import { useState } from "react";

interface Params {
  id: string;
}

const useVoteDetail = ({ id }: Params) => {
  const [selectedVote, setSelectedVote] = useState<String>("");

  const onChangeVote = (title: string) => {
    setSelectedVote(title);
  };

  const onSubmitVote = () => {
    if (selectedVote === "") return;

    try {
      window.alert("투표 완료");
    } catch (error) {}
  };

  return {
    selectedVote,
    onChangeVote,
    onSubmitVote,
  };
};

export default useVoteDetail;
