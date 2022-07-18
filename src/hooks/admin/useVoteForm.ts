import { useState, useEffect } from 'react';
import { VoteDetail } from '../../interfaces/vote/vote.type';
import voteRepository from '../../repository/vote/vote.repository';

const useVoteForm = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [voteItems, setVoteItems] = useState<VoteDetail[]>([]);

    useEffect(() => {
        console.log(voteItems);
    }, [voteItems])

    const handleChangeVoteItem = (voteTitle: string, id: number): void => {
        setVoteItems(
            voteItems.map((item) =>
                item.id === id
                    ? { ...item, name: voteTitle }
                    : item
            )
        );
    }

    const addVoteItem = (): void => {
        setVoteItems((items) => [
            ...items,
            { id: voteItems.length, name: "" },
        ])
    }

    const deleteVoteItem = (id: number): void => {
        setVoteItems(voteItems.filter((item) =>
            item.id !== id
        ))
    }

    const createVote = (): void => {
        const voteInfo = {
            title,
            items: voteItems,
            end_time: date
        }
        console.log(voteInfo);

        voteRepository.createVote(voteInfo)
    }

    return {
        voteItems,
        setTitle,
        setDate,
        setVoteItems,
        handleChangeVoteItem,
        addVoteItem,
        deleteVoteItem,
        createVote
    }
}

export default useVoteForm