import { useEffect } from "react";
import { useGetResultDetail } from "../../querys/result.query";

interface Params {
  id: string;
}

const useResultDetail = ({ id }: Params) => {
  const resultDetail = useGetResultDetail(
    { id },
    { enabled: !!id, refetchInterval: 1000 }
  );

  useEffect(() => {
    console.log(resultDetail);
  }, [resultDetail]);

  return {};
};

export default useResultDetail;
