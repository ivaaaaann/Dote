import { useGetVotes } from "../../querys/vote.query";
import HomeVoteItem from "./homeVoteItem/homeVoteItem";
import { HomeContainer } from "./style";

const Home = () => {
  const { data, isLoading } = useGetVotes(
    { page: 1 },
    {
      staleTime: 10000,
      cacheTime: 20000,
    }
  );

  return (
    <HomeContainer>
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
