import { useState, useEffect } from "react";
import { VoteDetail } from "../../interfaces/vote/vote.type";
import voteRepository from "../../repository/vote/vote.repository";

const useVoteForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [voteItems, setVoteItems] = useState<VoteDetail[]>([]);

  useEffect(() => {
    console.log(voteItems);
  }, [voteItems]);

  const handleChangeVoteItem = (voteTitle: string, id: number): void => {
    setVoteItems(
      voteItems.map((item) =>
        item.id === id ? { ...item, name: voteTitle } : item
      )
    );
  };

  const addVoteItem = (): void => {
    setVoteItems((items) => [...items, { id: voteItems.length, name: "" }]);
  };

  const deleteVoteItem = (id: number): void => {
    setVoteItems(voteItems.filter((item) => item.id !== id));
  };

  const createVote = async () => {
    const convertDate = date.replace("T", " ");

    const voteInfo = {
      title,
      items: voteItems,
      end_time: convertDate,
    };

    try {
      await voteRepository.createVote(voteInfo);
      window.alert("등록 성공");
      window.location.reload();
    } catch (e) {
      window.alert("등록 실패");
    }
  };

  return {
    voteItems,
    setTitle,
    setDate,
    setVoteItems,
    handleChangeVoteItem,
    addVoteItem,
    deleteVoteItem,
    createVote,
  };
};

export default useVoteForm;
