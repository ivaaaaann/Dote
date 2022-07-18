import { ResultContainer } from "./style";
import ResultItem from "./resultItem/resultItem";
import { useGetVotes } from "../../querys/vote.query";

const Result = () => {
  const { data, isLoading } = useGetVotes(
    { page: 0 },
    {
      staleTime: 10000,
      cacheTime: 20000,
    }
  );

  return (
    <ResultContainer>
      <>
        {isLoading ? (
          <>로딩중</>
        ) : (
          <>
            {data?.content.map((item) => (
              <ResultItem key={"result" + item.id} resultData={item} />
            ))}
          </>
        )}
      </>
    </ResultContainer>
  );
};

export default Result;
