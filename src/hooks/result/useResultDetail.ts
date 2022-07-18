import { useEffect, useState } from "react";
import { ResultDetail } from "../../interfaces/result/result.type";
import { useGetResultDetail } from "../../querys/result.query";

interface Params {
  id: string;
}

const useResultDetail = ({ id }: Params) => {
  const { data } = useGetResultDetail(
    { id },
    { enabled: !!id, refetchInterval: 1000 }
  );

  const [resultDetailData, setResultDetailData] = useState<ResultDetail[]>([]);

  useEffect(() => {
    if (data) {
      setResultDetailData(
        data?.content.sort((a, b) => {
          return b.vote_count - a.vote_count;
        })
      );
    }
  }, [data]);

  return { resultDetailData };
};

export default useResultDetail;
