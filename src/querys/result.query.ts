import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { ResultDetailResponse } from "../interfaces/result/result.type";
import { getResultDetail } from "../repository/result/result.param";
import resultRepository from "../repository/result/result.repository";

export const useGetResultDetail = (
  { id }: getResultDetail,
  options?: UseQueryOptions<
    ResultDetailResponse,
    AxiosError,
    ResultDetailResponse,
    "result/getResultDetail"
  >
): UseQueryResult<ResultDetailResponse, AxiosError> =>
  useQuery(
    "result/getResultDetail",
    () => resultRepository.getResultDetail({ id }),
    options
  );
