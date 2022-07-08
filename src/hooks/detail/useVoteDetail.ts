import { useState } from "react";

const useVoteDetail = () => {
  const [selectedVote, setSelectedVote] = useState<String>();

  const onChangeVote = (title: string) => {
    setSelectedVote(title);
  };

  return {
    onChangeVote,
    selectedVote,
  };
};

export default useVoteDetail;
