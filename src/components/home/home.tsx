import { useGetVotes } from "../../querys/vote.query";
import HomeVoteItem from "./homeVoteItem/homeVoteItem";
import { HomeContainer } from "./style";
import CustomModal from "../common/modal/customModal";
import VoteForm from "../admin/voteForm/voteForm";
import { useState } from "react";

const Home = () => {
  const [modalState, setModalState] = useState<boolean>(true);

  const { data, isLoading } = useGetVotes(
    { page: 1 },
    {
      staleTime: 10000,
      cacheTime: 20000,
    }
  );

  return (
    <HomeContainer>
      {modalState && (
        <CustomModal closeModal={setModalState}>
          <VoteForm />
        </CustomModal>
      )}
      <>
        {isLoading ? (
          <>로딩중</>
        ) : (
          <>
            {data?.content.map((item) => (
              <HomeVoteItem key={"vote " + item.id} voteData={item} />
            ))}
          </>
        )}
      </>
    </HomeContainer>
  );
};

export default Home;
