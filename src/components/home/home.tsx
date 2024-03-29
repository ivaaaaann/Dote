import { useGetVotes } from "../../querys/vote.query";
import HomeVoteItem from "./homeVoteItem/homeVoteItem";
import { HomeContainer, AddVoteBtn } from "./style";
import CustomModal from "../common/modal/customModal";
import VoteForm from "../admin/voteForm/voteForm";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/user/userStore";
const Home = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const userInfo = useRecoilValue(userAtom);
  console.log(userInfo);

  const { data, isLoading } = useGetVotes(
    { page: 0 },
    {
      staleTime: 10000,
      cacheTime: 20000,
    }
  );

  return (
    <HomeContainer>
      {userInfo.role === "ADMIN" && (
        <AddVoteBtn
          onClick={() => {
            setModalState(true);
          }}
        >
          추가
        </AddVoteBtn>
      )}

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
