import { useState, useEffect } from 'react';
import { VoteDetail } from '../../interfaces/common/common.type';

const useVoteForm = () => {
    const [voteItems, setVoteItems] = useState<VoteDetail[]>([]);
    useEffect(() => {
        console.log(voteItems);

    }, [voteItems])

    const handleChangeVoteItem = (voteName: string, id: number): void => {
        setVoteItems(
            voteItems.map((item) =>
                item.id === id
                    ? { ...item, voteTitle: voteName }
                    : item
            )
        );
    }

    const addVoteItem = (): void => {
        setVoteItems((items) => [
            ...items,
            { id: voteItems.length, voteTitle: "" },
        ])
    }

    const deleteVoteItem = (id: number): void => {
        setVoteItems(voteItems.filter((item) =>
            item.id !== id
        ))
    }

    return {
        voteItems,
        setVoteItems,
        handleChangeVoteItem,
        addVoteItem,
        deleteVoteItem
    }
}

export default useVoteForm